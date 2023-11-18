<?php
namespace App\Models\Business;

use App\Models\Business\Service;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'name',      
        'percentage',
    ];

    public function services()
    {
        return $this->belongsToMany(Service::class);
    }
}
