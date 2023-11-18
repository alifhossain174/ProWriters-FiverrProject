<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ProjectManagement\Task;
use App\Services\ProjectManagement\TaskMessageService;
use Illuminate\Http\Request;

class SubmittedWorkController extends Controller
{

    public function index(Request $request, Task $task)
    {
        $task->load('status');

        $withQuery = [
            'attachments'                 => function ($q) {
                $q->select(['id', 'uuid', 'name', 'display_name', 'attachable_id', 'attachable_type']);
            },
            'user'                        => function ($q) {
                $q->select(['id', 'uuid', 'type', 'code', 'photo']);
            },
            'revisionRequest',
            'revisionRequest.user'        => function ($q) {
                $q->select(['id', 'uuid', 'type', 'code', 'photo']);
            },
            'revisionRequest.attachments' => function ($q) {
                $q->select(['id', 'uuid', 'name', 'display_name', 'attachable_id', 'attachable_type']);
            },
        ];

        $qualityAssuranceQuery = [
            'qualityAssurance',
            'qualityAssurance.user'        => function ($q) {
                $q->select(['id', 'uuid', 'type', 'code', 'photo']);
            },
            'qualityAssurance.attachments' => function ($q) {
                $q->select(['id', 'uuid', 'name', 'display_name', 'attachable_id', 'attachable_type']);
            },
        ];
        $withQuery = $withQuery + $qualityAssuranceQuery;

        return inertia('Admin/Tasks/Works/Index', [
            'tab'   => 'works',
            'task'  => $task,
            'works' => $task->submittedWorks()->with($withQuery)->orderBy('id', 'DESC')->get(),
            'data'  => [],
        ]);
    }

    public function content(Task $task)
    {
        $display_download_work = false;

        if (is_display_download_work_allowed($task->task_status_id)) {
            $task->loadLatestSubmittedWork();

            if ($task->submittedWorks->count() > 0) {
                $display_download_work = true;
            }

        } else {
            $task->load('status');
        }

        return inertia('Admin/Tasks/Content/Index', [
            'task'            => $task,
            'content_preview' => $task->content,
            'data'            => [
                'allow' => [
                    'download_work' => $display_download_work,
                ],
            ],
        ]);
    }

    public function storeContentComment(Request $request, Task $task, TaskMessageService $taskMessageService)
    {
        $request->validate([
            'message' => 'required',
            'quote'   => 'required',
        ]);
        $taskMessageService->store($task, $request, false);

    }
}
