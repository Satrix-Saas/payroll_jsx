import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form';
import { dropDownArray } from '../../Dropdown/Dropdownutil';
import options from '../../Option';
import KycFileUpload from './KycFileUpload';

function EditKycStatus() {
    const optionArrayOrgType = dropDownArray(options, "Org_Type");

    const toggleFileupload = (value) => {
        console.log(value);

    }
    const [inputValues, setInputValues] = useState({
        customer: "",
        org_type: "",
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
                        <h5 className="modal-title">Initiate KYC verification</h5>
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h5>XPayroll requires you to complete the KYC verification for us to process payments on your behalf. Update the KYC details given below.</h5>

                            <div className="leave-item">
                                <p className='mb-0 !important'>Are you a Razorpay customer (apart from XPayroll)?</p>
                                <div className="leave-inline-form">
                                    <Controller
                                        name={'customer'}
                                        control={control}
                                        render={({ field: { value, onChange } }) => (
                                            <>
                                                <div className=" form-group form-check form-check-inline">
                                                    <label htmlFor="valid_customer">
                                                        <input type="radio" name="customer" value={`valid_customer`} className="form-check-input" onChange={onChange} />
                                                        YES
                                                    </label>
                                                </div>
                                                <div className=" form-group form-check form-check-inline">
                                                    <label htmlFor="invalid_customer">
                                                        <input type="radio" name="customer" value={`invalid_customer`} className="form-check-input" onChange={onChange} />
                                                        NO
                                                    </label>
                                                </div>
                                            </>
                                        )} />
                                </div>
                            </div>

                            <h5>Select the type of your organization and upload the required documents.
                                Important! In case of any modifications to the organization, XPayroll requires you to request for another KYC verification. </h5>


                            <label>Type of Organization?</label>
                            <Controller
                                name="org_type"
                                control={control}
                                render={({ field: { value, onChange } }) => (
                                    <select className="form-control form-select" value={value} onChange={onChange} >
                                        <option value="">--select--</option>
                                        {optionArrayOrgType.map((e) => {
                                            return (
                                                <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                    {e.optionvalue}
                                                </option>
                                            );
                                        })}
                                    </select>
                                )} />
                            <p>You can select multiple files to upload simultaneously.</p>



                            <div className="submit-section">
                                <button className="btn btn-primary submit-btn">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditKycStatus
