<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ComputerController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

/* Get all computers */
Route::get('/computers', [ComputerController::class, 'index']);

/* Get one computers */
Route::get('/computers/{id}', [ComputerController::class, 'getOne']);

/* Create computer */
Route::post('/computers', [ComputerController::class, 'store']);

/* Update computer */
Route::put('/computers/{id}', [ComputerController::class, 'update']);

/* Delete computer */
Route::delete('/computers/{id}', [ComputerController::class, 'destroy']);

/* Update Status computer */
Route::patch('/computers/{id}', [ComputerController::class, 'updateStatus']);

