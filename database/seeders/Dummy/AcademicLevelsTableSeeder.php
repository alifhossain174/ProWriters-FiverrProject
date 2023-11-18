<?php

namespace Database\Seeders\Dummy;

use Illuminate\Database\Seeder;
use App\Models\Business\AcademicLevel;


class AcademicLevelsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        AcademicLevel::insert([
            ['name' => 'High School', 'description' => 2.3, 'percentage' => 0.5],
            ['name' => 'Freshman', 'description' => '1st Year', 'percentage' => 1],
            ['name' => 'Sophomore', 'description' => '2nd Year', 'percentage' => 1.5],
            ['name' => 'Junior', 'description' => '3rd Year', 'percentage' => 2],
            ['name' => 'Senior', 'description' => '4th Year', 'percentage' => 2.5],
            ['name' => 'Masters', 'description' => NULL, 'percentage' => 3],
            ['name' => 'Doctoral', 'description' => NULL, 'percentage' => 4.5],
        ]);
    }
}
