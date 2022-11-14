import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Header from '../initialpage/Sidebar/header';
import Sidebar from '../initialpage/Sidebar/sidebar';
import { dropDownArray } from './Dropdown/Dropdownutil';
import options from './Option';


function Reimbursement() {
    const optionArraydocuments = dropDownArray(options, "Documents");

    const [menu, setMenu] = useState(false)

    const toggleMobileMenu = () => {
        setMenu(!menu)
    }
    const [inputValues, setInputValues] = useState({
        document: "",
        doc_image: "",
        description: "",
       
    })
    const onSubmit = (data) => {
        console.log("data", data)

        var arr = [];
        arr['company_name'] = data.com_name;

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

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                          
                                <div className="col-md-8">
                                    <div className="card leave-box" id="comp_logo">
                                        <div className="card-body">
                                            <div className="leave-item">
                                                {/* Type */}
                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>Type of reimbursement?</label>
                                                            <Controller
                                                                name="document"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <select className="form-control form-select" value={value} onChange={onChange} >
                                                                        <option value="">--Select--</option>
                                                                        {optionArraydocuments.map((e) => {
                                                                            return (
                                                                                <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                                                    {e.optionvalue}
                                                                                </option>
                                                                            );
                                                                        })}
                                                                    </select>
                                                                )}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Type */}
                                                {/* Description */}

                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>Description?</label>
                                                            <Controller
                                                name="descrption"
                                                control={control}
                                                render={({ field: { value, onChange } }) => (
                                                    <input className="form-control" type="text" value={value} onChange={onChange} />
                                                )} />
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* /Description */}
                                                {/* Image upload */}

                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>Images or documents (maximum 5 MB each)</label>
                                                            <Controller
                                                name="doc_image"
                                                control={control}
                                                render={({ field: { value, onChange } }) => (
                                                    <input className="form-control" type="file" value={value} onChange={onChange} />
                                                )} />
                                                            <input type="file" className="form-control" />
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

export default Reimbursement
