<?php

namespace App\Http\Controllers;

use App\Http\Requests\LocationCreateRequest;
use App\Location;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\LocationCollection;
use App\Http\Resources\LocationResource;

class LocationController extends Controller
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
            $collection = DB::table('locations')
            ->where( 'name', 'like', "%$search%" )
            ->get();
            return new LocationCollection($collection);
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
            $collection = Location::orderBy("$sortBy", $sortType)->where($key, '=' , $value )->paginate($paginate);
            return new LocationCollection($collection);
        }

        $collection = Location::orderBy("$sortBy", $sortType)->paginate($paginate);
        return new LocationCollection($collection);
    }


    /** 
     * selections only name and id of location
     */
    public function selections(){
        $collection = DB::table('locations')->get();
        return $collection;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LocationCreateRequest $request)
    {
        $validator = $request->validated();

        if (!$validator) {
            return $validator->errors();
        }

        try {
            
            $location = new Location();
            $location->name = $request->name;
            $location->description = $request->description;
            $location->save();

            return response()->json( [ 'message' => __('location.created'), 'data' => new LocationResource($location)], 200);

        } catch (\Throwable $th) {
            return response()->json( [ 'message' => $th->getMessage()  ], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function show(Location $location)
    {
        return new LocationResource($location) ;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function update(LocationCreateRequest $request, Location $location)
    {
        $validator = $request->validated();

        if (!$validator) {
            return $validator->errors();
        }

        try {
            
            $location->name = $request->name;
            $location->description = $request->description;
            $location->save();

            return response()->json( [ 'message' => __('location.updated'), 'data' => new LocationResource($location)], 200);

        } catch (\Throwable $th) {
            return response()->json( [ 'message' => $th->getMessage()  ], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Location  $location
     * @return \Illuminate\Http\Response
     */
    public function destroy(Location $location)
    {
        try {
            
            $location->delete();

            return response()->json( [ 'message' => __('location.deleted'), 'data' => new LocationResource($location)], 200);

        } catch (\Throwable $th) {
            return response()->json( [ 'message' => $th->getMessage()  ], 400);
        }
    }
}
