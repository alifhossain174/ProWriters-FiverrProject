<?php

namespace App\Models\Freelancer;

use Illuminate\Database\Eloquent\Model;

class EducationLevel extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'name'
    ];
}
