<?php

namespace App\Http\Resources;

use App\User;
use Illuminate\Http\Resources\Json\JsonResource;

class LandResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        // return parent::toArray($request);
        $recieves = 0;
        foreach ($this->incomes as $key => $income) {
            $recieves += $income->amount;
        }

        $this->due = $this->price - $recieves;

        //get commission parents
        $commissions = array();
        $user1 = User::where( "id", '=', $this->user_id)->get(['id', 'name', 'reference_id'])->first();
        if($user1){

            $user1->amount = $this->commission_line_1;
            array_push($commissions, $user1);
            $user2 = User::where( "id", '=', $user1->reference_id)->get(['id', 'name', 'reference_id'])->first();
            
            if($user2){
                $user2->amount = $this->commission_line_2;
                array_push($commissions, $user2);
                $user3 = User::where( "id", '=', $user2->reference_id)->get(['id', 'name', 'reference_id'])->first();
                
                if($user3){
                    $user3->amount = $this->commission_line_3;
                    array_push($commissions, $user3);
                    $user4 = User::where( "id", '=', $user3->reference_id)->get(['id', 'name', 'reference_id'])->first();
                    
                    if($user4){
                        $user4->amount = $this->commission_line_4;
                        array_push($commissions, $user4);
                    }

                }

            }
        }
        

        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'price' => $this->price,
            'commission_line_1' => $this->commission_line_1,
            'commission_line_2' => $this->commission_line_2,
            'commission_line_3' => $this->commission_line_3,
            'commission_line_4' => $this->commission_line_4,
            'incomes' => $this->incomes,
            'expenses' => $this->expenses,
            'due' => $this->due,
            'client_id' => $this->client_id,
            'user_id' => $this->user_id,
            'commissions' => $commissions,
            'sold_at' => $this->sold_at,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
            'deleted_at' => $this->deleted_at,
            'location' => $this->location,
        ];
    }
}
