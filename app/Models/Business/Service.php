<?php

namespace App\Models\Business;

use App\Models\Business\AdditionalService;
use App\Models\Business\Assignment;
use App\Models\Business\Subject;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{

    protected $fillable = [
        'name',
        'minimum_order_quantity',
        'allowed_file_extensions',
        'maximum_file_size',
        // 'minimum_number_of_files_to_upload',
        'maximum_number_of_files_to_upload',
        'disable_writing',
        'disable_editing',
        'disable_proofreading',
        'inactive',
    ];

    protected $casts = [
        'inactive'             => 'boolean',
        'disable_writing'      => 'boolean',
        'disable_editing'      => 'boolean',
        'disable_proofreading' => 'boolean',
    ];

    public function scopeActive($query)
    {
        return $query->where('inactive', false)->orWhereNull('inactive');
    }

    public function assignments()
    {
        return $this->hasMany(Assignment::class);
    }

    public function subjects()
    {
        return $this->belongsToMany(Subject::class, 'service_subject', 'service_id', 'subject_id');
    }

    public function additionalServices()
    {
        return $this->belongsToMany(AdditionalService::class, 'service_additional_service', 'service_id', 'additional_service_id');
    }

    public static function asDropdown()
    {
        return self::select(['id', 'name'])->active()->get()->toArray();
    }
}
