import React, { Component } from "react";
import TableRowButton from "./tableRowButton";

class TableRow extends Component {
    render() {
        const { id, employee_name, salary } = this.props.employee;
        const {
            getEmployeeDetails,
            currentEmployeeName,
            currentEmployeeSalary,
            deleteEmployee,
        } = this.props;
        return (
            <tr>
                <th scope="row">{id}</th>
                <td>{employee_name}</td>
                <td>
                    {salary.toLocaleString(undefined, {
                        maximumFractionDigits: 2,
                    })}
                </td>
                <td>
                    <TableRowButton
                        eachRowId={id}
                        getEmployeeDetails={getEmployeeDetails}
                        currentEmployeeName={currentEmployeeName}
                        currentEmployeeSalary={currentEmployeeSalary}
                        deleteEmployee={deleteEmployee}
                    />
                </td>
            </tr>
        );
    }
}

export default TableRow;
