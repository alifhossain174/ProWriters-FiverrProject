<?php

namespace App\Models\ProjectManagement;

use App\Models\User;
use App\Traits\HasAttachment;
use Illuminate\Database\Eloquent\Model;

class QualityAssurance extends Model
{

    use HasAttachment;


    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function submittedWork()
    {
        return $this->belongsTo('App\Models\Orders\SubmittedWork', 'submitted_work_id', 'id');
    }
}
