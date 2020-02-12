<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Location extends Model
{
    use SoftDeletes;


    public function lands(){
        return $this->hasMany('App\Land', 'location_id', 'id');
    }
    
}
