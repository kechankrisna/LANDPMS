<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LandCreateRequest extends FormRequest
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
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => ['required', 'string','max:255'],
            'description' => ['max:255'],
            'location_id' => ['required', 'numeric'],
            'price' => ['required', 'numeric'],
            'commission_line_1' => ['required','numeric'],
            'commission_line_2' => ['required','numeric'],
            'commission_line_3' => ['required','numeric'],

        ];
    }
}
