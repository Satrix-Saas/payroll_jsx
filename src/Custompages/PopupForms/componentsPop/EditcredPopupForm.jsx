import React from 'react'
import { Controller } from 'react-hook-form'


function EditcredPopupForm(props) {
    return (
        <>
            <label>{props.label}</label>

            <div className="note">
                <p>{props.content}</p>
            </div>

            <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <label className="col-form-label">{props.username_label}</label>
                        <Controller
                            name={props.username}
                            control={props.control}
                            render={({ field: { value, onChange } }) => (
                                <input className="form-control" type={props.typeofusername} value={value} onChange={onChange} />
                            )} />
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label className="col-form-label">{props.password_label}</label>
                        <Controller
                            name={props.passwordname}
                            control={props.control}
                            render={({ field: { value, onChange } }) => (
                                <input className="form-control" type={props.typeofpassword} value={value} onChange={onChange} />
                            )} />

                    </div>
                </div>
            </div>
        </>
    )
}

export default EditcredPopupForm
