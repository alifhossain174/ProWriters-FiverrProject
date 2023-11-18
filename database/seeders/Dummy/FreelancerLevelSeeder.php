<?php

namespace Database\Seeders\Dummy;

use App\Models\Business\FreelancerLevel;
use Illuminate\Database\Seeder;

class FreelancerLevelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        FreelancerLevel::insert([
            [
                'name'                                   => 'Standard',
                'description'                            => 'One of our freelancers, proficient in your subject area, ready to meet your deadline',
                'is_popular'                             => NULL,
                'numeric_value'                          => 1,
                'customer_price_per_word_writing'        => 0.007,
                'freelancer_price_per_word_writing'      => 0.005,
                'customer_price_per_word_editing'        => 0.006,
                'freelancer_price_per_word_editing'      => 0.005,
                'customer_price_per_word_proofreading'   => 0.005,
                'freelancer_price_per_word_proofreading' => 0.003,
                'number_of_tasks_at_a_time'              => 3,

            ],
            [
                'name'                                   => 'Premium',
                'description'                            => 'High-rank professional with extensive experience in your field of study',
                'is_popular'                             => TRUE,
                'numeric_value'                          => 2,
                'customer_price_per_word_writing'        => 0.008,
                'freelancer_price_per_word_writing'      => 0.006,
                'customer_price_per_word_editing'        => 0.007,
                'freelancer_price_per_word_editing'      => 0.006,
                'customer_price_per_word_proofreading'   => 0.006,
                'freelancer_price_per_word_proofreading' => 0.005,
                'number_of_tasks_at_a_time'              => 5,
            ],
            [
                'name'                                   => 'Expert',
                'numeric_value'                          => 3,
                'description'                            => 'One of the top 10 experts with the highest customer appraisal in your subject',
                'is_popular'                             => NULL,
                'customer_price_per_word_writing'        => 0.009,
                'freelancer_price_per_word_writing'      => 0.005,
                'customer_price_per_word_editing'        => 0.008,
                'freelancer_price_per_word_editing'      => 0.005,
                'customer_price_per_word_proofreading'   => 0.007,
                'freelancer_price_per_word_proofreading' => 0.003,
                'number_of_tasks_at_a_time'              => -1,
            ],

        ]);
    }
}
