<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Http\Requests\ContactUpdateRequest;
use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function index(){
        $employees = Employee::orderBy('id','desc')->get()->take(10);
        return response()->json(['employees' => $employees]);
    }

    public function store(ContactRequest $request){
        Employee::create([
            'name' => $request->name,
            'email' => $request->email,
            'number' => $request->number,
        ]);
        return response()->json(['success' => 420]);
    }

    public function edit(Employee $employee){
        return response()->json(['employee' => $employee]);
    }

    public function update(ContactUpdateRequest $request,Employee $employee){
        $employee->update([
            'name' => $request->name,
            'email' => $request->email,
            'number' => $request->number,
        ]);
        return response()->json(['success' => 420]);
    }
}
