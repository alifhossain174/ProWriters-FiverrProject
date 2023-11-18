<?php

use App\Models\Locale\SystemLanguage;

function available_languages()
{
    return \Illuminate\Support\Facades\Cache::rememberForever(SystemLanguage::CACHE_AVAILABLE_LANGUAGES, function () {
        return SystemLanguage::orderBy('name', 'ASC')->pluck('name', 'iso_code')->toArray();
    });
}

function get_languages()
{
    return \Illuminate\Support\Facades\Cache::rememberForever(SystemLanguage::CACHE_SYSTEM_LANGUAGES, function () {
        return SystemLanguage::orderBy('name', 'ASC')->get();
    });
}

function allowed_languages()
{
    return \Illuminate\Support\Facades\Cache::rememberForever(SystemLanguage::CACHE_ALLOWED_LANGUAGES, function () {
        return array_keys(available_languages());
    });
}

function get_country_code($language_iso_code)
{
    $languages = get_languages();
    if ($languages && $languages->count() > 0) {
        $lang = $languages->where('iso_code', $language_iso_code)->first();
        if (isset($lang->country_code)) {
            return $lang->country_code;
        }
    }
    return 'us';
}

function get_layout_direction()
{
    $default = 'ltr';

    if (app()->getLocale() == 'en') {
        return $default;
    }

    if (app()->getLocale()) {
        $languages = get_languages();
        if ($languages && $languages->count() > 0) {
            $loc = $languages->where('iso_code', app()->getLocale())->first();
            if (isset($loc->layout_direction)) {
                return $loc->layout_direction;
            }
        }
    }
    return $default;
}

function get_locale_from_url()
{
    if (is_single_language()) {
        return config('app.locale');
    }

    return \substr($_SERVER['REQUEST_URI'], 1, 2);
}

function is_single_language()
{
    return (env('SINGLE_LANGUAGE') == TRUE) ? TRUE : FALSE;
}
