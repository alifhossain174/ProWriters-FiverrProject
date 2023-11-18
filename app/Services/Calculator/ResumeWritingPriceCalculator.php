<?php

namespace App\Services\Calculator;

use App\Models\Business\Assignment;

class ResumeWritingPriceCalculator
{

    private $request;

    public function __construct($request)
    {
        $this->request = $request;
    }

    public function get()
    {
        $request    = $this->request;
        $assignment = Assignment::find($request->assignment_id);

        $data['amount']                    = $assignment->price;
        $data['author_payment_amount'] = $assignment->author_payment_amount;
        
        return $data;
    }

}
