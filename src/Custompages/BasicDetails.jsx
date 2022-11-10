import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import Header from '../initialpage/Sidebar/header';
import Sidebar from '../initialpage/Sidebar/sidebar';
import { Applogo } from '../Entryfile/imagepath.jsx'

const BasicDetails = () => {
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
                        <title>Basic Details - HRMS Admin Template</title>
                        <meta name="description" content="Login page" />
                    </Helmet>
                    {/* Page Content */}
                    <div className="content container-fluid">
                        {/* Page Header */}
                        <div className="page-header">

                            <div className="col">
                                <h3 className="page-title">Basic Details</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                                    <li className="breadcrumb-item active">Basic Details</li>
                                </ul>
                            </div>


                            <div className="account-box">
                                <div className="account-wrapper">
                                    {/* Account Logo */}
                                    <div className="account-logo">
                                        <Link to="/app/main/dashboard"><img src={Applogo} /></Link>
                                    </div>
                                    {/* /Account Logo */}
                                    <h3 className="account-title">Address & Tax Setup</h3>
                                    <p className="account-subtitle">Enter Basic Details</p>
                                    {/* Account Form */}
                                    <form id="address_taxsetup">

                                        <div className="form-group">
                                            <label>Company Name<span className="mandatory">*</span> </label>
                                            <input className="form-control" type="text" name="com_name" id="com_name" />
                                            <p>The name of the legal entity.</p>
                                        </div>

                                        <div className="form-group">
                                            <label>Brand Name<span className="mandatory">*</span> </label>
                                            <input className="form-control" type="text" name="brand_name" id="brand_name" />
                                            <p>your company is publicly known by a different brand name, then please enter that here.</p>
                                        </div>

                                        <div className="form-group">
                                            <label>Registered address<span className="mandatory">*</span> </label>
                                            <input className="form-control" type="text" name="address" id="address" />
                                            <p>If you have a GSTIN, provide the address mentioned on your GST certificate.</p>
                                        </div>

                                        <div className="form-group">
                                            <label>PIN code<span className="mandatory">*</span> </label>
                                            <input className="form-control" type="text" name="pincode" id="pincode" />
                                        </div>
                                        <div className="form-group">
                                            <label>Company PAN<span className="mandatory">*</span> </label>
                                            <input className="form-control" type="text" name="pan_num" id="pan_num" />
                                        </div>
                                        <div className="form-group">
                                            <label>Company TAN<span className="mandatory">*</span> </label>
                                            <input className="form-control" type="text" name="tan_num" id="tan_num" />
                                        </div>

                                        <div className="form-group">
                                            <label>Company GSTIN<span className="mandatory">*</span> </label>
                                            <input className="form-control" type="text" name="gstin" id="gstin" />

                                        </div>
                                        <div className="form-group text-center">
                                            <button className="btn btn-primary account-btn" type="submit" >Save</button>
                                        </div>
                                    </form>


                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default BasicDetails
