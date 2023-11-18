<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Enums\InvoiceStatusType;
use App\Models\Accounting\InvoiceStatus;


class InvoiceStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        InvoiceStatus::insert(InvoiceStatusType::get());
    }
}
