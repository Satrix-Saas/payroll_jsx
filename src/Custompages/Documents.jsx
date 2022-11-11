import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Header from '../initialpage/Sidebar/header';
import Sidebar from '../initialpage/Sidebar/sidebar';
import { dropDownArray } from './Dropdown/Dropdownutil';
import options from './Option';


function Documents() {
    const optionArraydocuments = dropDownArray(options, "Documents");

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
                                <h3 className="page-title">Documents</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                                    <li className="breadcrumb-item active">Documents</li>
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
                                                {/* File Upload */}
                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>Upload new documents</label>
                                                            <select className='form-control form-select'>
                                                                <option value="">--</option>
                                                                {optionArraydocuments.map((e) => {
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
                                                {/* /File Upload */}
                                                {/* Description */}

                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>Description?</label>
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Description */}
                                                {/* Image upload */}

                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>Images or documents (maximum 5 MB each)</label>
                                                            <input type="file" className="form-control" placeholder='Choose a file' />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Image upload */}
                                            </div>
                                            <div className="submit-section">
                                                <button className="btn btn-primary submit-btn">Submit</button>
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

export default Documents
