<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;

class EmployeeController extends Controller
{
    public function employeeList()
    {
        $employee_list = Employee::all();

        return response()->json($employee_list);
    }
}
