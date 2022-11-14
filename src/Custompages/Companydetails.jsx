import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Header from '../initialpage/Sidebar/header';
import Sidebar from '../initialpage/Sidebar/sidebar';
import EditKycStatus from './PopupForms/componentsPop/EditKycStatus';
import EditCredentials from './PopupForms/EditCredentials';

const Companydetails = () => {

    const [menu, setMenu] = useState(false)

    const toggleMobileMenu = () => {
        setMenu(!menu)
    }


    const [inputValues, setInputValues] = useState({
        company_logo: "",
        pan: "",
        tan: "",
        gstin: "",
        kyc: "",
        pf_status: "",
        esic_status: "",
        pt_status: "",
        lwf_status: "",
        traces: "",
        pf: "",
        esic: "",
        pt: "",
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
            <div className={`main-wrapper ${menu ? 'slide-nav' : ''}`}>
                <Header onMenuClick={(value) => toggleMobileMenu()} />
                <Sidebar />
                <div className="page-wrapper">
                    <Helmet>
                        <title>Company Details - HRMS Admin Template</title>
                        <meta name="description" content="Login page" />
                    </Helmet>
                    {/* Page Content */}
                    <div className="content container-fluid">
                        {/* Page Header */}
                        <div className="page-header">
                            <div className="col">
                                <h3 className="page-title">Company Details</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                                    <li className="breadcrumb-item active">Company Details</li>
                                </ul>
                            </div>
                        </div>
                        {/* /Page Header */}

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">

                                <div className="col-md-12">
                                    {/* Upload Logo */}
                                    <div className="card leave-box">
                                        <div className="card-body">
                                            <div className="h3 card-title">Company Logo</div>
                                            <div className="leave-item">

                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>Company Logo</label>
                                                            <Controller
                                                                name="company_logo"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="file" value={value} onChange={onChange} />
                                                                )} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Upload Logo */}
                                    {/* Tax Setup */}
                                    <div className="card leave-box">
                                        <div className="card-body">
                                            <div className="h3 card-title">Tax Setup</div>
                                            <div className="leave-item">

                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>PAN</label>
                                                            <Controller
                                                                name="pan"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="text" value={value} onChange={onChange} placeholder="--NA--" />
                                                                )} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>TAN</label>
                                                            <Controller
                                                                name="tan"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="text" value={value} onChange={onChange} placeholder="--NA--" />
                                                                )} />

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>GSTIN</label>
                                                            <Controller
                                                                name="gstin"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="text" value={value} onChange={onChange} placeholder="--NA--" />
                                                                )} />

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    {/* /Tax Setup */}
                                    {/* Kyc status */}
                                    <div className="card leave-box">
                                        <div className="card-body">
                                            <div className="leave-header">
                                                <div className="h3 card-title">KYC</div>
                                                <div className="leave-action">
                                                    <button className="btn btn-sm btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#edit_kycstatus"><i className="fa fa-pencil"></i> Edit</button>
                                                </div>
                                            </div>
                                            <div className="leave-item">
                                                <div className="leave-left">
                                                    <div className="form-group">
                                                        <label>KYC Status</label>
                                                        <Controller
                                                            name="kyc"
                                                            control={control}
                                                            render={({ field: { value, onChange } }) => (
                                                                <input className="form-control" type="text" value={value} onChange={onChange} placeholder="Verification not initiated" />
                                                            )} />

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /Kyc status */}
                                    {/* pf esic etc status */}
                                    <div className="card leave-box" id="pf_status">
                                        <div className="card-body">
                                            <div className="h3 card-title">Provident Fund / ESIC / Professional Tax / LWF</div>
                                            <div className="leave-item">
                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <label>PF Status</label>
                                                        <div className="leave-inline-form">

                                                            <Controller
                                                                name={'pf_status'}
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <>
                                                                        <div className=" form-group form-check form-check-inline">
                                                                            <label htmlFor="enabled_pf">
                                                                                <input type="radio" name="pf_status" value={`enabled_pf`} className="form-check-input" onChange={onChange} />
                                                                                Enabled
                                                                            </label>
                                                                        </div>
                                                                        <div className=" form-group form-check form-check-inline">
                                                                            <label htmlFor="disabled_pf">
                                                                                <input type="radio" name="pf_status" value={`disabled_pf`} className="form-check-input" onChange={onChange} />
                                                                                Disabled
                                                                            </label>
                                                                        </div>
                                                                    </>
                                                                )} />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <label>ESIC Status</label>
                                                        <div className="leave-inline-form">
                                                            <Controller
                                                                name={'esic_status'}
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <>
                                                                        <div className=" form-group form-check form-check-inline">
                                                                            <label htmlFor="enabled_esic">
                                                                                <input type="radio" name="esic_status" value={`enabled_esic`} className="form-check-input" onChange={onChange} />
                                                                                Enabled
                                                                            </label>
                                                                        </div>
                                                                        <div className=" form-group form-check form-check-inline">
                                                                            <label htmlFor="disabled_esic">
                                                                                <input type="radio" name="esic_status" value={`disabled_esic`} className="form-check-input" onChange={onChange} />
                                                                                Disabled
                                                                            </label>
                                                                        </div>
                                                                    </>
                                                                )} />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <label>PT Status</label>
                                                        <div className="leave-inline-form">

                                                            <Controller
                                                                name={'pt_status'}
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <>
                                                                        <div className=" form-group form-check form-check-inline">
                                                                            <label htmlFor="enabled_pt">
                                                                                <input type="radio" name="pt_status" value={`enabled_pt`} className="form-check-input" onChange={onChange} />
                                                                                Enabled
                                                                            </label>
                                                                        </div>
                                                                        <div className=" form-group form-check form-check-inline">
                                                                            <label htmlFor="disabled_pt">
                                                                                <input type="radio" name="pt_status" value={`disabled_pt`} className="form-check-input" onChange={onChange} />
                                                                                Disabled
                                                                            </label>
                                                                        </div>
                                                                    </>
                                                                )} />

                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <label>LWF Status</label>
                                                        <div className="leave-inline-form">
                                                            <Controller
                                                                name={'lwf_status'}
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <>
                                                                        <div className=" form-group form-check form-check-inline">
                                                                            <label htmlFor="enabled_lwf">
                                                                                <input type="radio" name="lwf_status" value={`enabled_lwf`} className="form-check-input" onChange={onChange} />
                                                                                Enabled
                                                                            </label>
                                                                        </div>
                                                                        <div className=" form-group form-check form-check-inline">
                                                                            <label htmlFor="disabled_lwf">
                                                                                <input type="radio" name="lwf_status" value={`disabled_lwf`} className="form-check-input" onChange={onChange} />
                                                                                Disabled
                                                                            </label>
                                                                        </div>
                                                                    </>
                                                                )} />

                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    {/* /pf esic etc status */}
                                    {/* credentials */}
                                    <div className="card leave-box">
                                        <div className="card-body">
                                            <div className="leave-header">
                                                <div className="h3 card-title">External Credentials</div>
                                                <div className="leave-action">
                                                    <button className="btn btn-sm btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#editcred"><i className="fa fa-pencil"></i> Edit</button>
                                                </div>
                                            </div>
                                            <div className="leave-item">
                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>TRACES</label>
                                                            <Controller
                                                                name="traces"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="text" value={value} onChange={onChange} placeholder="Not Set" />
                                                                )} />

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>PF</label>
                                                            <Controller
                                                                name="pf"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="text" value={value} onChange={onChange} placeholder="Not Set" />
                                                                )} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>ESIC</label>
                                                            <Controller
                                                                name="esic"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="text" value={value} onChange={onChange} placeholder="Not Set" />
                                                                )} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>PT</label>
                                                            <Controller
                                                                name="pt"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="text" value={value} onChange={onChange} placeholder="Not Set" />
                                                                )} />
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    {/* /credentials */}
                                </div>

                                <div className="submit-section">
                                    <button className="btn btn-primary submit-btn">Submit</button>
                                </div>

                            </div>

                        </form>


                    </div>
                    <div id="editcred" className="modal custom-modal fade" role="dialog">
                        <EditCredentials />
                    </div>
                    <div id="edit_kycstatus" className="modal custom-modal fade" role="dialog">
                        <EditKycStatus />
                    </div>
                </div>
            </div >


        </>
    )
}

export default Companydetails
