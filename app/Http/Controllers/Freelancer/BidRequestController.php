<?php

namespace App\Http\Controllers\Freelancer;

use App\Enums\BidRequestStatusType;
use App\Enums\ServiceType;
use App\Enums\SpacingType;
use App\Enums\UnitType;
use App\Enums\WorkType;
use App\Http\Controllers\Controller;
use App\Models\Business\Service;
use App\Models\Freelancer\FreelancerProfile;
use App\Models\ProjectManagement\Bid;
use App\Models\ProjectManagement\BidRequest;
use Illuminate\Http\Request;

class BidRequestController extends Controller
{
    public function index(Request $request)
    {
        $profile = $this->getFreelancerProfile();

        $freelancer_level_value = $profile->freelancerLevel->numeric_value;

        $services = array_filter([$profile->service_id_1, $profile->service_id_2, $profile->service_id_3]);

        $sort = $this->getSortBy($request);

        return inertia('Freelancer/BidRequests/Index', [
            'data'         => function () use ($services) {
                // ALWAYS included on first visit
                // OPTIONALLY included on partial reloads
                // ONLY evaluated when needed
                return [
                    'title'        => __('Bid Requests'),
                    'applied_bids' => Bid::with(['bidRequest' => function ($q) {
                        $q->where('bid_request_status_id', BidRequestStatusType::OPEN);
                    }])->where('freelancer_id', auth()->user()->id)->get(),
                    'dropdowns'    => [
                        'services'        => Service::select(['id', 'name'])
                            ->whereIn('id', $services)->get()
                            ->prepend(['id' => '', 'name' => __('All')]),
                        'sort_by_options' => BidRequest::sortingOptions(),
                    ],
                ];
            },
            'filters'      => $request->only('filters'),
            'bid_requests' => BidRequest::where('bid_request_status_id', BidRequestStatusType::OPEN)
                ->withWhereHas('task', function ($q) use ($freelancer_level_value, $services, $request) {

                    $q->select(['id', 'freelancer_level_id', 'title', 'service_id'])
                        ->withWhereHas('service', function ($serviceQuery) use ($services, $request) {

                            if ($request->filled('search') && $request->filled('search.service')) {

                                $serviceQuery->where('id', $request->input('search.service'));
                            } else {
                                $serviceQuery->whereIn('id', $services);
                            }
                        })
                        ->withWhereHas('freelancerLevel', function ($freelancerLevelQuery) use ($freelancer_level_value) {
                            $freelancerLevelQuery->where('numeric_value', '<=', $freelancer_level_value);
                        });

                })
                ->whereDoesntHave('bids', function ($q) {
                    $q->where('freelancer_id', auth()->user()->id);
                })
                ->orderBy($sort['by'], $sort['type'])
                ->paginate(config('app.pagination.per_page'))
                ->withQueryString(),
        ]);
    }

    public function show(BidRequest $bidRequest)
    {
        $bidRequest->load('task');

        $task = $bidRequest->task;

        $bid = Bid::where('bid_request_id', $bidRequest->id)->where('freelancer_id', auth()->user()->id)->get()->first();

        return inertia('Freelancer/BidRequests/Show', [
            'task'        => $task->withDetails(),
            'bid_request' => $bidRequest,
            'data'        => [
                'title'         => __('Bid Request') . ' ' . $bidRequest->number,
                'service_types' => ServiceType::getForFrontEnd(),
                'work_types'    => WorkType::get(),
                'spacing_types' => SpacingType::get(),
                'unit_types'    => UnitType::get(),
                'bid'           => $bid,

            ],
        ]);
    }

    private function getFreelancerProfile()
    {
        return FreelancerProfile::select(['id', 'freelancer_level_id', 'service_id_1', 'service_id_2', 'service_id_3'])
            ->with(['freelancerLevel'])->where('user_id', auth()->user()->id)
            ->get()
            ->first();
    }

    private function getSortBy(Request $request): array
    {
        $sort_by   = 'id';
        $sort_type = 'DESC';

        if ($request->filled('search') && $request->filled('search.sort_by')) {
            switch ($request->input('search.sort_by')) {
                case 'budget_high_to_low':
                    $sort_by   = 'budget';
                    $sort_type = 'DESC';
                    break;
                case 'budget_low_to_high':
                    $sort_by   = 'budget';
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

}
