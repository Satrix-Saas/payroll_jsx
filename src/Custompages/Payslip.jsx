import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../initialpage/Sidebar/header';
import Sidebar from '../initialpage/Sidebar/sidebar';
import { dropDownArray } from './Dropdown/Dropdownutil';
import options from './Option';


function Payslip() {
    const optionArrayfinancial = dropDownArray(options, "Financial_year");

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
                        <title>Documents - HRMS Admin Template</title>
                        <meta name="description" content="Login page" />
                    </Helmet>
                    {/* Page Content */}
                    <div className="content container-fluid">
                        {/* Page Header */}
                        <div className="page-header">
                            <div className="col">
                                <h3 className="page-title"> My Pay Slip</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                                    <li className="breadcrumb-item active">My Pay Slip</li>
                                </ul>
                            </div>
                        </div>
                        {/* /Page Header */}

                        <form>
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="card leave-box" id="comp_logo">
                                        <div className="card-body">
                                            <div className="leave-item">
                                                
                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label id="payslip">Select financial year</label>
                                                            <select className='form-control form-select'>
                                                                <option value="">--Select--</option>
                                                                {optionArrayfinancial.map((e) => {
                                                                    return (
                                                                        <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                                            {e.optionvalue}
                                                                        </option>
                                                                    );
                                                                })}
                                                            </select>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <p>Oops, looks like we have not processed a payroll for you.</p>
                                              

                                            </div>
                                            <div className="submit-section">
                                            <Link to="/app/main/dashboard"><button className="btn btn-primary submit-btn">Return To Dashboard</button></Link>
                                            </div>
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

export default Payslip
