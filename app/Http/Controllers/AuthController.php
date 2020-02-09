<?php
namespace App\Http\Controllers;

use App\Http\Resources\ProfileResource;
use App\Notifications\VerifyEmail;
use App\User;
use Carbon\Carbon;
use Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;


class AuthController extends Controller
{
    /**
     * Create user
     *
     * @param  [string] name
     * @param  [string] email
     * @param  [string] password
     * @param  [string] password_confirmation
     * @return [string] message
     */
public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users',
            'password' => 'required|string|confirmed',
        ]);


        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'activation_token' => Str::random(60),
            
        ]);

        $user->save();

        $tokenResult = $user->createToken( \config('app.client_secret_key_1') );
        $token = $tokenResult->token;
        if ($request->remember_me) {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }

        $token->save();

        return response()->json([
            'message' => __('auth.signup_success'),
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'user' => $user,
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString(),

        ], 201);
    }

    /*
     * Verify user
     */
    public function verify(Request $request)
    {
        $id = $request->query('id');
        $activation_token = $request->query('activation_token');
        $user = User::where('activation_token', $activation_token)->where('id', $id)->first();;
        if (!$user) {
            return response()->json([
                'message' => __("auth.token_invalid")
            ], 404);
        }

        $user->active = true;
        $user->activation_token = '';
        $user->email_verified_at = Carbon::now();
        $user->save();
        return response()->json(['message' => __('auth.email_signup_verify_success'), 'data' => $user]);
    }

    /*
     * Reverify user
     */
    public function sendverify(Request $request)
    {
        // // call our event here 
        $request->user()->notify(new VerifyEmail($request->user()));
        return response()->json(['message' => __('auth.email_signup_verify_sent')]);
    }

    /**
     * Login user and create token
     *
     * @param  [string] email
     * @param  [string] password
     * @param  [boolean] remember_me
     * @return [string] access_token
     * @return [string] token_type
     * @return [string] expires_at
     */
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
            'remember_me' => 'boolean',
        ]);
        $credentials = request(['email', 'password']);

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => trans("auth.failed"),
            ], 401);
        }

        $user = $request->user();
        $tokenResult = $user->createToken( \config('app.client_secret_key_2') );
        $token = $tokenResult->token;
        if ($request->remember_me) {
            $token->expires_at = Carbon::now()->addWeeks(1);
        }

        $token->save();
        return response()->json([
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'user' => $request->user(),
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString(),
        ]);
    }

    /**
     * Logout user (Revoke the token)
     *
     * @return [string] message
     */
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();
        return response()->json([
            'message' => __('auth.logout_success'),
        ]);
    }

    /**
     *
     * @param Request $request to refresh token
     */
    public function refresh(Request $request)
    {
        $token = $request->user()->token()->refresh();
        $token->save();
        return response()->json([
            'access_token' => $token->accessToken,
            'token_type' => 'Bearer',
            'user' => $request->user(),
            'expires_at' => Carbon::parse(
                $token->expires_at
            )->toDateTimeString(),
        ]);
    }

    /**
     * Get the authenticated User
     *
     * @return [json] user object
     */

    public function me(Request $request)
    {
        return new ProfileResource($request->user());
    }


    /**
     * Get the authenticated User
     *
     * @return [json] user object
     */

    public function updateInformation(Request $request)
    {
        $user = $request->user();
        if($user->email != $request->email){
            $request->validate([
                'name' => 'required|string',
                'email' => 'required|string|email|unique:users',
            ]);
        }else{
            $request->validate([
                'name' => 'required|string',
                'email' => 'required|string|email',
            ]);
        }

        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->save();
        return new ProfileResource($request->user());
        
    }


    /**
     * Get the authenticated User
     *
     * @return [json] user object
     */

    public function updatePassword(Request $request)
    {
        $user = $request->user();
        $hashedPassword = User::find($user->id)->password;
     
        if(Hash::check( $request->current_password , $hashedPassword)){
            $user->password = bcrypt($request->password);
            $user->save();
            return new ProfileResource($request->user());
        }else{
            return response()->json([
                'message' => trans("auth.token_invalid"),
            ], 401);
        }
    }
}
