<?php

namespace App\Models\Business;

use Illuminate\Database\Eloquent\Model;

class AcademicLevel extends Model
{

    protected $fillable = [
        'id',
        'name',
        'percentage',
        'inactive'
    ];

    protected $casts = [
        'inactive' => 'boolean'
    ];
}
