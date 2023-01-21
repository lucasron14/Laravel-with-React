import axios from "axios";
import React, { Component } from "react";
import ViewModal from "./viewModal";
import UpdateModal from "./updateModal";
import DeleteModal from "./deleteModal";

class TableRowButton extends Component {
    render() {
        const {
            eachRowId,
            currentEmployeeName,
            currentEmployeeSalary,
            getEmployeeDetails,
            deleteEmployee,
        } = this.props;

        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target={"#viewModal" + eachRowId}
                    onClick={() => getEmployeeDetails(eachRowId)}
                >
                    View
                </button>
                {/* view modal */}
                <ViewModal
                    modalId={eachRowId}
                    name={currentEmployeeName}
                    salary={currentEmployeeSalary}
                />

                <button
                    type="button"
                    className="btn btn-info"
                    data-bs-toggle="modal"
                    data-bs-target={"#updateModal" + eachRowId}
                    onClick={() => getEmployeeDetails(eachRowId)}
                >
                    Edit
                </button>
                {/* update modal */}
                <UpdateModal
                    modalId={eachRowId}
                    currentEmployeeName={currentEmployeeName}
                    currentEmployeeSalary={currentEmployeeSalary}
                />

                <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target={"#deleteModal" + eachRowId}
                >
                    Delete
                </button>
                {/* delete modal */}
                <DeleteModal
                    modalId={eachRowId}
                    deleteEmployee={deleteEmployee}
                />
            </div>
        );
    }
}

export default TableRowButton;
