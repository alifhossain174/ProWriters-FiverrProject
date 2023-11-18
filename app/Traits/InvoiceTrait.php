<?php

namespace App\Traits;

use App\Models\Accounting\InvoiceItem;

trait InvoiceTrait
{

    function invoiceItem()
    {
        return $this->morphOne(InvoiceItem::class, 'invoiceable');
       
    }

}
