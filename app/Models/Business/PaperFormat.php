<?php

namespace App\Models\Business;

use Illuminate\Database\Eloquent\Model;

class PaperFormat extends Model
{
    public $timestamps = false;
    
    protected $fillable = [       
        'name',        
    ];
}
