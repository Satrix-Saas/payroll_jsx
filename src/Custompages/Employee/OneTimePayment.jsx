import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Header from '../../initialpage/Sidebar/header';

import Sidebar from '../../initialpage/Sidebar/sidebar';
import { dropDownArray } from '../Dropdown/Dropdownutil';
import options from '../Option';


const OneTimePayment = () => {
    const [inputValues, setInputValues] = useState({
        payment_to_who: "",
        total_amt: "",
        pay_type: "",
        taxable: "",
        Tds_recover: "",
    })
    const onSubmit = (data) => {
        console.log("data", data)

        var arr = [];
        arr['document_name'] = data.upload_doc;

    }

    const {
        handleSubmit,
        control,
    } = useForm()
    const optionArrayTdsrecover = dropDownArray(options, "TDS_Recover");

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
                        <title>One Time Pay - HRMS Admin Template</title>
                        <meta name="description" content="Login page" />
                    </Helmet>
                    {/* Page Content */}
                    <div className="content container-fluid">
                        {/* Page Header */}
                        <div className="page-header">
                            <div className="col">
                                <h3 className="page-title">One Time Payement</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                                    <li className="breadcrumb-item active">One Time Payement</li>
                                </ul>
                            </div>
                        </div>
                        {/* /Page Header */}
                        <div>
                            <h4>Pay your employees instantly outside their regular payroll cycle using our new one-time payments feature. Please note that this is not a substitute for executing payroll, salary advance, or reimbursements. A one-time payment helps in immediately paying a bonus, incentive etc to your employees, which gets added to their next payroll's earnings.</h4>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card leave-box" id="comp_logo">
                                        <div className="card-body">
                                            <div className="h3 card-title">Add A Payment</div>
                                            <div className="leave-item">

                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>Who do you want to make the payment to?</label>
                                                            <Controller
                                                                name="payment_to_who"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="text" value={value} onChange={onChange} placeholder="Search for Employee" />
                                                                )} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>Total Amount</label>
                                                            <Controller
                                                                name="total_amt"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="text" value={value} onChange={onChange} />
                                                                )}
                                                            />
                                                        </div>
                                                        <p>Gross amount to be paid including tax.</p>
                                                    </div>
                                                </div>

                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>Type of Payment</label>
                                                            <Controller
                                                                name="pay_type"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="text" value={value} onChange={onChange} autoComplete="false" />
                                                                )}
                                                            />
                                                        </div>
                                                        <p>This will be reflected in the employee's payslip. Example: performance bonus.</p>
                                                    </div>
                                                </div>

                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group form-check">
                                                            <Controller
                                                                name="taxable"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-check-input" type="checkbox" value={value} onChange={onChange}  />
                                                                )} />
                                                            <label className="form-check-label" >This payment is taxable</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="leave-row">
                                                <div className="leave-left">
                                                    <div className="form-group ">
                                                        <label>Please choose how to recover TDS for this payment</label>
                                                        <Controller
                                                            name="Tds_recover"
                                                            control={control}
                                                            render={({ field: { value, onChange } }) => (
                                                                <select className="form-control form-select" value={value} onChange={onChange} >
                                                                    <option value="">--select--</option>
                                                                    {optionArrayTdsrecover.map((e) => {
                                                                        return (
                                                                            <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                                                {e.optionvalue}
                                                                            </option>
                                                                        );
                                                                    })}
                                                                </select>
                                                            )} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group text-center">
                                                <button className="btn btn-primary account-btn" type="submit" >Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </div >
            </div >
        </>
    )
}

export default OneTimePayment
