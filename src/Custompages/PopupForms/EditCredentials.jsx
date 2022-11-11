import React from 'react'
import EditcredPopupForm from './componentsPop/EditcredPopupForm'
import options from '../Option';
import { dropDownArray } from '../Dropdown/Dropdownutil';


function EditCredentials() {
    const optionArrayState = dropDownArray(options, "State");
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
                        <form>

                            <EditcredPopupForm label="TRACES" content="Your company's TRACES login is required to file TDS returns, corrections, and to download Form 16/16A data." username="Username" typeofusername="text" typeofpassword="password" password="Password" />
                            <EditcredPopupForm label="PF" content="Your company's PF login is required to pay provident fund dues and file returns." username="Username" typeofusername="text" typeofpassword="password" password="Password" />
                            <EditcredPopupForm label="ESIC" content="Your company's ESIC login is required to pay ESIC dues and file returns." username="Username" typeofusername="text" typeofpassword="password" password="Password" />
                            <div>
                                <label>PT</label>
                                <div className="note">
                                    <p>Your company's professional tax login (for your state's PT portal) is required to pay PT dues and file returns.</p>
                                </div>

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="table-responsive">
                                            <table className="table mb-0">
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
                                                            <select className='form-control form-select'>
                                                                <option value="">--</option>
                                                                {optionArrayState.map((e) => {
                                                                    return (
                                                                        <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                                            {e.optionvalue}
                                                                        </option>
                                                                    );
                                                                })}
                                                            </select>
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <input className="form-control" type="text" name="username1" id="username1" />
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <input className="form-control" type="password" name="password1" id="password1" />
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <input className="form-control" type="text" name="add_info1" id="add_info1" />
                                                        </div></td>
                                                    </tr>
                                                    <tr>
                                                        <td> <div className="form-group">
                                                            <select className='form-control form-select'>
                                                                <option value="">--</option>
                                                                {optionArrayState.map((e) => {
                                                                    return (
                                                                        <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                                            {e.optionvalue}
                                                                        </option>
                                                                    );
                                                                })}
                                                            </select>
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <input className="form-control" type="text" name="username2" id="username2" />
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <input className="form-control" type="password" name="password2" id="password2" />
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <input className="form-control" type="text" name="add_info2" id="add_info2" />
                                                        </div></td>
                                                    </tr>
                                                    <tr>
                                                        <td> <div className="form-group">
                                                            <select className='form-control form-select'>
                                                                <option value="">--</option>
                                                                {optionArrayState.map((e) => {
                                                                    return (
                                                                        <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                                            {e.optionvalue}
                                                                        </option>
                                                                    );
                                                                })}
                                                            </select>
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <input className="form-control" type="text" name="username3" id="username3" />
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <input className="form-control" type="password" name="password3" id="password3" />
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <input className="form-control" type="text" name="add_info3" id="add_info3" />
                                                        </div></td>

                                                    </tr>
                                                    <tr>
                                                        <td> <div className="form-group">
                                                            <select className='form-control form-select'>
                                                                <option value="">--</option>
                                                                {optionArrayState.map((e) => {
                                                                    return (
                                                                        <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                                            {e.optionvalue}
                                                                        </option>
                                                                    );
                                                                })}
                                                            </select>
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <input className="form-control" type="text" name="username4" id="username4" />
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <input className="form-control" type="password" name="password4" id="password4" />
                                                        </div></td>

                                                        <td><div className="form-group">
                                                            <input className="form-control" type="text" name="add_info4" id="add_info4" />
                                                        </div></td>
                                                    </tr>
                                                    <tr>
                                                        <td> <div className="form-group">
                                                            <select className='form-control form-select'>
                                                                <option value="">--</option>
                                                                {optionArrayState.map((e) => {
                                                                    return (
                                                                        <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                                            {e.optionvalue}
                                                                        </option>
                                                                    );
                                                                })}
                                                            </select>
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <input className="form-control" type="text" name="username5" id="username5" />
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <input className="form-control" type="password" name="password5" id="password5" />
                                                        </div></td>
                                                        <td><div className="form-group">
                                                            <input className="form-control" type="text" name="add_info5" id="add_info5" />
                                                        </div></td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EditCredentials
