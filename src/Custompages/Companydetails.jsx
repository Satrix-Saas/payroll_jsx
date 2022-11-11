import React, { useState } from 'react';
import { Helmet } from "react-helmet";
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

                        <form>
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
                                                            <input type="file" className="form-control" />
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
                                                            <input type="text" className="form-control" placeholder="--NA--" name="pan" id="pan" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>TAN</label>
                                                            <input type="text" className="form-control" placeholder="--NA--" name="tan" id="tan" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>GSTIN</label>
                                                            <input type="text" className="form-control" placeholder="--NA--" name="gstin" id="gstin" />
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
                                                        <input type="text" className="form-control" placeholder="Verification not initiated" name="kyc" id="kyc" />
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
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name="pf_status" id="enabled_pf" value="enabled_pf" />
                                                                <label className="form-check-label" htmlFor="enabled_pf">Enabled</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name="pf_status" id="disabled_pf" value="disabled_pf" />
                                                                <label className="form-check-label" htmlFor="disabled_pf">Disabled</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <label>ESIC Status</label>
                                                        <div className="leave-inline-form">
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name="esic_status" id="enabled_esic" value="enabled_esic" />
                                                                <label className="form-check-label" htmlFor="enabled_esic">Enabled</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name="esic_status" id="disabled_esic" value="disabled_esic" />
                                                                <label className="form-check-label" htmlFor="disabled_esic">Disabled</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <label>PT Status</label>
                                                        <div className="leave-inline-form">
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name="pt_status" id="enabled_pt" value="enabled_pt" />
                                                                <label className="form-check-label" htmlFor="enabled_pt">Enabled</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name="pt_status" id="disabled_pt" value="disabled_pt" />
                                                                <label className="form-check-label" htmlFor="disabled_pt">Disabled</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <label>LWF Status</label>
                                                        <div className="leave-inline-form">
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name="lwf_status" id="enabled_lwf" value="enabled_lwf" />
                                                                <label className="form-check-label" htmlFor="enabled_lwf">Enabled</label>
                                                            </div>
                                                            <div className="form-check form-check-inline">
                                                                <input className="form-check-input" type="radio" name="lwf_status" id="disabled_lwf" value="disabled_lwf" />
                                                                <label className="form-check-label" htmlFor="disabled_lwf">Disabled</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    {/* /pf esic etc status */}
                                    {/* credentials */}
                                    <div className="card leave-box" id="">
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
                                                            <input type="text" className="form-control" placeholder="Not Set" name="traces" id="traces" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>PF</label>
                                                            <input type="text" className="form-control" placeholder="Not Set" name="pan" id="pan" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>ESIC</label>
                                                            <input type="text" className="form-control" placeholder="Not Set" name="esic" id="esic" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>PT</label>
                                                            <input type="text" className="form-control" placeholder="Not Set" name="pt" id="pt" />
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
                        <EditCredentials/>
                    </div>
                    <div id="edit_kycstatus" className="modal custom-modal fade" role="dialog">
                        <EditKycStatus/>
                    </div>
                </div>
            </div >


        </>
    )
}

export default Companydetails
