<?php

namespace App\Services;

use App\Enums\InvoiceItemType;
use App\Enums\ServiceType;
use App\Models\Business\Service;
use App\Models\Business\ServiceLevel;
use App\Services\Calculator\AcademicWritingPriceCalculator;
use App\Services\Calculator\AdditionalServicePriceCalculator;
use App\Services\Calculator\ContentWritingPriceCalculator;
use App\Services\Calculator\ResumeWritingPriceCalculator;
use Illuminate\Support\Collection;

class PriceCalculatorService
{

    public function calculate($request): Collection
    {

        if (ServiceType::CONTENT_WRITING == $request->service_id) {
            $price_data = (new ContentWritingPriceCalculator($request))->get();
        } else if (ServiceType::ACADEMIC_WRITING == $request->service_id) {
            $price_data = (new AcademicWritingPriceCalculator($request))->get();
        } else if (ServiceType::RESUME_WRITING == $request->service_id) {
            $price_data = (new ResumeWritingPriceCalculator($request))->get();
        } else {
            throw new \Exception('Service not found');
        }
        $base_price = $this->roundPrice($price_data['amount']);

        $additional_services = (new AdditionalServicePriceCalculator([
            'basic_price'               => $base_price,
            'added_additional_services' => $request->added_services,
            'quantity'                  => $request->quantity,
            'unit_name'                 => $request->unit_name,
            'service_id'                => $request->service_id,
        ]))->get();

        $service_level_price = ServiceLevel::find($request->service_level_id)->price;

        $total = $base_price + $service_level_price + $additional_services['amount'];

        $fields = array_merge($request->all(), $price_data, [
            'basic_price'               => $base_price,
            'service_level_price'       => $service_level_price,
            'additional_services_price' => $additional_services['amount'],
            'total'                     => $total,
            'additional_services'       => $additional_services['added_services'],
            'attachments'               => $request->files_data,
        ]);

        return collect([
            'type'      => InvoiceItemType::NEW_TASK,
            'name'      => Service::find($request->service_id)->name,
            'title'     => $request->title,
            'price'     => $total,
            'quantity'  => 1,
            'sub_total' => $total,
            'fields'    => $fields,
        ]);
    }

    public function staffPaymentAmount($workLevel, $order_total)
    {

        if ($workLevel->staff_payment_type == 'percentage') {
            // Calculate Staff payment
            $payment_value = $workLevel->staff_payment_amount;
            return $this->roundPrice((($order_total * $payment_value) / 100));
        }
        return $workLevel->staff_payment_amount;
    }

    public function roundPrice($amount)
    {
        return round($amount, 2);
    }
}
