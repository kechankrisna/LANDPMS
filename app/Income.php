<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Income extends Model
{
    use SoftDeletes;

    public function land(){
        return $this->belongsTo('App\Land', 'land_id', 'id');
    }
}
