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

/**
 * complete auth api routers
 */

Route::group(['prefix' => 'auth',], function () {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::get('verify', 'AuthController@verify')->name('verify.email');

    Route::group(['middleware' => 'auth:api',], function () {
        Route::get('logout', 'AuthController@logout');
        Route::post('me', 'AuthController@me');
        Route::post('updateinformation', 'AuthController@updateInformation');
        Route::post('updatepassword', 'AuthController@updatePassword');

        Route::post('sendverify', 'AuthController@sendverify');

        Route::get('/{user}/members/',  'UserController@members')->name('profile.getmember');
        Route::get('/{user}/revenues/',  'UserController@revenues')->name('profile.revenues');
        Route::get('/{user}/receiveds/',  'UserController@receiveds')->name('profile.receiveds');
        
    });
});

/**
 * complete reset password api routers
 */

Route::group(['prefix' => 'password',], function () {

     Route::post('sendreset', 'PasswordResetController@sendreset');
     Route::get('find/{token}', 'PasswordResetController@find');
     Route::post('reset', 'PasswordResetController@reset');
});


/**
 * complete income REST api
 */

Route::group(['prefix' => 'incomes', 'middleware' => ['auth:api', 'administration'] ], function () {

    Route::get('/', 'IncomeController@index')->name('income.all');
    Route::post('/', 'IncomeController@store')->name('income.create');
    Route::get('/{income}', 'IncomeController@show')->name('income.get');
    Route::put('/{income}', 'IncomeController@update')->name('income.update');
    Route::delete('/{income}', 'IncomeController@destroy')->name('income.delete');
    
});

/**
 * complete expense REST api
 */

Route::group(['prefix' => 'expenses', 'middleware' => ['auth:api', 'administration'] ], function () {

    Route::get('/', 'ExpenseController@index')->name('expense.all');
    Route::post('/', 'ExpenseController@store')->name('expense.create');
    Route::get('/{expense}', 'ExpenseController@show')->name('expense.get');
    Route::put('/{expense}', 'ExpenseController@update')->name('expense.update');
    Route::delete('/{expense}', 'ExpenseController@destroy')->name('expense.delete');
    
});


/**
 * complete location REST api
 */

Route::group(['prefix' => 'locations', 'middleware' => ['auth:api', 'administration'] ], function () {

    Route::get('/', 'LocationController@index')->name('location.all');
    Route::get('/selections', 'LocationController@selections')->name('location.selections');
    Route::post('/', 'LocationController@store')->name('location.create');
    Route::get('/{location}', 'LocationController@show')->name('location.get');
    Route::put('/{location}', 'LocationController@update')->name('location.update');
    Route::delete('/{location}', 'LocationController@destroy')->name('location.delete');
    
});

/**
 * complete land REST api
 */

Route::group(['prefix' => 'lands', 'middleware' => ['auth:api', 'administration'] ], function () {

    Route::get('/', 'LandController@index')->name('land.all');
    Route::post('/', 'LandController@store')->name('land.create');
    Route::get('/{land}', 'LandController@show')->name('land.get');
    Route::put('/{land}', 'LandController@update')->name('land.update');
    Route::delete('/{land}', 'LandController@destroy')->name('land.delete');
    
});

/**
 * complete setting REST api
 */

Route::group(['prefix' => 'settings', 'middleware' => ['auth:api', 'administration'] ], function () {

    Route::get('/', 'SettingController@index')->name('setting.all');
    Route::post('/', 'SettingController@store')->name('setting.create');
    Route::put('/{setting}', 'SettingController@update')->name('setting.update');
    Route::delete('/{setting}', 'SettingController@destroy')->name('setting.delete');
    
});

/**
 * complete user REST api
 */

Route::group(['prefix' => 'users', 'middleware' => ['auth:api', 'administration'] ], function () {
    
    Route::get('/',  'UserController@index')->name('user.all');
    Route::get('/selections',  'UserController@selections')->name('user.selections');
    Route::get('/latest',  'UserController@latest')->name('user.latest');
    Route::post('/',  'UserController@store')->name('user.create');
    Route::get('/{user}',  'UserController@show')->name('user.get');
    Route::get('/{user}/members/',  'UserController@members')->name('user.getmember');
    Route::get('/{user}/revenues/',  'UserController@revenues')->name('user.revenues');
    Route::get('/{user}/receiveds/',  'UserController@receiveds')->name('user.receiveds');
    Route::put('/{user}',  'UserController@update')->name('user.update');
    Route::delete('/{user}',  'UserController@destroy')->name('user.delete');

});



/**
 * complete client REST api
 */

Route::group(['prefix' => 'clients', 'middleware' => ['auth:api', 'administration'] ], function () {

    Route::get('/', 'ClientController@index')->name('client.all');
    Route::get('/selections',  'ClientController@selections')->name('client.selections');
    Route::get('/latest',  'ClientController@latest')->name('client.latest');
    Route::post('/', 'ClientController@store')->name('client.create');
    Route::get('/{client}', 'ClientController@show')->name('client.get');
    Route::put('/{client}', 'ClientController@update')->name('client.update');
    Route::delete('/{client}', 'ClientController@destroy')->name('client.delete');
    
});


/**
 * complete report REST api
 */

Route::group(['prefix' => 'reports', 'middleware' => ['auth:api', 'administration'] ], function () {

    Route::get('/', 'ReportController@index')->name('report.all'); 
    Route::get('/statement', 'ReportController@statement')->name('report.statement'); //
});

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });
