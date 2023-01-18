import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [],
        };
    }

    componentDidMount() {
        this.getEmployeesList();
    }

    getEmployeesList = () => {
        axios.get("/get/employee/list").then((response) => {
            this.setState({ employees: response.data });
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Dashboard</div>

                            <div className="card-body">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Employee name</th>
                                            <th scope="col">Salary</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.state.employees.map((employee, i) => (
                                             <TableRow key={i} data={employee}/>
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
