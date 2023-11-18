<?php

namespace App\Models\Business;

use App\Models\Business\Service;
use Illuminate\Database\Eloquent\Model;

class AdditionalService extends Model
{
    protected $fillable = [
        'type',
        'name',
        'description',
        'per_entered_quantity_label',
        'price',
    ];

    public function services()
    {
        return $this->belongsToMany(Service::class, 'service_additional_service');
    }
}
