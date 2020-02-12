<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'phone' => $this->phone,
            'email' => $this->email,
            'isAdmin' => $this->isAdmin,
            'active' => $this->active,
            'reference' => $this->reference,
            'references' => $this->references,
            'clients' => $this->clients,
        ];
    }
}
