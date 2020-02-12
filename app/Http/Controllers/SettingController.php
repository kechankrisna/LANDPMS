<?php

namespace App\Http\Controllers;

use App\Setting;
use App\Http\Requests\SettingCreateRequest;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Setting::get();
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SettingCreateRequest $request)
    {
        $validator = $request->validated();

        if (!$validator) {
            return $validator->errors();
        }

        try {
            
            $setting = new Setting();
            $setting->setting_name = $request->setting_name;
            $setting->setting_value = $request->setting_value;
            $setting->reference_id = $request->reference_id;
            $setting->save();

            return response()->json( [ 'message' => __('setting.created'), 'data' => $setting ], 200);

        } catch (\Throwable $th) {
            return response()->json( [ 'message' => $th->getMessage()  ], 400);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function update(SettingCreateRequest $request, Setting $setting)
    {
        $validator = $request->validated();

        if (!$validator) {
            return $validator->errors();
        }

        try {
            
            $setting->setting_name = $request->setting_name;
            $setting->setting_value = $request->setting_value;
            $setting->reference_id = $request->reference_id;
            $setting->save();

            return response()->json( [ 'message' => __('setting.updated'), 'data' => $setting ], 200);

        } catch (\Throwable $th) {
            return response()->json( [ 'message' => $th->getMessage()  ], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Setting  $setting
     * @return \Illuminate\Http\Response
     */
    public function destroy(Setting $setting)
    {
        try {
            
            $setting->delete();

            return response()->json( [ 'message' => __('setting.deleted'), 'data' => $setting], 200);

        } catch (\Throwable $th) {
            return response()->json( [ 'message' => $th->getMessage()  ], 400);
        }
    }
}
