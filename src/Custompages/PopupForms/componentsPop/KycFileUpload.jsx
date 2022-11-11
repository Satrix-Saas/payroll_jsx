import React from 'react'

const KycFileUpload = (props) => {
    return (

        <div className="leave-item">
            <div className="leave-row">
                <div className="leave-left">
                    <div className="form-group">
                        <h4>{props.fileproof}</h4>
                        <p>{props.description}</p>

                        <input type="file" className="form-control" id={props.id} name={props.filename} />
                    </div>
                </div>
            </div>
        </div>

    )
}


export default KycFileUpload
