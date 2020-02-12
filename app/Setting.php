<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Setting extends Model
{
    static public function getValue($key = null){
        if($key != null){
            DB::table('settings')->where('setting_key', '=', $key)->first()->key_value;
        }else{
            return null;
        }
    }
}
