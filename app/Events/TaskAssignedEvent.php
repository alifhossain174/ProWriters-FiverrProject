<?php

namespace App\Events;

use App\Models\ProjectManagement\Task;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class TaskAssignedEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $assigned_by;
    public $task;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Task $task)
    {
        $this->task = $task;
    }

}
