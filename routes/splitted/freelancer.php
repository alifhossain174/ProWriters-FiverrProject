<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Freelancer\BidController;
use App\Http\Controllers\Freelancer\TaskController;
use App\Http\Controllers\Freelancer\RatingController;
use App\Http\Controllers\Freelancer\AccountController;
use App\Http\Controllers\Freelancer\FindWorkController;
use App\Http\Controllers\Freelancer\DashboardController;
use App\Http\Controllers\Freelancer\BidRequestController;
use App\Http\Controllers\Freelancer\SubmitWorkController;
use App\Http\Controllers\Freelancer\PaymentRequestController;
use App\Http\Controllers\Freelancer\TaskAttachmentController;
use App\Http\Controllers\Freelancer\TaskDiscussionController;
use App\Http\Controllers\Freelancer\TaskInternalDiscussionController;

Route::get('/', function () {
    return redirect()->route('freelancer.dashboard');
});


Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
Route::post('dashboard/statistics', [DashboardController::class, 'statistics'])->name('dashboard.statistics');

Route::prefix('tasks/{task}')
    ->name('tasks.')
    ->controller(TaskController::class)
    ->group(function () {

        Route::get('content', 'content')->name('content');
        Route::patch('content', 'updateContent')->name('content.update');

        Route::post('start-working', 'startWorking')->name('start_working');
        Route::post('archive', 'archive')->name('archive');
        Route::post('unarchive', 'unarchive')->name('unarchive');

    });

Route::resource('tasks', TaskController::class)
    ->only(['index', 'show']);

Route::resource('tasks.discussions', TaskDiscussionController::class);
Route::resource('tasks.internal-discussions', TaskInternalDiscussionController::class);
Route::resource('tasks.attachments', TaskAttachmentController::class);

Route::resource('tasks.works', SubmitWorkController::class)
    ->only(['index', 'create', 'store']);


// Route::get('find-work', [TaskController::class,'findWork'])->name('find.work');

Route::prefix('find-work')->group(function () {

    Route::get('/', [FindWorkController::class, 'index'])
        ->name('find.work.index');

    Route::get('{task}', [FindWorkController::class, 'show'])
        ->name('find.work.show');

    Route::post('{task}/accept', [FindWorkController::class, 'accept'])
        ->name('find.work.accept');

});

Route::get('calendar', [TaskController::class, 'calendar'])->name('calendar');

Route::resource('bidRequests', BidRequestController::class)->only(['index', 'show']);

Route::resource('bidRequests.bids', BidController::class)->only(['create', 'store', 'destroy'])->shallow();

Route::post('paymentRequests/{paymentRequest}/archive', [PaymentRequestController::class, 'archive'])->name('paymentRequests.archive');
Route::post('paymentRequests/{paymentRequest}/unarchive', [PaymentRequestController::class, 'unarchive'])->name('paymentRequests.unarchive');
Route::resource('paymentRequests', PaymentRequestController::class)->except(['destroy']);

Route::get('ratings', [RatingController::class, 'index'])->name('ratings.index');

Route::prefix('account')
    ->name('account.')
    ->controller(AccountController::class)->group(function () {

    Route::get('profile', 'profile')->name('profile');

    Route::get('contact', 'edit')->name('edit');
    Route::patch('update', 'update')->name('update');

    Route::get('location', 'location')->name('location');
    Route::patch('location', 'updateLocation')->name('location.update');

    Route::get('bio', 'bio')->name('bio');
    Route::patch('bio', 'updateBio')->name('bio.update');

    Route::get('skill', 'skill')->name('skill');
    Route::patch('skill', 'updateSkill')->name('skill.update');

    Route::get('password', 'password')->name('password');
    Route::patch('password', 'updatePassword')->name('password.update');

    Route::get('avatar', 'avatar')->name('avatar');
    Route::patch('avatar', 'updateAvatar')->name('avatar.update');

    Route::get('payment', 'paymentSettings')->name('payment.settings');
    Route::patch('payment', 'updatePaymentSettings')->name('payment.settings.update');

    Route::get('language', 'language')->name('language');
    Route::patch('language', 'updateLanguage')->name('language.update');
});
