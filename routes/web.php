<?php

use App\Http\Controllers\EventsController;
use App\Http\Controllers\ProductsController;
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

Route::get('/', function () {
    return view('index');
});

Route::get('/posts', 'PostsController@posts');
Route::get('/posts/create', 'PostsController@create');
Route::get('/posts/first_or_create', 'PostsController@firstOrCreate');
Route::get('/posts/update', 'PostsController@update');
Route::get('/posts/update_or_create', 'PostsController@updateOrCreate');
Route::get('/posts/delete', 'PostsController@delete');
Route::get('/events', [EventsController::class, 'news']);
Route::get('/products', [ProductsController::class, 'products']);

