<?php

namespace App\Models\ProjectManagement;

use App\Models\User;
use App\Traits\HasAttachment;
use Illuminate\Database\Eloquent\Model;

class RevisionRequest extends Model
{

    use HasAttachment;

    protected $fillable = [
        'submitted_work_id',
        'user_id',
        'message',
    ];


    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function submittedWork()
    {
        return $this->belongsTo('App\Models\Orders\SubmittedWork', 'submitted_work_id', 'id');
    }
}
