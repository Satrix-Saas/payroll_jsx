import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import Header from '../initialpage/Sidebar/header';
import Sidebar from '../initialpage/Sidebar/sidebar';
import { Applogo } from '../Entryfile/imagepath.jsx'

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



                            {/* Account Logo */}
                            <div className="account-logo">
                                <Link to="/app/main/dashboard"><img src={Applogo} /></Link>
                            </div>
                            {/* /Account Logo */}
                            <h3 className="account-title">Address & Tax Setup</h3>
                            <p className="account-subtitle">Enter Basic Details</p>
                            {/* Account Form */}

                            <form>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div>
                                            <div className="h3 card-title">Company Logo</div>
                                            <div className="leave-item">
                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="input-box">
                                                            <div className="form-group">
                                                                <label>Company Logo</label>
                                                                <input type="file" className="form-control" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="leave-right">
                                                        <button className="leave-edit-btn">Edit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="h3 card-title">Tax Setup</div>
                                            <div className="leave-item">
                                                <div className="leave-row">
                                                    <div className="input-box">
                                                        <div className="form-group">
                                                            <label>Company Logo</label>
                                                            <input type="file" className="form-control" />
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>Company Logo</label>
                                                            <input type="file" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="leave-row">

                                                    <div className="input-box">
                                                        <div className="form-group">
                                                            <label>Company Logo</label>
                                                            <input type="file" className="form-control" />
                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </form>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Companydetails
