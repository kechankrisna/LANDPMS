<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'auth',], function () {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::get('verify', 'AuthController@verify')->name('verify.email');

    Route::group(['middleware' => 'auth:api',], function () {
        Route::get('logout', 'AuthController@logout');
        // Route::get('user', 'AuthController@user');
        Route::post('me', 'AuthController@me');

        Route::post('sendverify', 'AuthController@sendverify');
        
    });
});

Route::group(['prefix' => 'password',], function () {
     ////reset
     Route::post('sendreset', 'PasswordResetController@sendreset');
     Route::get('find/{token}', 'PasswordResetController@find');
     Route::post('reset', 'PasswordResetController@reset');
});


// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
