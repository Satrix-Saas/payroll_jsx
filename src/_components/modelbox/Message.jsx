
import React from 'react';

const Message = (props) => {


    return (
        <>
            {/* Response Message */}
            <div id="form" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h3>{props.response}</h3>
                            <div className="submit-section">
                                <button data-bs-dismiss="modal" className="btn btn-primary cancel-btn">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Response Message */}
        </>
    )
}

export default Message