<?php

namespace App\Http\Controllers;

use App\Http\Requests\ExpenseCreateRequest;
use App\Expense;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Resources\ExpenseCollection;
use App\Http\Resources\ExpenseResource;
use Illuminate\Support\Carbon;

class ExpenseController extends Controller
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
            $collection = DB::table('expenses')
            ->where( 'title', 'like', "%$search%" )
            ->orWhere( 'type', 'like', "%$search%" )
            ->orWhere( 'description', 'like', "%$search%" )
            ->orWhere( 'amount', 'like', "%$search%" )
            ->get();
            return new ExpenseCollection($collection);
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
            $collection = Expense::orderBy("$sortBy", $sortType)->where($key, '=' , $value )->paginate($paginate);
            return new ExpenseCollection($collection);
        }

        $collection = Expense::orderBy("$sortBy", $sortType)->paginate($paginate);
        return new ExpenseCollection($collection);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ExpenseCreateRequest $request)
    {
        $validator = $request->validated();

        if (!$validator) {
            return $validator->errors();
        }

        try {

            $expense = new Expense();
            $expense->type = $request->type;
            $expense->title = $request->title;
            $expense->description = $request->description;
            $expense->amount = $request->amount;
            $expense->land_id = $request->land_id;
            $expense->user_id = $request->user_id;
            $expense->paid_at = Carbon::parse($request->paid_at) ; 
            $expense->save();

            return response()->json( [ 'message' => __('expense.created'), 'data' => new ExpenseResource($expense)], 200);

        } catch (\Throwable $th) {
            return response()->json( [ 'message' => $th->getMessage()  ], 400);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function show(Expense $expense)
    {
        return new ExpenseResource($expense) ;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function update(ExpenseCreateRequest $request, Expense $expense)
    {
        $validator = $request->validated();

        if (!$validator) {
            return $validator->errors();
        }

        try {

            $expense->type = $request->type;
            $expense->title = $request->title;
            $expense->description = $request->description;
            $expense->amount = $request->amount;
            $expense->land_id = $request->land_id;
            $expense->user_id = $request->user_id;
            $expense->paid_at = Carbon::parse($request->paid_at) ; 
            $expense->save();

            return response()->json( [ 'message' => __('expense.updated'), 'data' => new ExpenseResource($expense)], 200);

        } catch (\Throwable $th) {
            return response()->json( [ 'message' => $th->getMessage()  ], 400);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Expense  $expense
     * @return \Illuminate\Http\Response
     */
    public function destroy(Expense $expense)
    {
        try {
            
            $expense->delete();

            return response()->json( [ 'message' => __('expense.deleted'), 'data' => new ExpenseResource($expense)], 200);

        } catch (\Throwable $th) {
            return response()->json( [ 'message' => $th->getMessage()  ], 400);
        }
    }
}
