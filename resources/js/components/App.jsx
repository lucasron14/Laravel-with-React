import React, { Component } from "react";
import Table from "./Table";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Modal } from "bootstrap";

class App extends Component {
    //constructor
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            employeeName: "",
            employeeSalary: "",
            currentEmployeeName: null,
            currentEmployeeSalary: null,
            err_list: [],
        };
    }

    //Get employees list when App mounted.
    componentDidMount() {
        axios.get("/get/employees/list").then((response) => {
            this.setState({ employees: response.data });
        });
    }

    //Update the state if something change.
    componentDidUpdate(prevState) {
        if (prevState.employees !== this.state.employees) {
            axios.get("/get/employees/list").then((response) => {
                this.setState({ employees: response.data });
            });
        }
    }

    //Get details of specific employee
    getEmployeeDetails = (id) => {
        axios
            .post("/get/employee/details", {
                employeeID: id,
            })
            .then((response) => {
                this.setState({
                    currentEmployeeName: response.data.employee_name,
                    currentEmployeeSalary: response.data.salary,
                });
            });
    };

    //Deleting specific employee.
    handleDeleteEmployee = (id) => {
        axios.delete("/delete/employee/data/" + id).then(() => {
            toast.error("Employee deleted successfully");
        });
    };

    //Handling inputs for creating employee.
    handleInputCreate = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    //Handle show modal.
    handleShowModal = (id) => {
        const myModal = document.getElementById(id);
        const modal = new Modal(myModal, { backdrop: true });
        modal.show();
    }

    // Creating new employee.
    handleCreateEmployee = async () => {
        const createForm = document.getElementById("create-form");
        const createModal = document.getElementById('createModal');
        const modal = Modal.getInstance(createModal, {});
        await axios
            .post("/create/new/employee", {
                employeeName: this.state.employeeName,
                employeeSalary: this.state.employeeSalary,
            })
            .then(() => {
                toast.success("Employee created successfully");
                modal.hide();
                createForm.reset();
                this.setState({
                    employeeName: "",
                    employeeSalary: "",
                    err_list: [],
                });
            })
            .catch((err) => {
                // console.log(err.response.data.validator_err);
                this.setState({
                    err_list: err.response.data.validator_err,
                })
            });
    };

    render() {
        const { employees, currentEmployeeName, currentEmployeeSalary, err_list } =
            this.state;
        return (
            <Table
                employees={employees}
                getEmployeeDetails={this.getEmployeeDetails}
                currentEmployeeName={currentEmployeeName}
                currentEmployeeSalary={currentEmployeeSalary}
                deleteEmployee={this.handleDeleteEmployee}
                imputOnChange={this.handleInputCreate}
                createEmployee={this.handleCreateEmployee}
                errorList={err_list}
                modal={this.handleShowModal}
            />
        );
    }
}

export default App;
