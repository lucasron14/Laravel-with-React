<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use Exception;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class EmployeeController extends Controller
{
    /**
     * Get employees list.
     */
    public function employeesList()
    {
        try
        {
            $employee_list = Employee::orderBy('id', 'Desc')->get();

            return response()->json($employee_list);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }

    /**
     * Get employee details.
     */
    public function employeeDetails(Request $request)
    {
        try
        {
            $employee = Employee::findOrFail($request->employeeID);

            return response()->json($employee);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }

    /**
     * updating employee
     */
    public function store(Request $request)
    {
        try
        {

            $validator = Validator::make($request->all(), [
                'employeeName' => 'required|max:191|min:3',
                'employeeSalary' => 'required'
            ]);

            if($validator->fails()) {
                return response()->json([
                    "status" => 400,
                    "validator_err" => $validator->messages(),
                ], 400);
            }
            else {
                $employee = Employee::create([
                    "employee_name" => $request->employeeName,
                    "salary" => $request->employeeSalary
                ]);

                return response()->json([
                    "status" => 200,
                    "employee" => $employee
                ], 200);
            }

        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }

    /**
     * updating employee
     */
    public function updateEmployee(Request $request)
    {
        try
        {
            $employee = Employee::where('id', $request->employeeId)->update([
                "employee_name" => $request->employeeName,
                "salary" => $request->employeeSalary
            ]);

            return response()->json($employee);
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }

    //Deleting employee data.
    public function destroy(Employee $employee)
    {
        try
        {
            $employee->delete();
        }
        catch(Exception $e)
        {
            Log::error($e);
        }
    }

}
