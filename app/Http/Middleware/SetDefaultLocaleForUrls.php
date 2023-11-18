<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\URL;

class SetDefaultLocaleForUrls
{
    protected $except = [
        'auth',
        'install',
        // 'auth/google',
        // 'auth/google/callback',

    ];

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (is_single_language()) {
            return $next($request);
        }

        $path = explode("/", $request->path());

        if (isset($path[0])) {
            if (in_array($path[0], $this->except)) {
                return $next($request);
            }
        }

        URL::defaults(['lc' => app()->getLocale()]);

        if ($request->is('api/*')) {
            return $next($request);
        }

        if (in_array(get_locale_from_url(), allowed_languages())) {
            URL::defaults(['lc' => get_locale_from_url()]);
            return $next($request);
        } else {
            if (env('ENABLE_APP_SETUP_CONFIG') == false) {
                return $next($request);
            }
            $default_locale = config('app.locale');
            $parsedUrl      = parse_url(url()->current());
            $request_uri    = $_SERVER['REQUEST_URI'];
            $url            = $parsedUrl['scheme'] . '://' . $parsedUrl['host'] . '/' . $default_locale . $request_uri;

            return redirect($url);
        }
    }
}
