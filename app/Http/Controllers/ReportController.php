<?php

namespace App\Http\Controllers;

use App\Expense;
use App\Income;
use App\Land;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        $reportType = $request->reportType;

        $from = Carbon::parse($request->from);
        $to = Carbon::parse($request->to);
        $location_id = $request->location_id;
        $user_id = $request->user_id;

        $dates = array();
        $values = array();
        $result = array();

        switch ($reportType) {
            case 'revenues':

                $query = Income::select(['amount', 'received_at'])
                    ->where('received_at', '>=', $from)
                    ->where('received_at', '<=', $to);

                $result = $query->get()
                    ->sortBy('received_at')
                    ->groupBy(function ($data) {
                        return Carbon::parse($data->received_at)->format('Y-M-d'); // grouping by days
                        //return Carbon::parse($data->created_at)->format('m'); // grouping by months
                    });

                foreach ($result as $key => $x) {
                    \array_push($dates, $key);
                    $x->amount = 0;
                    foreach ($x as $key => $y) {
                        $x->amount += $y->amount;
                    }
                    \array_push($values, $x->amount);
                }

                break;

            case 'expenses':
                $query = Expense::select(['amount', 'paid_at'])
                    ->where('paid_at', '>=', $from)
                    ->where('paid_at', '<=', $to);

                $result = $query->get()
                    ->sortBy('paid_at')
                    ->groupBy(function ($data) {
                        return Carbon::parse($data->paid_at)->format('Y-M-d'); // grouping by days
                        //return Carbon::parse($data->created_at)->format('m'); // grouping by months
                    });

                foreach ($result as $key => $x) {
                    \array_push($dates, $key);
                    $x->amount = 0;
                    foreach ($x as $key => $y) {
                        $x->amount += $y->amount;
                    }
                    \array_push($values, $x->amount);
                }

                break;

            default:

                $query = Land::select(['price', 'sold_at'])
                    ->where('sold_at', '>=', $from)
                    ->where('sold_at', '<=', $to);

                if ($location_id && $location_id > 0) {
                    $query->where('location_id', '=', $location_id);
                }
                if ($user_id && $user_id > 0) {
                    $query->where('user_id', '=', $user_id);
                }

                $result = $query->get()
                    ->sortBy('sold_at')
                    ->groupBy(function ($data) {
                        return Carbon::parse($data->sold_at)->format('Y-M-d'); // grouping by days
                        //return Carbon::parse($data->created_at)->format('m'); // grouping by months
                    });

                foreach ($result as $key => $x) {
                    \array_push($dates, $key);
                    $x->amount = 0;
                    foreach ($x as $key => $y) {
                        $x->amount += $y->price;
                    }
                    \array_push($values, $x->amount);
                }

                break;
        }

        // return \sizeof($result);
        // return $result;
        return [
            $dates,
            $values,
        ];

    }

    /**
     * return report of incomes and expense
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function statement(Request $request)
    {
        $from = Carbon::parse($request->from);
        $to = Carbon::parse($request->to);
        $reportType = $request->reportType;

        if ($reportType) {

            switch ($reportType) {
                case 'incomes':

                    $query = Income::select()
                        ->where('received_at', '>=', $from)
                        ->where('received_at', '<=', $to)
                        ->orderBy('received_at', 'DESC')
                        ->get();

                    return $query;
                    break;

                case 'expenses':

                    $query = Expense::select()
                        ->where('paid_at', '>=', $from)
                        ->where('paid_at', '<=', $to)
                        ->orderBy('paid_at', 'DESC')
                        ->get();

                    return $query;
                    break;

                default:
                    return array();
                    break;
            }

        }

        return array();

    }

}
