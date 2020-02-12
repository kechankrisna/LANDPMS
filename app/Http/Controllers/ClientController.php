<?php

namespace App\Http\Controllers;

use App\Http\Requests\ClientCreateRequest;
use App\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\ClientCollection;
use App\Http\Resources\ClientResource;

class ClientController extends Controller
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
            $collection = DB::table('clients')
            ->where( 'name', 'like', "%$search%" )
            ->orWhere( 'phone', 'like', "%$search%" )
            ->orWhere( 'email', 'like', "%$search%" )
            ->get();
            return new ClientCollection($collection);
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
            $collection = Client::orderBy("$sortBy", $sortType)->where($key, '=' , $value )->paginate($paginate);
            return new ClientCollection($collection);
        }

        $collection = Client::orderBy("$sortBy", $sortType)->paginate($paginate);
        return new ClientCollection($collection);
    }


    /** 
     * selections only name and id of client
     */
    public function selections(){
        $collection = DB::table('clients')->get(['id', 'name', 'user_id']);
        return $collection;
    }

    /** 
     * get the latest user
     */
    public function latest(Request $request){
        $count = 10;
        if($request->count){
            $count = $request->count;
        }
        $collection = DB::table('users')->orderBy('id', 'desc')->take($count)->get();
        return $collection;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ClientCreateRequest $request)
    {
        $validator = $request->validated();

        if (!$validator) {
            return $validator->errors();
        }

        try {
            
            $client = new Client();
            $client->name = $request->name;
            $client->email = $request->email;
            $client->phone = $request->phone;
            $client->user_id = $request->user_id;
            $client->save();

            return response()->json( [ 'message' => __('client.created'), 'data' => new ClientResource($client)], 200);

        } catch (\Throwable $th) {
            return response()->json( [ 'message' => $th->getMessage()  ], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function show(Client $client)
    {
        return new ClientResource($client) ;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function update(ClientCreateRequest $request, Client $client)
    {
        $validator = $request->validated();

        if (!$validator) {
            return $validator->errors();
        }

        try {
            
            $client->name = $request->name;
            $client->email = $request->email;
            $client->phone = $request->phone;
            $client->user_id = $request->user_id;
            $client->save();

            return response()->json( [ 'message' => __('client.updated'), 'data' => new ClientResource($client)], 200);

        } catch (\Throwable $th) {
            return response()->json( [ 'message' => $th->getMessage()  ], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function destroy(Client $client)
    {
        try {
            
            $client->delete();

            return response()->json( [ 'message' => __('client.deleted'), 'data' => new ClientResource($client)], 200);

        } catch (\Throwable $th) {
            return response()->json( [ 'message' => $th->getMessage()  ], 400);
        }
    }
}
