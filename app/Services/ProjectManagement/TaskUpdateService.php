<?php

namespace App\Services\ProjectManagement;

use App\Models\Business\Urgency;
use App\Models\ProjectManagement\Task;

class TaskUpdateService
{

    public function extendDeadline(Task $task, $value, $unit)
    {
        switch ($unit) {
            case 'm':
                $task->dead_line = $task->dead_line->addMinutes($value);
                $task->dead_line_for_author = $task->dead_line_for_author->addMinutes($value);
                break;
            case 'h':
                $task->dead_line = $task->dead_line->addHours($value);
                $task->dead_line_for_author = $task->dead_line_for_author->addHours($value);
                break;
            case 'd':
                $task->dead_line = $task->dead_line->addDays($value);
                $task->dead_line_for_author = $task->dead_line_for_author->addDays($value);
                break;
        }

        $task->save();
    }

    public function update(Task $task, array $data)
    {
        // Get the datetime based on the urgency
        $urgency = Urgency::find($data['urgency_id']);
        // if ($urgency->type == 'hours') {
        //     $data['dead_line'] = get_urgency_date($urgency->type, $urgency->value, 'Y-m-d H:i:s');
        // } else {
        //     $data['dead_line'] = date("Y-m-d H:i:s", strtotime($data['dead_line']));
        // }

        $data['dead_line'] = get_urgency_date($urgency->type, $urgency->value, 'Y-m-d H:i:s');
        $data['dead_line_for_author'] = get_urgency_date($urgency->type_for_writer, $urgency->value_for_writer, 'Y-m-d H:i:s');

        $task->fill($data)->save();        

        $task->details()->get()->first()->fill($data)->save();

        $task->additionalServices()->sync([]);

        $this->recordAddedServices($task, $data['additional_services']);
        $this->recordAttachments($task, $data['attachments']);

        return $task;
    }

    private function recordAddedServices(Task $order, $addedServices)
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

    private function recordAttachments(Task $task, $attachments)
    {
        if ($attachments && is_array($attachments) && count($attachments) > 0) {

            (app()->makeWith('App\Services\AttachmentService', [
                'model'       => $task,
                'attachments' => $attachments,
                'userId'      => auth()->user()->id,
            ]))->save();
        }
    }
}
