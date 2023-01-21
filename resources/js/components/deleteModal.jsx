import React, { Component } from "react";

class DeleteModal extends Component {
    render() {
        const { modalId, deleteEmployee } = this.props;
        return (
            <div
                className="modal fade"
                id={"deleteModal" + modalId}
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Delete Employee
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            Are you sure you want to delete this employee data?
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                                onClick={() => deleteEmployee(modalId)}
                            >
                                Yes
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DeleteModal;
