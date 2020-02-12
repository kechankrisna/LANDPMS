<?php

namespace App\Http\Controllers;

use App\Http\Requests\LandCreateRequest;
use App\Land;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\LandCollection;
use App\Http\Resources\LandResource;

class LandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //! search
        $search = $request->query('search');
        if($search){
            $collection = DB::table('lands')
            ->where( 'name', 'like', "%$search%" )
            ->orWhere( 'price', 'like', "%$search%" )
            ->orWhere( 'sold_at', 'like', "%$search%" )
            ->get();
            return new LandCollection($collection);
        }

        //sortBy default: name
        $sortBy = 'name';
        if($request->query('sortBy')){
            $sortBy = $request->query('sortBy');
        }

        //sortType default: desc
        $sortType = "desc";
        $sortDesc = $request->sortDesc;
        if($sortDesc == "false"){
            $sortType = "asc";
        };

        //paginate default: 10
        $paginate = 10;
        if($request->query('paginate')){
            $paginate = $request->query('paginate');
        }

        //!filter by field and value
        if($request->query('filerByField') && $request->query('filerByValue')){
            $key = $request->query('filerByField');
            $value = $request->query('filerByValue');
            $collection = Land::orderBy("$sortBy", $sortType)->where($key, '=' , $value )->paginate($paginate);
            return new LandCollection($collection);
        }

        $collection = Land::orderBy("$sortBy", $sortType)->paginate($paginate);
        return new LandCollection($collection);
    }

    /** 
     * selections only name and id of client
     */
    public function selections(){
        $collection = DB::table('clients')->get(['id', 'name']);
        return $collection;
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LandCreateRequest $request)
    {
        $validator = $request->validated();

        if (!$validator) {
            return $validator->errors();
        }

        try {
            
            $land = new Land();
            $land->name = $request->name;
            $land->description = $request->description;
            $land->price = $request->price;
            $land->location_id = $request->location_id;
            $land->user_id = $request->user_id;
            $land->client_id = $request->client_id;
            $land->commission_line_1 = $request->commission_line_1;
            $land->commission_line_2 = $request->commission_line_2;
            $land->commission_line_3 = $request->commission_line_3;
            $land->commission_line_4 = $request->commission_line_4;
            $land->sold_at = $request->sold_at;
            $land->save();

            return response()->json( [ 'message' => __('land.created'), 'data' => new LandResource($land)], 200);

        } catch (\Throwable $th) {
            return response()->json( [ 'message' => $th->getMessage()  ], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Land  $land
     * @return \Illuminate\Http\Response
     */
    public function show(Land $land)
    {
        return new LandResource($land) ;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Land  $land
     * @return \Illuminate\Http\Response
     */
    public function update(LandCreateRequest $request, Land $land)
    {
        $validator = $request->validated();

        if (!$validator) {
            return $validator->errors();
        }

        try {
            
            $land->name = $request->name;
            $land->description = $request->description;
            $land->price = $request->price;
            $land->location_id = $request->location_id;
            $land->user_id = $request->user_id;
            $land->client_id = $request->client_id;
            $land->commission_line_1 = $request->commission_line_1;
            $land->commission_line_2 = $request->commission_line_2;
            $land->commission_line_3 = $request->commission_line_3;
            $land->commission_line_4 = $request->commission_line_4;
            $land->sold_at = $request->sold_at;
            $land->save();

            return response()->json( [ 'message' => __('land.updated'), 'data' => new LandResource($land)], 200);

        } catch (\Throwable $th) {
            return response()->json( [ 'message' => $th->getMessage()  ], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Land  $land
     * @return \Illuminate\Http\Response
     */
    public function destroy(Land $land)
    {
        try {
            
            $land->delete();

            return response()->json( [ 'message' => __('land.deleted'), 'data' => new LandResource($land)], 200);

        } catch (\Throwable $th) {
            return response()->json( [ 'message' => $th->getMessage()  ], 400);
        }
    }
}
