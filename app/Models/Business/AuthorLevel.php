<?php

namespace App\Models\Business;

use Illuminate\Database\Eloquent\Model;

class AuthorLevel extends Model
{
    protected $fillable = [
        'name',
        'description',
        'is_popular',
        'is_default',
        'numeric_value',
        'customer_price_per_word_writing',
        'author_price_per_word_writing',
        'customer_price_per_word_editing',
        'author_price_per_word_editing',
        'customer_price_per_word_proofreading',
        'author_price_per_word_proofreading',
        'number_of_tasks_at_a_time',
    ];

    protected $casts = [
        'is_popular' => 'boolean',
        'is_default' => 'boolean',
    ];

    public static function dropdowns()
    {
        $data['numeric_values'] = [
            ['id' => 1, 'name' => 1],
            ['id' => 2, 'name' => 2],
            ['id' => 3, 'name' => 3],
            ['id' => 4, 'name' => 4],
            ['id' => 5, 'name' => 5],
        ];

        return $data;
    }

}
