<?php

namespace App\Models\ProjectManagement;

use App\Models\Business\AcademicLevel;
use App\Models\Business\Subject;
use App\Models\Business\Assignment;
use App\Models\Business\PaperFormat;
use Illuminate\Database\Eloquent\Model;

class AcademicWriting extends Model
{
    public $timestamps = false;
    
    protected $fillable = [
        'task_id',
        'work_type_id',
        'assignment_id',
        'subject_id',
        'academic_level_id',
        'spacing_type_id',
        'paper_format_id',
        'quantity',
        'unit_name',
        'number_of_sources',     
        
        'per_word_price',
        'number_of_words',
        'assignment_price',
        'academic_level_price',
        'subject_price',
        'urgency_price',
        'instruction',
    ];

    function assignment()
    {
        return $this->belongsTo(Assignment::class);
    }

    function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    
    function academicLevel()
    {
        return $this->belongsTo(AcademicLevel::class);
    }

    function paperFormat()
    {
        return $this->belongsTo(PaperFormat::class);
    }

}
