import axios from "axios";
import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class UpdateModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeName: props.currentEmployeeName,
            employeeSalary: props.currentEmployeeSalary,
        };
    }

    componentDidUpdate(prevProps) {
        if (
            prevProps.currentEmployeeName !== this.props.currentEmployeeName ||
            prevProps.currentEmployeeSalary !== this.props.currentEmployeeSalary
        ) {
            this.setState({
                employeeName: this.props.currentEmployeeName,
                employeeSalary: this.props.currentEmployeeSalary,
            });
        }
    }

    //Handle inputs.
    handleInputs = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    //Updating employee data.
    updateEmployeeData = () => {
        axios
            .post("/update/employee/data", {
                employeeId: this.props.modalId,
                employeeName: this.state.employeeName,
                employeeSalary: this.state.employeeSalary,
            })
            .then(() => {
                toast.success("Employee updated successfully!");
            });
    };

    render() {
        const { modalId } = this.props;
        const { employeeName, employeeSalary } = this.state;
        return (
            <div
                className="modal fade"
                id={"updateModal" + modalId}
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Update employee Details
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form className="form">
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
                                        value={employeeName}
                                        onChange={this.handleInputs}
                                    />
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
                                        value={employeeSalary}
                                        onChange={this.handleInputs}
                                    />
                                </div>
                            </form>
                        </div>
                        <div
                            className="modal-footer"
                            style={{ paddingRight: 165 }}
                        >
                            <input
                                type="submit"
                                className="btn btn-info px-5"
                                value="Update"
                                data-bs-dismiss="modal"
                                onClick={this.updateEmployeeData}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdateModal;
