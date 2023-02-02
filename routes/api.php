<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SustainabilityController;
use App\Http\Controllers\HomeSliderController;
use App\Http\Controllers\ComingFairsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//Contact
Route::get('/contact', [ContactController::class, 'index']);
Route::post('/contact', [ContactController::class, 'add']);

//
Route::get('/getall-susta', [SustainabilityController::class, 'getall']);
Route::get('/getall-product', [ProductController::class, 'getall']);

//Home slider
Route::get('/get-slider', [HomeSliderController::class, 'getSlider']);

//Upcoming fairs
Route::get('/upcoming-fairs', [ComingFairsController::class, 'index']);
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
