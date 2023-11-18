<?php

namespace App\Http\Controllers\Customer;

use App\Enums\BidRequestStatusType;
use App\Enums\InvoiceItemType;
use App\Enums\ServiceType;
use App\Enums\SpacingType;
use App\Enums\UnitType;
use App\Enums\WorkType;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrderRequest;
use App\Models\ProjectManagement\Bid;
use App\Models\ProjectManagement\BidRequest;
use App\Models\ProjectManagement\Task;
use App\Models\User;
use App\Services\CartService;
use App\Services\PriceCalculatorService;
use App\Services\ProjectManagement\TaskCreateService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BidRequestController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Customer/BidRequests/Index', [
            'data'         => [
                'title' => __('Bid Requests'),
            ],
            'bid_requests' => BidRequest::with(['status', 'task' => function ($q) {
                return $q->select(['id', 'service_id', 'title'])
                    ->with(['service' => function ($serviceQuery) {
                        $serviceQuery->select(['id', 'name']);
                    }]);
            }])
                ->whereHas('task', function ($q) {
                    return $q->where('customer_id', auth()->user()->id);
                })->where('bid_request_status_id', '<>', BidRequestStatusType::HIRED)->orderBy('id', 'DESC')
                ->paginate(config('app.pagination.per_page'))
                ->withQueryString(),
        ]);
    }

    public function create(Request $request, CartService $cartService)
    {
        $initial_records = [];

        if ($request->id && ($item = $cartService->getContentById($request->id))) {
            $initial_records       = $item['fields'];
            $initial_records['id'] = $request->id;
            //pr($initial_records);
        }

        return inertia('Customer/BidRequests/Create', [
            'data'            => [
                'dropdowns' => Task::dropdown(),
                'title'     => __('Request for Bid'),
            ],
            'initial_records' => $initial_records,
        ]);
    }

    public function store(StoreOrderRequest $request, PriceCalculatorService $priceCalculatorService, CartService $cartService)
    {

        DB::beginTransaction();

        try {

            $data                = $priceCalculatorService->calculate($request)['fields'];
            $data['customer_id'] = auth()->user()->id;

            $task = (new TaskCreateService())($data);
            // reset, deadline, status
            Task::resetInformationForBidding($task->id);

            $bidRequest = BidRequest::create([
                'task_id'               => $task->id,
                'budget'                => $request->budget,
                'bid_request_status_id' => BidRequestStatusType::OPEN,
            ]);

            $done = true;
            DB::commit();

        } catch (\Exception$e) {
            DB::rollback();
            $done = null;
        }

        if ($done) {
            return redirect()->route('customer.bidRequests.show', $bidRequest->uuid)->withSuccess(__('Successfully created'));
        } else {
            return redirect()->back()->withFail(__('Please try again later'));
        }
    }

    public function show(Request $request, BidRequest $bidRequest)
    {
        if ($bidRequest->bid_request_status_id == BidRequestStatusType::HIRED) {
            return redirect()->route('customer.bidRequests.index');
        }

        $sort = $this->getSortBy($request);

        return inertia('Customer/BidRequests/Show', [
            'data' => function () use ($bidRequest) {
                // ALWAYS included on first visit
                // OPTIONALLY included on partial reloads
                // ONLY evaluated when needed
                $bidRequest->load('status');

                return [
                    'title'       => __('Bid Requests'),
                    'bid_request' => $bidRequest,
                    'dropdowns'   => [
                        'sort_by_options' => BidRequest::sortingOptions(),
                    ],
                ];
            },
            'filters' => $request->only('filters'),
            'bids'    => Bid::with([
                'author' => function ($query) {
                    $query->select(['id', 'uuid', "code", "photo"]);
                },
            ])
                ->where('bid_request_id', $bidRequest->id)
                ->orderBy($sort['by'], $sort['type'])
                ->paginate(config('app.pagination.per_page'))
                ->withQueryString(),
        ]);
    }

    public function destroy(BidRequest $bidRequest)
    {
        DB::beginTransaction();

        try {
            Bid::where('bid_request_id', $bidRequest->id)->delete();
            $bidRequest->task->delete();
            $bidRequest->delete();

            DB::commit();
            $done = true;

        } catch (\Exception$e) {
            DB::rollback();
            $done = null;
        }

        if ($done) {
            return redirect()->route('customer.bidRequests.index')->withSuccess(__('Successfully deleted'));
        } else {
            return redirect()->back()->withFail(__('Please try again later'));
        }
    }

    public function brief(BidRequest $bidRequest)
    {
        $bidRequest->load(['task', 'status']);

        $task = $bidRequest->task;

        return inertia('Customer/BidRequests/TaskInformation', [
            'task'        => $task->withDetails(),
            'bid_request' => $bidRequest,
            'data'        => [
                'service_types' => ServiceType::getForFrontEnd(),
                'work_types'    => WorkType::get(),
                'spacing_types' => SpacingType::get(),
                'unit_types'    => UnitType::get(),

            ],
        ]);
    }

    public function authorProfile(BidRequest $bidRequest, $user)
    {
        $author = $this->getAuthorProfileAsCustomerView($user);

        if (!$author) {
            return redirect()->back();
        }

        return inertia()->modal('Customer/BidRequests/AuthorProfile', [
            'data' => [
                'title'      => __('Bidder Profile'),
                'author' => $author,
            ],
        ])->baseRoute('customer.bidRequests.show', $bidRequest->uuid);
    }

    public function acceptBid(BidRequest $bidRequest, Bid $bid, CartService $cartService)
    {
        $task = Task::with(['service' => function ($q) {
            $q->select(['id', 'name']);
        }])->where('id', $bidRequest->task_id)
            ->select(['id', 'service_id', 'title', 'uuid'])->get()->first();

        $token = $cartService->saveCartForBidPayment(auth()->user()->id, $bid->total, [
            [
                'type'      => InvoiceItemType::EXISTING_TASK,
                'bid_id'    => $bid->id,
                'task_id'   => $task->id,
                'task_uuid' => $task->uuid,
                'name'      => $task->service->name,
                'title'     => $task->title,
                'price'     => $bid->total,
                'quantity'  => 1,
                'sub_total' => $bid->total,
            ],
        ]);

        return redirect()->route('choose_payment_method', ['token' => $token]);
    }

    private function getSortBy(Request $request): array
    {
        $sort_by   = 'id';
        $sort_type = 'DESC';

        if ($request->filled('search') && $request->filled('search.sort_by')) {
            switch ($request->input('search.sort_by')) {
                case 'budget_high_to_low':
                    $sort_by   = 'total';
                    $sort_type = 'DESC';
                    break;
                case 'budget_low_to_high':
                    $sort_by   = 'total';
                    $sort_type = 'ASC';
                    break;
                default:
                    $sort_by   = 'id';
                    $sort_type = 'DESC';
                    break;
            }
        }
        return ['by' => $sort_by, 'type' => $sort_type];
    }

    private function getAuthorProfileAsCustomerView($uuid)
    {
        $number_of_reviews = 5;
        return User::where('uuid', $uuid)
            ->select(['id', 'uuid', 'code', 'photo'])
            ->with(['authorRatings' => function ($q) use ($number_of_reviews) {
                $q->select('ratings.id', 'ratings.user_id', 'comment', 'ratings.number')
                    ->whereNull('hide_from_customer')->orderBy('id', "DESC")->limit($number_of_reviews);
            }, 'authorProfile' => function ($q) {
                $q->select('id', "user_id", "author_level_id", "education_level_id", "bio");
            }

                , 'authorProfile.authorLevel' => function ($q) {
                    $q->select('id', "name");
                },
                'authorProfile.educationLevel'])
            ->withCount('completedTasks')
            ->withAvg('authorRatings', 'number')
            ->get()->first();
    }

}
