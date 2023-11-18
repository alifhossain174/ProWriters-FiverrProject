<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|

 */

load_route('social_login');
load_route('installer');

if (is_single_language()) {
    load_route('core');

} else {
    Route::group(['prefix' => '{lc?}'], function () {
        load_route('core');
    });
}
