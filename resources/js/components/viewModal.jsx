import React, { Component } from "react";

class ViewModal extends Component {

    render() {
        const { modalId, name, salary } = this.props;
        return (
            <div
                className="modal fade"
                id={"viewModal" + modalId}
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Employee Details
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            Employee name: <strong style={{fontSize: 16}}>{ name }</strong>
                            <hr/>
                            Salary: <strong>{ salary !== null? salary.toLocaleString(undefined, {maximumFractionDigits:2}) : "" } Tsh</strong>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewModal;
