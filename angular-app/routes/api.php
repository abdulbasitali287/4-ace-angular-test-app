<?php

use App\Http\Controllers\EmployeeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('index',[EmployeeController::class,'index']);
Route::post('store',[EmployeeController::class,'store']);
Route::get('edit/{employee}',[EmployeeController::class,'edit']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
