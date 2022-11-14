import React, { useState } from 'react'
import EditcredPopupForm from './componentsPop/EditcredPopupForm'
import options from '../Option';
import { dropDownArray } from '../Dropdown/Dropdownutil';
import { Controller, useForm } from 'react-hook-form';


function EditCredentials() {
    const optionArrayState = dropDownArray(options, "State");

    const [inputValues, setInputValues] = useState({
        traces: "",
        traces_password:"",
        pf: "",
        pf_password:"",
        esic: "",
        esic_password:"",
        state1: "",
        username1: "",
        password1: "",
        add_info1: "",

        state2: "",
        username2: "",
        password2: "",
        add_info2: "",

        state3: "",
        username3: "",
        password3: "",
        add_info3: "",

        state4: "",
        username4: "",
        password4: "",
        add_info4: "",

        state5: "",
        username5: "",
        password5: "",
        add_info5: "",
    })
    const onSubmit = (data) => {
        console.log("data", data)

        var arr = [];
        arr['company_logo'] = data.company_logo;

    }

    const {
        handleSubmit,
        control,
    } = useForm()


    return (
        <>
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit Credentials</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <EditcredPopupForm username="traces" passwordname ="traces_password" control={control} label="TRACES" content="Your company's TRACES login is required to file TDS returns, corrections, and to download Form 16/16A data." username_label="Username" typeofusername="text" typeofpassword="password" password_label="Password" />

                            <EditcredPopupForm username="pf" passwordname="pf_password" control={control} label="PF" content="Your company's PF login is required to pay provident fund dues and file returns." username_label="Username" typeofusername="text" typeofpassword="password" password_label="Password" />

                            <EditcredPopupForm username="esic" passwordname="esic_password" control={control} label="ESIC" content="Your company's ESIC login is required to pay ESIC dues and file returns." username_label="Username" typeofusername="text" typeofpassword="password" password_label="Password" />
                            <div>
                                <label>PT</label>
                                <div className="note">
                                    <p>Your company's professional tax login (for your state's PT portal) is required to pay PT dues and file returns.</p>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="table-responsive">
                                            <table className="table table-borderless mb-0">
                                                <thead><tr>
                                                    <th>State </th>
                                                    <th>Username</th>
                                                    <th>Password</th>
                                                    <th>Additional Info (Optional)</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td> <div className="form-group">
                                                            <Controller
                                                                name="state1"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <select className="form-control form-select" value={value} onChange={onChange} >
                                                                        <option value="">--</option>
                                                                        {optionArrayState.map((e) => {
                                                                            return (
                                                                                <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                                                    {e.optionvalue}
                                                                                </option>
                                                                            );
                                                                        })}
                                                                    </select>
                                                                )} />
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <Controller
                                                                name="username1"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="text" value={value} onChange={onChange} />
                                                                )} />
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <Controller
                                                                name="password1"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="password" value={value} onChange={onChange} />
                                                                )} />
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <Controller
                                                                name="add_info1"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="text" value={value} onChange={onChange} />
                                                                )} />
                                                        </div></td>
                                                    </tr>
                                                    <tr>
                                                        <td> <div className="form-group">
                                                            <Controller
                                                                name="state2"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <select className="form-control form-select" value={value} onChange={onChange} >
                                                                        <option value="">--</option>
                                                                        {optionArrayState.map((e) => {
                                                                            return (
                                                                                <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                                                    {e.optionvalue}
                                                                                </option>
                                                                            );
                                                                        })}
                                                                    </select>
                                                                )} />
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <Controller
                                                                name="username2"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="text" value={value} onChange={onChange} />
                                                                )} />
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <Controller
                                                                name="password2"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="password" value={value} onChange={onChange} />
                                                                )} />
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <Controller
                                                                name="add_info2"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="text" value={value} onChange={onChange} />
                                                                )} />
                                                        </div></td>
                                                    </tr>
                                                    <tr>
                                                        <td> <div className="form-group">
                                                            <Controller
                                                                name="state3"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <select className="form-control form-select" value={value} onChange={onChange} >
                                                                        <option value="">--</option>
                                                                        {optionArrayState.map((e) => {
                                                                            return (
                                                                                <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                                                    {e.optionvalue}
                                                                                </option>
                                                                            );
                                                                        })}
                                                                    </select>
                                                                )} />
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <Controller
                                                                name="username3"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="text" value={value} onChange={onChange} />
                                                                )} />
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <Controller
                                                                name="password3"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="password" value={value} onChange={onChange} />
                                                                )} />
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <Controller
                                                                name="add_info3"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="text" value={value} onChange={onChange} />
                                                                )} />
                                                        </div></td>

                                                    </tr>
                                                    <tr>
                                                        <td> <div className="form-group">
                                                            <Controller
                                                                name="state4"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <select className="form-control form-select" value={value} onChange={onChange} >
                                                                        <option value="">--</option>
                                                                        {optionArrayState.map((e) => {
                                                                            return (
                                                                                <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                                                    {e.optionvalue}
                                                                                </option>
                                                                            );
                                                                        })}
                                                                    </select>
                                                                )} />
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <Controller
                                                                name="username4"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="text" value={value} onChange={onChange} />
                                                                )} />

                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <Controller
                                                                name="password4"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="password" value={value} onChange={onChange} />
                                                                )} />

                                                        </div></td>

                                                        <td><div className="form-group">
                                                            <Controller
                                                                name="add_info4"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="text" value={value} onChange={onChange} />
                                                                )} />

                                                        </div></td>
                                                    </tr>
                                                    <tr>
                                                        <td> <div className="form-group">
                                                            <Controller
                                                                name="state5"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <select className="form-control form-select" value={value} onChange={onChange} >
                                                                        <option value="">--</option>
                                                                        {optionArrayState.map((e) => {
                                                                            return (
                                                                                <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                                                    {e.optionvalue}
                                                                                </option>
                                                                            );
                                                                        })}
                                                                    </select>
                                                                )} />
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <Controller
                                                                name="username5"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="text" value={value} onChange={onChange} />
                                                                )} />
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <Controller
                                                                name="password5"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="password" value={value} onChange={onChange} />
                                                                )} />
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <Controller
                                                                name="add_info5"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="text" value={value} onChange={onChange} />
                                                                )} />
                                                        </div></td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="submit-section">
                                    <button className="btn btn-primary submit-btn">Submit</button>
                                </div>
                        </form>
                    </div>
                </div>
            </div >

        </>
    )
}

export default EditCredentials
