<?php

namespace App\Models\ProjectManagement;


use App\Models\Business\Subject;
use App\Models\Business\Assignment;
use App\Models\Business\GrammaticalPerson;
use App\Models\Business\Language;
use Illuminate\Database\Eloquent\Model;

class ContentWriting extends Model
{
    public $timestamps = false;

    protected $fillable = [
        'task_id',
        'work_type_id',
        'assignment_id',
        'subject_id',
        'language_id',
        'spacing_type_id',
        'quantity',
        'unit_name',
        'content_goals',
        'grammatical_person_id',
        'target_audience',
        'target_keywords',
        'links_to_example_content',
        'style_and_tone',
        'structure_and_formatting_requirements',
        'referencing_and_linking_preferences',
        'things_to_avoid',
        'additional_notes',

        'per_word_price',
        'number_of_words',
        'assignment_price',
        'subject_price',
        'urgency_price',
        'language_price',

    ];

    function assignment()
    {
        return $this->belongsTo(Assignment::class);
    }

    function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    function language()
    {
        return $this->belongsTo(Language::class);
    }
    
    function grammaticalPerson()
    {
        return $this->belongsTo(GrammaticalPerson::class);
    }

   

    
}
