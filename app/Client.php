<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Setting;
use Illuminate\Database\Eloquent\SoftDeletes;

class Client extends Model
{
    
    use SoftDeletes;

    public function user(){
        return $this->belongsTo('App\User','user_id', 'id');
    }

    public function lands(){
        return $this->hasMany('App\Land', 'client_id', 'id');
    }

    public function getValue($field){
        if($field){
            return Setting::where( 'setting_name', '=', "$field" )->where( 'reference_id', '=', $this->id )->first()->setting_value;
        }
        return null;
    }

}
