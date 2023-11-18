<?php

namespace App\Services\ProjectManagement;

use App\Models\Business\Urgency;
use App\Models\NumberGenerator;
use App\Models\ProjectManagement\Task;
use App\Models\ProjectManagement\TaskStatus;
use Illuminate\Support\Str;

class TaskCreateService
{

    private $data;

    public function __invoke(array $data)
    {
        $this->data = $data;

        $data['number']         = NumberGenerator::gen(Task::class);
        $data['uuid']           = Str::orderedUuid();
        $data['task_status_id'] = TaskStatus::NEW;

        // Get the datetime based on the urgency
        $urgency = Urgency::find($data['urgency_id']);

        $data['dead_line'] = get_urgency_date($urgency->type, $urgency->value, 'Y-m-d H:i:s');

        $data['dead_line_for_author'] = get_urgency_date($urgency->type_for_writer, $urgency->value_for_writer, 'Y-m-d H:i:s');

        $revisions_allowed = settings('number_of_revision_allowed');

        $data['revisions_allowed'] = ($revisions_allowed) ? $revisions_allowed : 5;

        $task = Task::create($data);

        $task->details()->create($data);

        $task->followers()->attach($task->customer_id);

        $this->recordAddedServices($task, $this->data['additional_services']);
        $this->recordAttachments($task, $this->data['attachments'], $data['customer_id']);

        return $task;
    }

    public function recordAddedServices(Task $order, $addedServices)
    {
        if ($addedServices && is_array($addedServices) && count($addedServices) > 0) {
            foreach ($addedServices as $row) {
                $order->additionalServices()->attach($row['additional_service_id'], [
                    'quantity' => $row['quantity'],
                    'price'    => $row['price'],
                ]);
            }
        }
    }

    public function recordAttachments(Task $task, $attachments, $customer_id)
    {
        if ($attachments && is_array($attachments) && count($attachments) > 0) {

            (app()->makeWith('App\Services\AttachmentService', [
                'model'       => $task,
                'attachments' => $attachments,
                'userId'      => $customer_id,
            ]))->save();
        }
    }
}
