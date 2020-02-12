<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ExpenseCreateRequest extends FormRequest
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
            // 'type' => ['required', 'string','max:255'],
            'title' => ['required', 'string','max:255'],
            'description' => ['string','max:255'],
            'amount' => ['required', 'numeric'],
            // 'land_id' => ['numeric|null'],
            // 'user_id' => ['numeric|null'],
            'paid_at' => ['required', 'date']
        ];
    }
}
