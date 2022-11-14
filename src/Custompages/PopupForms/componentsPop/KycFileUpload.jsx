import React from 'react'

const KycFileUpload = (props) => {
    return (

        <div className="leave-item">
            <div className="leave-row">
                <div className="leave-left">
                    <div className="form-group">
                        <h4>{props.fileproof}</h4>
                        <p>{props.description}</p>
                        <Controller
                            name={props.name}
                            control={props.control}
                            render={({ field: { value, onChange } }) => (
                                <input className="form-control" type="file" value={value} onChange={onChange} />
                            )} />

                    </div>
                </div>
            </div>
        </div>

    )
}


export default KycFileUpload
