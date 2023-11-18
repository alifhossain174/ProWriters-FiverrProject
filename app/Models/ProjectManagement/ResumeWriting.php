<?php

namespace App\Models\ProjectManagement;

use App\Models\Business\Assignment;
use Illuminate\Database\Eloquent\Model;

class ResumeWriting extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'task_id',
        'assignment_id',
        'quantity',
        'instruction',
        'basic_price',
    ];

    public function assignment()
    {
        return $this->belongsTo(Assignment::class);
    }
}
