<?php

namespace App\Providers;

use App\Models\CustomerProfile;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use Laravel\Cashier\Cashier;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        Cashier::ignoreMigrations();
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

        Paginator::useBootstrap();

        Cashier::useCustomerModel(CustomerProfile::class);

        Schema::defaultStringLength(191);

        if (env('ENABLE_HTTPS') == TRUE) {
            \URL::forceScheme('https');
        }

        $mainPath    = database_path('migrations');
        $directories = glob($mainPath . '/*', GLOB_ONLYDIR);
        $paths       = array_merge([$mainPath], $directories);

        $this->loadMigrationsFrom($paths);

    }

}
