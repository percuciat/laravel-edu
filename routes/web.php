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

Route::get('/home', function () {
    return view('home');
})->name('home.index');
Route::get('/products', [ProductsController::class, 'index'])->name('product.index');
Route::get('/products/create', [ProductsController::class, 'create'])->name('product.create');
Route::post('/products', [ProductsController::class, 'store'])->name('product.store');
Route::get('/products/{product}', [ProductsController::class, 'show'])->name('product.show');
Route::get('/products/{product}/edit', [ProductsController::class, 'edit'])->name('product.edit');
Route::patch('/products/{product}', [ProductsController::class, 'update'])->name('product.update');
Route::delete('/products/{product}', [ProductsController::class, 'destroy'])->name('product.destroy');


Route::get('/posts', 'PostsController@index')->name('post.index');
Route::get('/posts/create', 'PostsController@create');
Route::get('/posts/first_or_create', 'PostsController@firstOrCreate');
Route::get('/posts/update', 'PostsController@update');
Route::get('/posts/update_or_create', 'PostsController@updateOrCreate');
Route::get('/posts/delete', 'PostsController@delete');
Route::get('/events', [EventsController::class, 'news']);


