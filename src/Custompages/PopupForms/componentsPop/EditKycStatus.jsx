import React, { useState } from 'react'
import { dropDownArray } from '../../Dropdown/Dropdownutil';
import options from '../../Option';

function EditKycStatus() {
    const optionArrayState = dropDownArray(options, "State");

    const [isInput, setIsInput] = useState("");

    const toggleFileupload = (value) => {
        console.log(value);
        setIsInput(value);

    }
    return (
        <>
            <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Initiate KYC verification</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h5>XPayroll requires you to complete the KYC verification for us to process payments on your behalf. Update the KYC details given below.</h5>

                        <div className="leave-item">
                            <p className='mb-0 !important'>Are you a Razorpay customer (apart from XPayroll)?</p>
                            <div className="leave-inline-form">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="customer" id="valid_customer" value="valid_customer" />
                                    <label className="form-check-label" htmlFor="valid_customer">YES</label>
                                </div>
                                <div className=" form-check-inline">
                                    <input className="form-check-input" type="radio" name="customer" id="invalid_customer" value="invalid_customer" />
                                    <label className="form-check-label" htmlFor="invalid_customer">NO</label>
                                </div>
                            </div>
                        </div>

                        <h5>Select the type of your organization and upload the required documents.
                            Important! In case of any modifications to the organization, XPayroll requires you to request for another KYC verification. </h5>


                        <label>Type of Organization?</label>
                        <select className="select" id="org_type" name="org_type" >
                            <option value="select" >--select--</option>
                            {optionArrayState.map((e) => {
                                return (
                                    <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                        {e.optionvalue}
                                    </option>
                                );
                            })}
                        </select>

                        <p>You can select multiple files to upload simultaneously.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditKycStatus
