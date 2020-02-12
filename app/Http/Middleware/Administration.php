<?php

namespace App\Http\Middleware;

use App\User;
use Closure;
use Firebase\JWT\JWT;

class Administration
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        // $user = $request->user();
        // if(!$user){
        //     return response()->json([
        //         'message' => __("auth.failed"),
        //     ], 401);
        // }
        
        if($request->bearerToken()){
            $publicKey = file_get_contents(storage_path('oauth-public.key'));
            $res = JWT::decode($request->bearerToken(), $publicKey, array('RS256'));
            $user = User::where("id", "=", $res->sub)->first();
            if($user && $user->isAdmin){
                return $next($request);
            }  
        };

        return response()->json([
            'message' => __("permissions.block"),
        ], 401);
    }
}
