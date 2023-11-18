<?php

namespace App\Models\Business;

use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'name',
        'percentage',
        'is_default_for_content_writing',
        'available_for_content_writing',
        'available_for_translation',
    ];
}
