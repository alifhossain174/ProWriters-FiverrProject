<?php

namespace App\Models\ProjectManagement;

use App\Models\User;
use App\Traits\HasAttachment;

use App\Models\ProjectManagement\Task;
use Illuminate\Database\Eloquent\Model;
use App\Models\ProjectManagement\RevisionRequest;
use App\Models\ProjectManagement\QualityAssurance;

class SubmittedWork extends Model
{

    use HasAttachment;

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function task()
    {
        return $this->belongsTo(Task::class, 'task_id', 'id');
    }

    public function revisionRequest()
    {
        return $this->hasOne(RevisionRequest::class, 'submitted_work_id', 'id');
    }

    public function qualityAssurance()
    {
        return $this->hasOne(QualityAssurance::class, 'submitted_work_id', 'id');
    }
}
