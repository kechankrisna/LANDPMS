<?php

namespace App\Http\Middleware;

use Closure;

class Localization
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
        // Check header request and determine localizaton
        $local = ($request->hasHeader('accept-language')) ? $request->header('accept-language') : 'en';
        // set laravel localization
        app()->setLocale($local);
        return $next($request);
    }
}
