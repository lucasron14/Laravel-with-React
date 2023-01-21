import React, { Component } from "react";
import TableRow from "./TableRow";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateModal from "./createModal";

class Table extends Component {
    render() {
        const employees = this.props.employees;
        const {
            getEmployeeDetails,
            currentEmployeeName,
            currentEmployeeSalary,
            deleteEmployee,
            imputOnChange,
            createEmployee,
            errorList,
            modal
        } = this.props;

        return (
            <div className="container">
                <ToastContainer />
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Employee List</div>
                            <div className="card-body">
                                <button
                                    className="btn btn-primary offset-md-9 col-3 mb-4"
                                    data-bs-toggle="modal"
                                    onClick={() => modal('createModal')}
                                >
                                    Add Employee
                                </button>
                                {/* Create modal */}
                                <CreateModal
                                    imputOnChange={imputOnChange}
                                    createEmployee={createEmployee}
                                    errorList={errorList}
                                />
                                <table className="table table-hover table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col" width="70px">
                                                #
                                            </th>
                                            <th scope="col" width="270px">
                                                Employee name
                                            </th>
                                            <th scope="col" width="200px">
                                                Salary (Tsh)
                                            </th>
                                            <th scope="col" width="100px">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {employees.map((employee, i) => (
                                            <TableRow
                                                key={i}
                                                employee={employee}
                                                getEmployeeDetails={
                                                    getEmployeeDetails
                                                }
                                                currentEmployeeName={
                                                    currentEmployeeName
                                                }
                                                currentEmployeeSalary={
                                                    currentEmployeeSalary
                                                }
                                                deleteEmployee={deleteEmployee}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Table;
