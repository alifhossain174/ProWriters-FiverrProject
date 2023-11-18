<?php

namespace App\Http\Controllers\Customer;

use App\Enums\ServiceType;
use App\Enums\SpacingType;
use App\Enums\UnitType;
use App\Enums\UserType;
use App\Enums\WorkType;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrderRequest;
use App\Models\ProjectManagement\Task;
use App\Models\ProjectManagement\TaskStatus;
use App\Services\CartService;
use App\Services\PriceCalculatorService;
use App\Services\ProjectManagement\TaskCreateService;
use App\Services\ProjectManagement\TaskUpdateService;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Customer/Tasks/Index', [
            'data'    => function () {
                // ALWAYS included on first visit
                // OPTIONALLY included on partial reloads
                // ONLY evaluated when needed
                return [
                    'title'     => __('Tasks'),
                    'dropdowns' => Task::customerDropdown(),
                ];
            },
            'filters' => $request->only('search'),
            'tasks'   => Task::select(['uuid', 'number', 'title', 'task_status_id', 'service_id', 'dead_line', 'total'])
                ->with(['status', 'service'])
                ->archiveForCustomer($request->input('search.show_archived'))
                ->where('customer_id', auth()->user()->id)
                ->whereNotNull('task_status_id')
                ->when($request->filled('search.status'), function ($q) use ($request) {
                    return $q->where(function ($subQuery) use ($request) {
                        return $subQuery->where('task_status_id', $request->input('search.status'));
                    });
                })
                ->when($request->filled('search.task_number'), function ($q) use ($request) {
                    return $q->where(function ($subQuery) use ($request) {
                        return $subQuery->where('number', $request->input('search.task_number'));
                    });
                })
                ->orderBy('id', 'DESC')
                ->paginate(config('app.pagination.per_page'))
                ->withQueryString(),

        ]);
    }

    public function create(Request $request, CartService $cartService)
    {
        if (disable_order_page_for_unauthenticated_user() && !auth()->check()) {
            return redirect()->route('login');
        }

        if (auth()->check()) {
            if (auth()->user()->type != UserType::CUSTOMER) {
                return redirect()->route('login');
            }
        }
        $initial_records = [];

        if ($request->id && ($item = $cartService->getContentById($request->id))) {
            $initial_records       = $item['fields'];
            $initial_records['id'] = $request->id;
            //pr($initial_records);
        }
        $dropdowns = Task::dropdown();
        if (auth()->check()) {
            $profile                                       = auth()->user()->customerProfile()->get()->first();
            $dropdowns['customer_is_allowed_to_pay_later'] = $profile->allow_paying_later;
        }
        return inertia('Customer/Tasks/Create', [
            'data'            => [
                'dropdowns' => $dropdowns,
                'title'     => (auth()->check()) ? __('New Task') : __('Place your order'),
            ],
            'initial_records' => $initial_records,
        ]);
    }

    public function store(StoreOrderRequest $request, PriceCalculatorService $priceCalculatorService, CartService $cartService)
    {
        $cartService->add($priceCalculatorService->calculate($request), $request->id);
        return redirect()->route('checkout');
    }

    public function payLater(StoreOrderRequest $request, PriceCalculatorService $priceCalculatorService, TaskCreateService $taskCreateService)
    {
        $profile = auth()->user()->customerProfile()->get()->first();

        if (isset($profile->allow_paying_later) && $profile->allow_paying_later) {
            $data = $priceCalculatorService->calculate($request)['fields'];

            $data['customer_id'] = auth()->user()->id;

            $task = $taskCreateService($data);

            return redirect()->route('customer.tasks.show', $task->uuid);
        }

        return redirect()->back();

    }

    public function show(Task $task)
    {
        $display_download_work = false;

        if (is_display_download_work_allowed($task->task_status_id)) {
            $task->loadLatestSubmittedWork();

            if ($task->submittedWorks->count() > 0) {
                $display_download_work = true;
            }
        }
    
        return inertia('Customer/Tasks/Show', [
            'task' => $task->withDetails(['project']),
            'data' => [
                'service_types' => ServiceType::getForFrontEnd(),
                'work_types'    => WorkType::get(),
                'spacing_types' => SpacingType::get(),
                'unit_types'    => UnitType::get(),
                'allow'         => [
                    'extending_deadline' => ($task->task_status_id == TaskStatus::COMPLETE) ? false : true,
                    'archiving'          => ($task->task_status_id == TaskStatus::COMPLETE && !$task->is_archived_for_customer) ? true : false,
                    'unarchiving'        => ($task->is_archived_for_customer) ? true : false,
                    'download_work'      => $display_download_work,
                ],

            ],
        ]);
    }

    public function financial(Task $task)
    {
        $invoice = null;

        if ($task->invoice_id) {
            $task->load(['invoiceItem', 'invoiceItem.invoice' => function ($q) {
                $q->select('uuid', 'id', 'number');
            }, 'status']);

            if (isset($task->invoiceItem) && $task->invoiceItem) {
                $invoice = [
                    'total'  => $task->invoiceItem->sub_total,
                    'uuid'   => $task->invoiceItem->invoice->uuid,
                    'number' => $task->invoiceItem->invoice->number,
                ];
            }
        } else {
            $task->load('status');
        }

        return inertia('Customer/Tasks/Financial', [
            'task' => $task,
            'data' => [
                'invoice' => $invoice,
            ],
        ]);
    }

    public function extendDeadline(Task $task)
    {
        return inertia()->modal('Customer/Tasks/ExtendDeadline', [
            'task' => $task,
            'data' => [
                'urls'      => [
                    'submit_form' => route('customer.tasks.post.extend.deadline', $task->uuid),
                ],
                'dropdowns' => [
                    'deadline_options' => Task::extendDeadlineOptions(),
                ],

            ],
        ])->baseRoute('customer.tasks.show', $task->uuid);
    }

    public function storeExtendedDeadline(Request $request, Task $task, TaskUpdateService $taskUpdateService)
    {
        $request->validate([
            'deadline' => 'required',
        ]);

        list($value, $unit) = explode("_", $request->deadline);

        $taskUpdateService->extendDeadline($task, $value, $unit);

        return redirect()->route('customer.tasks.show', $task->uuid)->withSuccess(__('Deadline updated'));
    }

    public function archive(Task $task)
    {
        if ($task->task_status_id != TaskStatus::COMPLETE) {
            redirect()->route('customer.tasks.show', $task->uuid);
        }

        $task->is_archived_for_customer = true;
        $task->save();

        return redirect()->back()->withSuccess(__('Archived'));
    }

    public function unarchive(Task $task)
    {
        $task->is_archived_for_customer = null;
        $task->save();

        return redirect()->back()->withSuccess(__('Unarchived'));
    }
}
