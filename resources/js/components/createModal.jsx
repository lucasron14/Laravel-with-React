import React, { Component } from "react";

class CreateModal extends Component {
    render() {
        const {imputOnChange, createEmployee, errorList} = this.props;
        return (
            <div
                className="modal fade"
                id="createModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Craate New Employee
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form className="form" id="create-form">
                                <div className="form-group mb-3">
                                    <label
                                        for="employeeName"
                                        className="form-label"
                                    >
                                        Name:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="employeeName"
                                        name="employeeName"
                                        placeholder="Enter Employee name"
                                        onChange={imputOnChange}
                                    />
                                    <span className="text-danger mt-3">{errorList.employeeName}</span>
                                </div>
                                <div className="form-group mb-3">
                                    <label
                                        for="employeeSalary"
                                        className="form-label"
                                    >
                                        Salary:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="employeeSalary"
                                        name="employeeSalary"
                                        placeholder="Enter Employee salary"
                                        onChange={imputOnChange}
                                    />
                                    <span className="text-danger mt-3">{errorList.employeeSalary}</span>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <input
                                type="submit"
                                className="btn btn-info col-5"
                                value="Create"
                                id="createButton"
                                onClick={createEmployee}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateModal;
