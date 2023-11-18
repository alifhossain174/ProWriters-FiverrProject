<?php

namespace App\Http\Requests;

use App\Enums\ServiceType;
use App\Rules\MoneyFormat;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreAssignmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Prepare the data for validation.
     *
     * @return void
     */
    protected function prepareForValidation()
    {
        if (isset($this->price) && $this->price && $this->price == '0.000000') {
            $this->merge([
                'price' => 0,
            ]);
        }

    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        switch ($this->method()) {
            case 'PATCH':
                $nameRule = [
                    'required',
                    Rule::unique('assignments')->ignore($this->assignment->id),
                ];
                break;
            default:
                $nameRule = "required|max:192|unique:assignments";
                break;
        }

        return [
            'name'                      => $nameRule,
            'service_id'                => 'required',
            'price'                     => ['required_if:service_id,' . ServiceType::RESUME_WRITING],
            'author_level_id'       => 'required_if:service_id,' . ServiceType::RESUME_WRITING,
            'author_payment_amount' => ['required_if:service_id,' . ServiceType::RESUME_WRITING],
            'urgency_id'                => 'required_if:service_id,' . ServiceType::RESUME_WRITING,
            'description'               => 'required_if:service_id,' . ServiceType::RESUME_WRITING . '|max:192',
            'deliverables'              => 'required_if:service_id,' . ServiceType::RESUME_WRITING . '|max:3000',
        ];
    }

    public function attributes()
    {
        return [
            'name'                      => __('Name'),
            'service_id'                => __('Service'),
            'price'                     => __('Price'),
            'description'               => __('Description'),
            'deliverables'              => __('Deliverables'),
            'author_level_id'       => __('Author Level'),
            'author_payment_amount' => __('Author Payment Amount'),
            'urgency_id'                => __('Turnaround Time'),

        ];
    }

    public function messages()
    {
        return [
            'price.required_if'                     => __('validation.required'),
            'description.required_if'               => __('validation.required'),
            'deliverables.required_if'              => __('validation.required'),
            'author_level_id.required_if'       => __('validation.required'),
            'author_payment_amount.required_if' => __('validation.required'),
            'urgency_id.required_if'                => __('validation.required'),
        ];
    }
}
