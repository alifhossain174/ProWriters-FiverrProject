<?php

namespace App\Http\Controllers\Freelancer;

use Inertia\Inertia;
use App\Enums\UserType;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\ProjectManagement\Task;
use App\Http\Requests\StoreTaskMessageRequest;
use App\Services\ProjectManagement\TaskMessageService;

class TaskInternalDiscussionController extends Controller
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
            'tab' => 'internal-discussions',
            'task' => $task,
            'messages' =>  $this->taskMessageService->getInternalDiscussions($task, $request),
            'data' => [
                'title'      => __('app.freelancer.internal_discussions.title'),
                'sub_title'  => __('app.freelancer.internal_discussions.sub_title'),
                'user_types' => UserType::get(),
                'urls' => [
                    'new_message' => route('freelancer.tasks.internal-discussions.create', $task->uuid),
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
                'config' => $this->taskMessageService->getConfigForCreateMessage(route('attachments.store'), route('freelancer.tasks.internal-discussions.store', $task->uuid)),
                'urls' => [
                    'message_list' => route('freelancer.tasks.internal-discussions.index', $task->uuid),
                ]
            ]
        ])->baseRoute('freelancer.tasks.internal-discussions.index', $task->uuid);
    }

    function store(StoreTaskMessageRequest $request, Task $task)
    {
        $this->taskMessageService->store($task, $request, FALSE);

        return redirect()->route('freelancer.tasks.internal-discussions.index', $task->uuid)->withSuccess(__('Message sent successfully'));
    }
}
