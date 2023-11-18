<?php

namespace App\Models\Business;

use App\Models\Business\Service;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assignment extends Model
{
    use HasFactory;

    protected $fillable = [
        'service_id',
        'name',
        'price',
        'description',
        'deliverables',
        'author_level_id',
        'author_payment_amount',
        'urgency_id',        
    ];

    public function service()
    {
        return $this->belongsTo(Service::class);
    }

}
