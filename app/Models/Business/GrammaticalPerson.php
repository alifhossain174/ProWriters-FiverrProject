<?php
namespace App\Models\Business;

use Illuminate\Database\Eloquent\Model;

class GrammaticalPerson extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'name',      
    ];
   
}
