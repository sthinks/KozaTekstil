<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SustainabilityController;
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
Route::get("/contact", [ContactController::class, "index"]);
Route::post("/contact", [ContactController::class, "add"]);


//
Route::get("/getall-susta", [SustainabilityController::class, "getall"]);
Route::get("/getall-product", [ProductController::class, "getall"]);


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
