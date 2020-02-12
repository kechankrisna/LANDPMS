<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserCollection;
use App\Http\Resources\UserMemberResource;
use App\Http\Resources\UserResource;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UserController extends Controller
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
        if ($search) {
            $collection = DB::table('users')
                ->where('name', 'like', "%$search%")
                ->orWhere('phone', 'like', "%$search%")
                ->orWhere('email', 'like', "%$search%")
                ->get();
            return new UserCollection($collection);
        }

        //sortBy default: name
        $sortBy = 'name';
        if ($request->query('sortBy')) {
            $sortBy = $request->query('sortBy');
        }

        //sortType default: desc
        $sortType = "desc";
        $sortDesc = $request->sortDesc;
        if ($sortDesc == "false") {
            $sortType = "asc";
        };

        //paginate default: 10
        $paginate = 10;
        if ($request->query('paginate')) {
            $paginate = $request->query('paginate');
        }

        //!filter by field and value
        if ($request->query('filerByField') && $request->query('filerByValue')) {
            $key = $request->query('filerByField');
            $value = $request->query('filerByValue');
            $collection = User::orderBy("$sortBy", $sortType)->where($key, '=', $value)->paginate($paginate);
            return new UserCollection($collection);
        }

        $collection = User::orderBy("$sortBy", $sortType)->paginate($paginate);
        return new UserCollection($collection);
    }

    /**
     * selections only name and id of user
     */
    public function selections()
    {
        $collection = DB::table('users')->get(['id', 'name']);
        return $collection;
    }

    /**
     * get the latest user
     */
    public function latest(Request $request)
    {
        $count = 10;
        if ($request->count) {
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
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed',
        ]);

        try {

            $user = new User([
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'isAdmin' => $request->isAdmin,
                'active' => $request->active,
                'reference_id' => $request->reference_id,
                'password' => bcrypt($request->password),
                'activation_token' => Str::random(60),
            ]);

            $user->save();

            return response()->json(['message' => __('user.created'), 'data' => new UserResource($user)], 200);

        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        return new UserResource($user);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function members(User $user)
    {

        //get all 3 generation of members
        $u = new UserMemberResource($user);

        //second looop : second child
        foreach ($u->children as $key => $ref) {
            $ref->title = $ref->phone;
            $u->children->children = $ref->children;

            //third loop : third child
            foreach ($u->children->children as $key => $ref) {
                $ref->title = $ref->phone;
                $u->children->children->children = $ref->children;
            }

        }

        // return new UserResource($user);
        return $u;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function revenues(User $user)
    {

        $renvenus = array();
        //get all 3 generation of members
        $u = $user;
        $line_1 = DB::table('lands')
            ->join('locations', 'locations.id', '=', 'lands.location_id')
            ->join('clients', 'clients.id', '=', 'lands.client_id')
            ->where('lands.user_id', $u->id)
            ->orderBy('lands.id')
            ->select("lands.name as land", "locations.name as location", 'lands.sold_at', 'clients.name as client', 'lands.commission_line_1 as amount')
            ->get();

        foreach ($line_1 as $key => $line) {
            if($line != null){
                \array_push($renvenus, $line);
            }
        }

        //second looop : second child
        foreach ($u->children as $key => $ref2) {

            $line_2 = DB::table('lands')
                ->join('locations', 'locations.id', '=', 'lands.location_id')
                ->join('clients', 'clients.id', '=', 'lands.client_id')
                ->where('lands.user_id', $ref2->id)
                ->orderBy('lands.id')
                ->select("lands.name as land", "locations.name as location", 'lands.sold_at', 'clients.name as client', 'lands.commission_line_2 as amount')
                ->get();
            foreach ($line_2 as $key => $line) {
                if($line != null){
                    \array_push($renvenus, $line);
                }
            }

            $u->children->children = $ref2->children;

            //third loop : third child
            foreach ($u->children->children as $key => $ref3) {

                $line_3 = DB::table('lands')
                    ->join('locations', 'locations.id', '=', 'lands.location_id')
                    ->join('clients', 'clients.id', '=', 'lands.client_id')
                    ->where('lands.user_id', $ref3->id)
                    ->orderBy('lands.id')
                    ->select("lands.name as land", "locations.name as location", 'lands.sold_at', 'clients.name as client', 'lands.commission_line_3 as amount')
                    ->get();
                foreach ($line_3 as $key => $line) {
                    if ($line != null) {
                        \array_push($renvenus, $line);
                    }
                }

                $u->children->children->children = $ref3->children;

                //forth loop : forth child
                foreach ($u->children->children->children as $key => $ref4) {

                    $line_4 = DB::table('lands')
                        ->join('locations', 'locations.id', '=', 'lands.location_id')
                        ->join('clients', 'clients.id', '=', 'lands.client_id')
                        ->where('lands.user_id', $ref4->id)
                        ->orderBy('lands.id')
                        ->select("lands.name as land", "locations.name as location", 'lands.sold_at', 'clients.name as client', 'lands.commission_line_4 as amount')
                        ->get();
                    foreach ($line_4 as $key => $line) {
                        if ($line != null) {
                            \array_push($renvenus, $line);
                        }
                    }

                }

            }

        }

        return $renvenus;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function receiveds(User $user)
    {

        $result = DB::table('expenses')
            ->join('lands', 'lands.id', '=', 'expenses.land_id')
            ->join('locations', 'locations.id', '=', 'lands.location_id')
            ->where('expenses.user_id', '=', $user->id)
            ->orderBy('expenses.id')
            ->select("expenses.*", "lands.name as land", "locations.name as location")
            ->get();
        return $result;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        if ($user->email != $request->email) {
            $request->validate([
                'name' => 'required|string',
                'email' => 'required|string|email|unique:users',
            ]);
        } else {
            $request->validate([
                'name' => 'required|string',
                'email' => 'required|string|email',
            ]);
        }

        try {

            $user->name = $request->name;
            $user->email = $request->email;
            $user->reference_id = $request->reference_id;
            $user->phone = $request->phone;
            $user->active = $request->active;
            $user->isAdmin = $request->isAdmin;

            $user->save();

            return response()->json(['message' => __('user.updated'), 'data' => new UserResource($user)], 200);

        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        try {

            $user->delete();

            return response()->json(['message' => __('user.deleted'), 'data' => new UserResource($user)], 200);

        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 400);
        }
    }
}
