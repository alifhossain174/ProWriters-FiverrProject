<?php

namespace Database\Seeders;

use App\Models\Business\Service;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {

        $allowed_file_extensions = '.jpg,.png,.gif, .doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.pdf,.zip,.rar';
        Service::insert([
            [
                'name'                              => 'Content Writing',
                'minimum_order_quantity'            => 275,
                'allowed_file_extensions'           => $allowed_file_extensions,
                'maximum_file_size'                 => 10,
                'minimum_number_of_files_to_upload' => 0,
                'maximum_number_of_files_to_upload' => 10,
            ],
            [
                'name'                              => 'Academic Writing',
                'minimum_order_quantity'            => 275,
                'allowed_file_extensions'           => $allowed_file_extensions,
                'maximum_file_size'                 => 10,
                'minimum_number_of_files_to_upload' => 0,
                'maximum_number_of_files_to_upload' => 10,

            ],            
            [
                'name'                              => 'Resume Writing',
                'minimum_order_quantity'            => 1,
                'allowed_file_extensions'           => $allowed_file_extensions,
                'maximum_file_size'                 => 10,
                'minimum_number_of_files_to_upload' => 0,
                'maximum_number_of_files_to_upload' => 10,
            ],
        ]);
    }
}
