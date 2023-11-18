<?php

use App\Http\Controllers\Customer\AccountController;
use App\Http\Controllers\Customer\BidRequestController;
use App\Http\Controllers\Customer\DashboardController;
use App\Http\Controllers\Customer\InvoiceController;
use App\Http\Controllers\Customer\PaymentController;
use App\Http\Controllers\Customer\ProjectController;
use App\Http\Controllers\Customer\RatingController;
use App\Http\Controllers\Customer\SubmittedWorkController;
use App\Http\Controllers\Customer\TaskAttachmentController;
use App\Http\Controllers\Customer\TaskController;
use App\Http\Controllers\Customer\TaskDiscussionController;
use App\Http\Controllers\Customer\TransactionController;
use Illuminate\Support\Facades\Route;

Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');
Route::post('dashboard', [DashboardController::class, 'statistics'])->name('dashboard.statistics');
Route::get('notifications', [DashboardController::class, 'notifications'])->name('notifications.index');

Route::prefix('tasks/{task}')
    ->name('tasks.')
    ->controller(SubmittedWorkController::class)->group(function () {

    Route::get('content', 'index')
        ->name('content');

    Route::post('content/comment', 'storeContentComment')
        ->name('content.comment');

    Route::post('content/accept', 'accept')
        ->name('content.accept');

    Route::get('revisions/create', 'createRequestForRevision')
        ->name('revisions.create');

    Route::post('revisions/create', 'storeRequestForRevision')
        ->name('revisions.store');

});

Route::prefix('tasks/{task}')
    ->name('tasks.')
    ->controller(TaskController::class)->group(function () {

    Route::get('financial', 'financial')
        ->name('financial');

    Route::get('extend-deadline', 'extendDeadline')
        ->name('extend.deadline');

    Route::post('extend-deadline', 'storeExtendedDeadline')
        ->name('post.extend.deadline');

    Route::post('archive', 'archive')
        ->name('archive');

    Route::post('unarchive', 'unarchive')
        ->name('unarchive');

});

Route::prefix('bidRequests/{bidRequest}')
    ->name('bidRequests.')
    ->controller(BidRequestController::class)->group(function () {

    Route::post('accept/{bid}', 'acceptBid')
        ->name('accept');

    Route::get('brief', 'brief')
        ->name('brief');

    Route::get('author/{user}', 'authorProfile')
        ->name('author');

});
Route::resource('bidRequests', BidRequestController::class);

Route::post('tasks/payLater', [TaskController::class, 'payLater'])->name('tasks.payLater');

Route::resource('tasks', TaskController::class)->only(['index', 'show', 'destroy']);
Route::resource('tasks.discussions', TaskDiscussionController::class);
Route::resource('tasks.attachments', TaskAttachmentController::class);

Route::resource('tasks.ratings', RatingController::class)
    ->only(['create', 'store']);

Route::get('invoices/{invoice}/pay', [InvoiceController::class, 'makePayment'])
    ->name('invoices.pay');

Route::resource('invoices', InvoiceController::class)->only(['index', 'show']);

// Route::resource('projects', ProjectController::class);

Route::get('payments/{payment}/download', [PaymentController::class, 'download'])
    ->name('payments.download');

Route::get('payments/pendingApprovals', [PaymentController::class, 'pendingApprovals'])
    ->name('payments.pendingApprovals');

Route::resource('payments', PaymentController::class)->only(['index', 'show']);

Route::prefix('transactions')->group(function () {

    Route::get('/', [TransactionController::class, 'index'])
        ->name('transactions.index');

    Route::get('funds/create', [TransactionController::class, 'createFund'])
        ->name('transactions.funds.create');

    Route::post('funds/create', [TransactionController::class, 'storeFund'])
        ->name('transactions.funds.store');
});

Route::prefix('account')
    ->controller(AccountController::class)->group(function () {

    Route::get('general', 'edit')->name('account.edit');
    Route::patch('general', 'update')->name('account.update');

    Route::get('location', 'location')->name('account.location');
    Route::patch('location', 'updateLocation')->name('account.location.update');

    Route::get('password', 'password')->name('account.password');
    Route::patch('password', 'updatePassword')->name('account.password.update');

    Route::get('avatar', 'avatar')->name('account.avatar');
    Route::patch('avatar', 'updateAvatar')->name('account.avatar.update');

    Route::get('language', 'language')->name('account.language');
    Route::patch('language', 'updateLanguage')->name('account.language.update');
});
