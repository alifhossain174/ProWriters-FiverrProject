<?php

namespace Database\Seeders\Dummy;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LanguageTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('languages')->insert([
            [
                'name' => 'English (United States)',
                'is_default_for_content_writing' => TRUE,
                'percentage' => 0,
                'available_for_content_writing' => TRUE,
                'available_for_translation' => TRUE,
            ],
            [
                'name' => 'English (United Kingdom)',
                'is_default_for_content_writing' => NULL,
                'percentage' => 10,
                'available_for_content_writing' => TRUE,
                'available_for_translation' => TRUE,
            ],
            [
                'name' => 'English (Canada)',
                'is_default_for_content_writing' => NULL,
                'percentage' => 10,
                'available_for_content_writing' => TRUE,
                'available_for_translation' => TRUE,
            ],
            [
                'name' => 'German',
                'is_default_for_content_writing' => NULL,
                'percentage' => 20,
                'available_for_content_writing' => TRUE,
                'available_for_translation' => TRUE,
            ],
            [
                'name' => 'Spanish',
                'is_default_for_content_writing' => NULL,
                'percentage' => 20,
                'available_for_content_writing' => FALSE,
                'available_for_translation' => TRUE,
            ],
        ]);
    }
}
