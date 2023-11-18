<?php

namespace App\Http\Controllers\Freelancer;

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

        return inertia('Freelancer/Tasks/Discussions/Index', [
            'tab'      => 'discussions',
            'task'     => $task,
            'messages' => $this->taskMessageService->getExternalDiscussions($task, $request),
            'data'     => [
                'title'      => __('app.freelancer.discussions.title'),
                'sub_title'  => __('app.freelancer.discussions.sub_title'),
                'user_types' => UserType::get(),
                'urls'       => [
                    'new_message' => route('freelancer.tasks.discussions.create', $task->uuid),
                ],
            ],
        ]);
    }

    public function create(Task $task)
    {
        $task->load('status');

        return Inertia::modal('Freelancer/Tasks/Discussions/Create', [
            'task' => $task,
            'data' => [
                'config' => $this->taskMessageService->getConfigForCreateMessage(route('attachments.store'), route('freelancer.tasks.discussions.store', $task->uuid)),
                'urls'   => [
                    'message_list' => route('freelancer.tasks.discussions.index', $task->uuid),
                ],
            ],
        ])->baseRoute('freelancer.tasks.discussions.index', $task->uuid);
    }

    public function store(StoreTaskMessageRequest $request, Task $task)
    {
        $this->taskMessageService->store($task, $request, true);

        return redirect()->route('freelancer.tasks.discussions.index', $task->uuid)->withSuccess(__('Message sent successfully'));
    }
}
