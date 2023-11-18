<?php

namespace App\Http\Requests;

use App\Enums\ServiceType;
use App\Enums\UserType;
use App\Enums\WorkType;
use App\Models\User;
use App\Rules\MoneyFormat;
use Illuminate\Foundation\Http\FormRequest;
use Mews\Purifier\Facades\Purifier;

class StoreOrderRequest extends FormRequest
{
    private $instruction_char_limit = 'max:'. 20000;
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'title'       => Purifier::clean($this->title),
            'instruction' => Purifier::clean($this->instruction),
        ]);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'is_on_bidding_mode'  => 'nullable|boolean',           
            'service_id'          => 'required',
            'author_level_id' => 'required',
            'service_level_id'    => 'required',
            'added_services'      => 'nullable|array',
        ];

        if (isset($this->is_on_bidding_mode) && $this->is_on_bidding_mode) {
            $rules['budget'] = ['required', new MoneyFormat];
        }

        if (auth()->check() && auth()->user()->type == UserType::ADMIN) {
            $rules['customer_id']         = 'required';
            $rules['is_total_overridden'] = 'nullable|boolean';
            $rules['updated_total']       = 'required_if:is_total_overridden,1';
        }

        switch ($this->service_id) {
            case ServiceType::ACADEMIC_WRITING:
                $rules = $rules + $this->academicWritingRules();
                break;
            case ServiceType::CONTENT_WRITING:
                $rules = $rules + $this->contentWritingFields();
                break;
            case ServiceType::RESUME_WRITING:
                $rules = $rules + $this->resumeWritingFields();
                break;

            default:
                # code...
                break;
        }

        return $rules;
    }

    // public function withValidator($validator)
    // {
    //     $validator->after(function ($validator) {

    //         if ($this->user_status  == 'existing_customer') {
    //             $user = User::where('email', $this->email)->first();
    //             if ($user && $user->inactive) {
    //                 $validator->errors()->add('email', __('The account is suspended'));
    //             }
    //         }
    //     });
    // }

    private function academicWritingRules()
    {
        $rules = [
            'work_type_id'      => 'required',
            'assignment_id'     => 'required',
            'subject_id'        => 'required',
            'academic_level_id' => 'required',
            'urgency_id'        => 'required',
            'quantity'          => 'required|numeric',
            'unit_name'         => 'required',
            'paper_format_id'   => 'required',
            'number_of_sources' => 'nullable|numeric',
            'spacing_type_id'   => 'required',
            'title'             => 'required|max:255',
            'instruction'       => 'required|'. $this->instruction_char_limit,
            'files_data'        => 'nullable|array',
        ];

        if ($this->work_type_id != WorkType::WRITING) {
            $rules['files_data'] = 'required|array';
        }

        return $rules;
    }

    private function resumeWritingFields()
    {
        $rules = [
            'assignment_id' => 'required',
            'urgency_id'    => 'required',
            'quantity'      => 'required|numeric',
            'title'         => 'required|max:255',
            'instruction'   => 'nullable|'. $this->instruction_char_limit,
            'files_data'    => 'required|array',

        ];

        return $rules;
    }

    private function contentWritingFields()
    {
        $rules = [
            'work_type_id'                          => 'required',
            'assignment_id'                         => 'required',
            'subject_id'                            => 'required',
            'urgency_id'                            => 'required',
            'quantity'                              => 'required',
            'unit_name'                             => 'required',
            'spacing_type_id'                       => 'required',
            'language_id'                           => 'required',
            'title'                                 => 'required|max:255',
            'content_goals'                         => 'required|'. $this->instruction_char_limit,
            'grammatical_person_id'                 => 'nullable',
            'target_audience'                       => 'nullable|'. $this->instruction_char_limit,
            'target_keywords'                       => 'nullable|'. $this->instruction_char_limit,
            'links_to_example_content'              => 'nullable|'. $this->instruction_char_limit,
            'style_and_tone'                        => 'nullable|'. $this->instruction_char_limit,
            'structure_and_formatting_requirements' => 'nullable|'. $this->instruction_char_limit,
            'referencing_and_linking_preferences'   => 'nullable|'. $this->instruction_char_limit,
            'things_to_avoid'                       => 'nullable|'. $this->instruction_char_limit,
            'additional_notes'                      => 'nullable|'. $this->instruction_char_limit,
            'files_data'                            => 'nullable|array',

        ];
        if ($this->work_type_id != WorkType::WRITING) {
            $rules['files_data'] = 'required|array';
        }
        return $rules;
    }

    // protected function failedValidation(Validator $validator)
    // {
    //     throw new HttpResponseException(response()->json([
    //         'errors' => $validator->errors(),
    //         'status' => false
    //     ]));
    // }

    /**
     * Get the validation attributes that apply to the request.
     *
     * @return array
     */
    public function attributes()
    {
        $attributeNames['files_data']  = __('Attachment');
        $attributeNames['customer_id'] = __('Customer');
        $attributeNames['bid_budget']  = __('Budget');

        return $attributeNames;
    }

    public function messages()
    {
        return [
            'bid_budget.required_if' => __('validation.required'),
        ];
    }
}
