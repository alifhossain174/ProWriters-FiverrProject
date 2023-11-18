<?php

namespace App\Http\Controllers\Freelancer;

use App\Http\Controllers\Controller;
use App\Models\ProjectManagement\Task;
use App\Models\ProjectManagement\TaskStatus;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return inertia('Freelancer/Dashboard', [
            'data' => [
                'title'             => __('Dashboard'),
                'tasks_in_progress' => Task::select(['id', 'uuid', 'number', 'title', 'freelancer_payment_amount', 'dead_line_for_freelancer', 'service_id'])
                    ->with(['service' => function ($q) {
                        $q->select(['id', 'name']);
                    }])
                    ->where('freelancer_id', auth()->user()->id)
                    ->where('task_status_id', TaskStatus::IN_PROGRESS)->get(),

                'tasks_requires_revision' => Task::select(['id', 'uuid', 'number', 'title', 'freelancer_payment_amount', 'dead_line_for_freelancer', 'service_id'])
                    ->with(['service' => function ($q) {
                        $q->select(['id', 'name']);
                    }])
                    ->where('freelancer_id', auth()->user()->id)
                    ->whereIn('task_status_id', [TaskStatus::REQUESTED_FOR_REVISION, TaskStatus::QA_REJECTED])->get(),
            ],
        ]);
    }

    public function statistics()
    {
        $statistics = DB::table('tasks')
            ->selectRaw('count(IF(task_status_id = ?, 1, null))  AS task_in_progress', [TaskStatus::IN_PROGRESS])
            ->selectRaw('count(IF(task_status_id = ?, 1, null))  AS task_in_revision', [TaskStatus::REQUESTED_FOR_REVISION])
            ->where('freelancer_id', auth()->user()->id)->get()->first();

        return response()->json([
            'tasks_in_progress'       => ['value' => $statistics->task_in_progress],
            'tasks_requires_revision' => ['value' => $statistics->task_in_revision],
            'number_of_messages'      => ['value' => 0],

        ]);
    }

}
