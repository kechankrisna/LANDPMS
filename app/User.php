<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Database\Eloquent\SoftDeletes;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'active', 'activation_token', 'avatar', 'isAdmin'
    ];

    protected $appends = ['avatar_url'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'activation_token'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function reference(){
        return $this->belongsTo('App\User', 'reference_id', 'id');
    }


    public function references(){
        return $this->hasMany('App\User', 'reference_id', 'id');
    }

    public function children(){
        return $this->hasMany('App\User', 'reference_id', 'id');
    }

    public function clients(){
        return $this->hasMany('App\Client', 'user_id', 'id');
    }

    
    public function getAvatarUrlAttribute()
    {
        return $this->avatar;
    }
}
