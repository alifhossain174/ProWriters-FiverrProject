<?php

namespace App\Models\ProjectManagement;

use App\Traits\HasAttachment;
use App\Models\ProjectManagement\Task;
use Illuminate\Database\Eloquent\Model;

class TaskMessage extends Model
{
    use HasAttachment;

    // protected function getCreatedAtAttribute($value)
    // {
    //     return convertToLocalTime($value);
    // }

    public function user()
    {
        return $this->belongsTo('App\Models\User', 'user_id', 'id');
    }

    public function task()
    {
        return $this->belongsTo(Task::class, 'task_id', 'id');
    }
}
