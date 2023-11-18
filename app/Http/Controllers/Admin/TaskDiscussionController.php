<?php

namespace App\Http\Controllers\Admin;

use App\Enums\UserType;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTaskMessageRequest;
use App\Models\ProjectManagement\Task;
use App\Services\ProjectManagement\TaskMessageService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskDiscussionController extends Controller
{
    private $taskMessageService;

    public function __construct(TaskMessageService $taskMessageService)
    {
        $this->taskMessageService = $taskMessageService;       
    }

    public function index(Request $request, Task $task)
    {
        $task->load('status');

        $data['user_types'] = UserType::get();
        $data['urls']       = [
            'new_message' => route('admin.tasks.discussions.create', $task->uuid),
        ];

        return inertia('Admin/Tasks/Discussions/Index', [
            'tab'      => 'discussions',
            'task'     => $task,
            'messages' => $this->taskMessageService->getExternalDiscussions($task, $request),
            'data'     => $data,
        ]);
    }

    public function create(Task $task)
    {
        $task->load('status');

        return Inertia::modal('Admin/Tasks/Discussions/Create', [
            'task' => $task,
            'data' => [
                'config' => $this->taskMessageService->getConfigForCreateMessage(route('attachments.store'), route('admin.tasks.discussions.store', $task->uuid)),
                'urls'   => [
                    'message_list' => route('admin.tasks.discussions.index', $task->uuid),
                ],
            ],
        ])->baseRoute('admin.tasks.discussions.index', $task->uuid);
    }

    public function store(StoreTaskMessageRequest $request, Task $task)
    {
        $this->taskMessageService->store($task, $request, true);

        return redirect()->route('admin.tasks.discussions.index', $task->uuid)->withSuccess(__('Message sent successfully'));
    }
}
