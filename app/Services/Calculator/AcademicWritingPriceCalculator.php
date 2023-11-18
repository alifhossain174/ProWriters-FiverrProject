<?php

namespace App\Services\Calculator;

use App\Enums\SpacingType;
use App\Enums\UnitType;
use App\Enums\WorkType;
use App\Models\Business\AcademicLevel;
use App\Models\Business\Assignment;
use App\Models\Business\AuthorLevel;
use App\Models\Business\Subject;
use App\Models\Business\Urgency;

class AcademicWritingPriceCalculator
{

    private $request;

    public function __construct($request)
    {
        $this->request = $request;
    }

    public function get()
    {
        $request                           = $this->request;
        $data['per_word_price']            = $this->getPerWordPrice($request->work_type_id, $request->author_level_id);
        $data['author_per_word_price'] = $this->getPerWordPriceForAuthor($request->work_type_id, $request->author_level_id);
        $data['number_of_words']           = $this->getQuantity($request->spacing_type_id, $request->quantity, $request->unit_name);

        $base_price            = $data['per_word_price'] * $data['number_of_words'];
        $price                 = $base_price;
        $author_base_price = $data['author_per_word_price'] * $data['number_of_words'];
        $author_price      = $author_base_price;

        $costFactors = [
            'assignment_price'     => Assignment::find($request->assignment_id),
            'academic_level_price' => AcademicLevel::find($request->academic_level_id),
            'subject_price'        => Subject::find($request->subject_id),
            'urgency_price'        => Urgency::find($request->urgency_id),
        ];

        foreach ($costFactors as $key => $costFactor) {
            $cost_factor_price = $this->getPriceFromPercentage($base_price, $costFactor);
            $data[$key]        = $cost_factor_price;
            $price += $cost_factor_price;
            $author_price += $this->getPriceFromPercentage($author_base_price, $costFactor);
        }
        $data['amount']                    = $price;
        $data['author_payment_amount'] = $author_price;

        return $data;
    }

    private function getQuantity($spacing_type, $quantity, $unit_name)
    {
        if ($unit_name == UnitType::PAGE) {
            $number_of_words_per_page = SpacingType::listOfNumberOfWords()[$spacing_type];
            return $number_of_words_per_page * $quantity;
        } else {
            return $quantity;
        }
    }

    private function getPerWordPrice($work_type_id, $author_level_id)
    {
        $authorLevel = AuthorLevel::find($author_level_id);

        switch ($work_type_id) {
            case WorkType::WRITING:
                $price = $authorLevel->customer_price_per_word_writing;
                break;
            case WorkType::EDITING:
                $price = $authorLevel->customer_price_per_word_editing;
                break;
            case WorkType::PROOFREADING:
                $price = $authorLevel->customer_price_per_word_proofreading;
                break;
            default:
                $price = 0;
                break;
        }

        return $price;
    }

    private function getPerWordPriceForAuthor($work_type_id, $author_level_id)
    {
        $authorLevel = AuthorLevel::find($author_level_id);

        switch ($work_type_id) {
            case WorkType::WRITING:
                $price = $authorLevel->author_price_per_word_writing;
                break;
            case WorkType::EDITING:
                $price = $authorLevel->author_price_per_word_editing;
                break;
            case WorkType::PROOFREADING:
                $price = $authorLevel->author_price_per_word_proofreading;
                break;
            default:
                $price = 0;
                break;
        }

        return $price;
    }

    private function getPriceFromPercentage($base_price, $costFactor)
    {
        if ($costFactor->percentage) {
            return ($base_price * $costFactor->percentage) / 100;
        }
        return 0;
    }
}
