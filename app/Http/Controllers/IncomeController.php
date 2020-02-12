<?php

namespace App\Http\Controllers;

use App\Http\Requests\IncomeCreateRequest;
use App\Income;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\IncomeCollection;
use App\Http\Resources\IncomeResource;
use Illuminate\Support\Carbon;

class IncomeController extends Controller
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
            $collection = DB::table('incomes')
            ->where( 'title', 'like', "%$search%" )
            ->orWhere( 'type', 'like', "%$search%" )
            ->orWhere( 'description', 'like', "%$search%" )
            ->orWhere( 'amount', 'like', "%$search%" )
            ->get();
            return new IncomeCollection($collection);
        }

        //sortBy default: title
        $sortBy = 'title';
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
            $collection = Income::orderBy("$sortBy", $sortType)->where($key, '=' , $value )->paginate($paginate);
            return new IncomeCollection($collection);
        }

        $collection = Income::orderBy("$sortBy", $sortType)->paginate($paginate);
        return new IncomeCollection($collection);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(IncomeCreateRequest $request)
    {
        $validator = $request->validated();

        if (!$validator) {
            return $validator->errors();
        }

        try {

            $income = new Income();
            $income->type = $request->type;
            $income->title = $request->title;
            $income->description = $request->description;
            $income->amount = $request->amount;
            $income->land_id = $request->land_id;
            $income->user_id = $request->user_id;
            $income->received_at = Carbon::parse($request->received_at) ; 
            $income->save();

            return response()->json( [ 'message' => __('income.created'), 'data' => new IncomeResource($income)], 200);

        } catch (\Throwable $th) {
            return response()->json( [ 'message' => $th->getMessage()  ], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Income  $income
     * @return \Illuminate\Http\Response
     */
    public function show(Income $income)
    {
         return new IncomeResource($income) ;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Income  $income
     * @return \Illuminate\Http\Response
     */
    public function update(IncomeCreateRequest $request, Income $income)
    {
        $validator = $request->validated();

        if (!$validator) {
            return $validator->errors();
        }

        try {

            $income->type = $request->type;
            $income->title = $request->title;
            $income->description = $request->description;
            $income->amount = $request->amount;
            $income->land_id = $request->land_id;
            $income->user_id = $request->user_id;
            $income->received_at = Carbon::parse($request->received_at);
            $income->save();

            return response()->json( [ 'message' => __('income.updated'), 'data' => new IncomeResource($income)], 200);

        } catch (\Throwable $th) {
            return response()->json( [ 'message' => $th->getMessage()  ], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Income  $income
     * @return \Illuminate\Http\Response
     */
    public function destroy(Income $income)
    {
        try {
            
            $income->delete();

            return response()->json( [ 'message' => __('income.deleted'), 'data' => new IncomeResource($income)], 200);

        } catch (\Throwable $th) {
            return response()->json( [ 'message' => $th->getMessage()  ], 400);
        }
    }
}
