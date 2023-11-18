<?php

use App\Http\Controllers\Admin\Service\ServiceController;

Route::post('/paginate', [ServiceController::class, 'datatable'])
->name('services.datatable');

Route::resource('services', ServiceController::class);





	Route::prefix('settings')->group(function () {


       

    //     Route::get('/', 'ServiceController@index')
    //     ->name('services_list');

    

    // Route::get('/create', 'ServiceController@create')
    //     ->name('services_create');

    // Route::post('/', 'ServiceController@store')
    //     ->name('services_store');

    // Route::get('/{service}/edit', 'ServiceController@edit')
    //     ->name('services_edit')
    //     ->where('service', '[0-9]+');

    // Route::patch('/{service}/edit', 'ServiceController@update')
    //     ->name('services_update');

    // Route::get('/{service}', 'ServiceController@destroy')
    //     ->name('services_delete')
    //     ->where('service', '[0-9]+');



		
Route::prefix('social-login')->group(function () {

    Route::get('/', 'SettingsController@socialLoginSettings')
        ->name('social_login_settings_page');

    Route::post('/', 'SettingsController@updateSocialLoginSettings')
        ->name('post_social_login_settings');
});

Route::get('/cache', 'SettingsController@clear_cache_page')
    ->name('clear_cache_page');

Route::post('/cache', 'SettingsController@clear_cache')
    ->name('post_clear_cache');

Route::get('/', 'SettingsController@general_information')
    ->name('settings_main_page');

Route::patch('/', 'SettingsController@update_general_information')
    ->name('patch_general_information');

Route::get('email', 'SettingsController@email')
    ->name('settings_email_page');

Route::patch('email/update', 'SettingsController@update_email')
    ->name('patch_settings_email');

// Route::get('/email/test', 'SettingsController@test_email')
//     ->name('send_test_email');

// Route::post('/email/test', 'SettingsController@send_test_email')
//     ->name('post_test_email');

Route::get('google-analytics', 'SettingsController@google_analytics')
    ->name('google_analytics');

Route::patch('google-analytics', 'SettingsController@update_google_analytics')
    ->name('patch_google_analytics');

Route::get('seo', 'SettingsController@seo')
    ->name('seo_page');

Route::patch('seo', 'SettingsController@update_seo')
    ->name('patch_seo');


Route::get('/logo', 'SettingsController@logo_page')
    ->name('settings_logo_page');

Route::post('/logo', 'SettingsController@update_logo')
    ->name('update_logo');
    
Route::get('/logo-mobile', 'SettingsController@logo_mobile_page')
    ->name('settings_logo_mobile_page');

Route::post('/logo-mobile', 'SettingsController@update_logo_mobile')
    ->name('update_logo_mobile');

Route::get('/logo-website', 'SettingsController@logo_website_page')
    ->name('settings_logo_website_page');

Route::post('/logo-website', 'SettingsController@update_logo_website')
    ->name('update_logo_website');

Route::get('/favicon', 'SettingsController@favicon_page')
    ->name('settings_favicon_page');

Route::post('/favicon', 'SettingsController@update_favicon')
    ->name('update_favicon');


Route::get('content/{slug}', 'SettingsController@content')
    ->name('settings_edit_content');

Route::patch('content/{slug}', 'SettingsController@update_content')
    ->name('settings_update_content');

Route::get('/homepage', 'SettingsController@homepage')
    ->name('settings_homepage');

Route::patch('/homepage', 'SettingsController@update_homepage')
    ->name('patch_settings_homepage');

Route::get('/currency', 'SettingsController@currency')
    ->name('settings_currency_page');

Route::patch('/currency', 'SettingsController@update_currency')
    ->name('patch_settings_currency');

Route::get('/staff', 'SettingsController@staff')
    ->name('settings_staff_page');

Route::patch('/staff', 'SettingsController@update_staff')
    ->name('patch_settings_staff');

Route::get('/social-links', 'SettingsController@social_links')
    ->name('settings_social_links');

Route::patch('/social-links', 'SettingsController@update_social_links')
    ->name('patch_settings_social_links');

Route::get('custom-script', 'SettingsController@website_custom_scripts')
    ->name('custom_script_page');

Route::patch('custom-script', 'SettingsController@update_website_custom_scripts')
    ->name('patch_custom_script');

Route::get('recruitment', 'SettingsController@recruitment')
    ->name('settings_recruitment');

Route::patch('recruitment', 'SettingsController@updateRecruitment')
    ->name('patch_settings_recruitment');

// Services    
Route::prefix('services')->group(function () {



    // Additional Services    
    Route::prefix('additional')->group(function () {

        Route::get('/', 'AdditionalServiceController@index')
            ->name('additional_services_list');

        Route::post('/paginate', 'AdditionalServiceController@datatable')
            ->name('datatable_additional_services');

        Route::get('/create', 'AdditionalServiceController@create')
            ->name('additional_services_create');

        Route::post('/', 'AdditionalServiceController@store')
            ->name('additional_services_store');

        Route::get('/{additional_service}/edit', 'AdditionalServiceController@edit')
            ->name('additional_services_edit');

        Route::patch('/{additional_service}/edit', 'AdditionalServiceController@update')
            ->name('additional_services_update')
            ->where('additional_service', '[0-9]+');

        Route::get('/{additional_service}', 'AdditionalServiceController@destroy')
            ->name('additional_services_delete')
            ->where('additional_service', '[0-9]+');
    });
    // End of Additional Services  

});
// End of Services 


// Urgencies    
Route::prefix('urgencies')->group(function () {

    Route::get('/', 'UrgencyController@index')
        ->name('urgencies_list');

    Route::post('/paginate', 'UrgencyController@datatable')
        ->name('datatable_urgencies');

    Route::get('/create', 'UrgencyController@create')
        ->name('urgencies_create');

    Route::post('/', 'UrgencyController@store')
        ->name('urgencies_store');

    Route::get('/{urgency}/edit', 'UrgencyController@edit')
        ->name('urgencies_edit');

    Route::patch('/{urgency}/edit', 'UrgencyController@update')
        ->name('urgencies_update');

    Route::get('/{urgency}', 'UrgencyController@destroy')
        ->name('urgencies_delete');
});
// End of Urgencies 

// Urgencies    
Route::prefix('paper-types')->group(function () {

    Route::get('/', 'PaperTypeController@index')
        ->name('paper_types_list');

    Route::post('/paginate', 'PaperTypeController@datatable')
        ->name('datatable_paper_types');

    Route::get('/create', 'PaperTypeController@create')
        ->name('paper_types_create');

    Route::post('/', 'PaperTypeController@store')
        ->name('paper_types_store');

    Route::get('/{paperType}/edit', 'PaperTypeController@edit')
        ->name('paper_types_edit')
        ->where('paperType', '[0-9]+');

    Route::patch('/{paperType}/edit', 'PaperTypeController@update')
        ->name('paper_types_update')
        ->where('paperType', '[0-9]+');

    Route::get('/{paperType}', 'PaperTypeController@destroy')
        ->name('paper_types_delete')
        ->where('paperType', '[0-9]+');
});


// Work Levels    
Route::prefix('work-levels')->group(function () {

    Route::get('/', 'WorkLevelController@index')
        ->name('work_levels_list');

    Route::post('/paginate', 'WorkLevelController@datatable')
        ->name('datatable_work_levels');

    Route::get('/create', 'WorkLevelController@create')
        ->name('work_levels_create');

    Route::post('/create', 'WorkLevelController@store')
        ->name('work_levels_store');

    Route::get('/{work_level}/edit', 'WorkLevelController@edit')
        ->name('work_levels_edit');

    Route::patch('/{work_level}/edit', 'WorkLevelController@update')
        ->name('work_levels_update');

    Route::get('/{work_level}', 'WorkLevelController@destroy')
        ->name('work_levels_delete');
});
// End of Work Levels  	


// Tags
Route::prefix('tags')->group(function () {

    Route::get('/', 'TagController@index')
        ->name('tags_list');

    Route::post('/paginate', 'TagController@datatable')
        ->name('datatables_tags');

    Route::get('/create', 'TagController@create')
        ->name('tags_create');

    Route::post('/', 'TagController@store')
        ->name('tags_store');

    Route::get('/{tag}/edit', 'TagController@edit')
        ->name('tags_edit');

    Route::patch('/{tag}/edit', 'TagController@update')
        ->name('tags_update');

    Route::get('/{tag}', 'TagController@destroy')
        ->name('tags_delete');
});

Route::get('system/update', 'SettingsController@updateSystemPage')
    ->name('update_system_page');

Route::post('system/update', 'SettingsController@updateSystem')
    ->name('update_system');


// Tags
Route::prefix('referral/sources')->group(function () {

    Route::get('/', 'ReferralSourceController@index')
        ->name('referral_sources_list');

    Route::post('/paginate', 'ReferralSourceController@datatable')
        ->name('datatables_referral_sources');

    Route::get('/create', 'ReferralSourceController@create')
        ->name('referral_sources_create');

    Route::post('/', 'ReferralSourceController@store')
        ->name('referral_sources_store');

    Route::get('/{referralSource}/edit', 'ReferralSourceController@edit')
        ->name('referral_sources_edit')
        ->where('referralSource', '[0-9]+');

    Route::patch('/{referralSource}/edit', 'ReferralSourceController@update')
        ->name('referral_sources_update')
        ->where('referralSource', '[0-9]+');

    Route::get('/{referralSource}', 'ReferralSourceController@destroy')
        ->name('referral_sources_delete')
        ->where('referralSource', '[0-9]+');
});


load_route('payment_settings');

load_route('website_admin');

});

