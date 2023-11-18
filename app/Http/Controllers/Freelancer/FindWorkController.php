<?php

namespace App\Http\Controllers\Freelancer;

use App\Enums\ServiceType;
use App\Enums\SpacingType;
use App\Enums\UnitType;
use App\Enums\WorkType;
use App\Events\TaskSelfAssignedEvent;
use App\Http\Controllers\Controller;
use App\Models\Freelancer\FreelancerProfile;
use App\Models\ProjectManagement\Task;
use App\Models\ProjectManagement\TaskStatus;
use Illuminate\Http\Request;

class FindWorkController extends Controller
{
    public function index(Request $request)
    {
        $profile = $this->getFreelancerProfile();

        $freelancer_level_value = $profile->freelancerLevel->numeric_value;

        $services = array_filter([$profile->service_id_1, $profile->service_id_2, $profile->service_id_3]);

        return inertia('Freelancer/Tasks/FindWork/Index', [
            'data'    => function () {
                // ALWAYS included on first visit
                // OPTIONALLY included on partial reloads
                // ONLY evaluated when needed
                return [
                    'title' => __('Find Works'),
                    // 'dropdowns' => Task::freelancerDropdown(),
                ];
            },
            'filters' => $request->only('filters'),
            'tasks'   => Task::with(['status', 'service'])
                ->whereNull('freelancer_id')
                ->whereNotNull('task_status_id')
                ->withWhereHas('freelancerLevel', function ($q) use ($freelancer_level_value) {
                    $q->where('numeric_value', '<=', $freelancer_level_value);
                })
                ->whereIn('service_id', $services)
                ->archiveForFreelancer($request->input('search.show_archived'))
                ->when($request->filled('search'), function ($q) use ($request) {
                    return $q->where(function ($subQuery) use ($request) {

                        if ($request->filled('search.status')) {
                            $subQuery->where('task_status_id', $request->input('search.status'));
                        }
                        if ($request->filled('search.task_number')) {
                            $subQuery->where('number', $request->input('search.task_number'));
                        }

                        return $subQuery;
                    });
                })

                ->orderBy('id', 'DESC')
                ->paginate(config('app.pagination.per_page'))
                ->withQueryString(),

        ]);
    }

    public function show(Task $task)
    {
        if ($task->freelancer_id) {
            return redirect()->route('freelancer.find.work.index')->withFail(__('The task is already assigned'));
        }

        return inertia('Freelancer/Tasks/FindWork/Show', [
            'task' => $task->withDetails(['attachments']),
            'data' => [
                'title'         => __('Task') . ' ' . $task->number,
                'service_types' => ServiceType::getForFrontEnd(),
                'work_types'    => WorkType::get(),
                'spacing_types' => SpacingType::get(),
                'unit_types'    => UnitType::get(),
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

    private function isNotAllowedToAcceptTask()
    {
        $profile                           = $this->getFreelancerProfile();
        $allowed_number_of_tasks_at_a_time = $profile->freelancerLevel->number_of_tasks_at_a_time;

        $tasks_in_progress = Task::where('freelancer_id', auth()->user()->id)->where('task_status_id', TaskStatus::IN_PROGRESS)->count();

        // -1 means unlimited
        if ($allowed_number_of_tasks_at_a_time == '-1') {
            return false;
        }

        if ($tasks_in_progress < $allowed_number_of_tasks_at_a_time) {
            return false;
        }
        return true;
    }

    public function accept(Task $task)
    {
        if ($task->freelancer_id) {
            return redirect()->route('freelancer.find.work.index')->withFail(__('The task is already assigned'));
        }

        if ($this->isNotAllowedToAcceptTask()) {
            return redirect()->route('freelancer.find.work.index')->withFail(__('You are not allowed to accept any task when you already have tasks in progress'));
        }

        $task->freelancer_id = auth()->user()->id;
        $task->save();

        event(new TaskSelfAssignedEvent($task));

        return redirect()->route('freelancer.tasks.show', $task->uuid)->withSuccess(__('The task has been assigned to you'));

    }

}
