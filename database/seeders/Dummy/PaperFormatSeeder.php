<?php

namespace Database\Seeders\Dummy;


use Illuminate\Database\Seeder;
use App\Models\Business\PaperFormat;

class PaperFormatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        PaperFormat::insert([
        	['name' => 'MLA'],
        	['name' => 'APA'],
        	['name' => 'Chicago'],
        	['name' => 'Harvard'],
        	['name' => 'Turabian with footnotes'],       	
                 
        ]);
    }
}
