<?php

namespace App\Traits;

use App\Models\Freelancer\FreelancerProfile;
use App\Models\ProjectManagement\Rating;
use App\Models\ProjectManagement\Task;
use App\Models\ProjectManagement\TaskStatus;

trait FreelancerTrait
{
    
    public function freelancerProfile()
    {
        return $this->hasOne(FreelancerProfile::class, 'user_id', 'id');
    }

    public function completedTasks()
    {
        return $this->hasMany(Task::class, 'freelancer_id', 'id')->where('task_status_id', TaskStatus::COMPLETE);
    }

    public function freelancerRatings()
    {
        return $this->hasManyThrough(
            Rating::class,
            Task::class,
            'freelancer_id', // Foreign key on the Task table...
            'task_id', // Foreign key on the Rating table...
            'id', // Local key on the users table...
            'id' // Local key on the Task table...
        );
    }

    // public function getFreelancerAverageRatingAttribute()
    // {
    //     return $this->freelancerRatings()->average('value');
    // }
}
