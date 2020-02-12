<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Land extends Model
{
    use SoftDeletes;

    public function location(){
        return $this->belongsTo('App\Location', 'location_id', 'id');
    }
    public function user(){
        return $this->belongsTo('App\User', 'user_id', 'id');
    }
    public function client(){
        return $this->belongsTo('App\Client', 'client_id', 'id');
    }

    public function incomes(){
        return $this->hasMany('App\Income', 'land_id', 'id');
    }

    public function expenses(){
        return $this->hasMany('App\Expense', 'land_id', 'id');
    }

}
