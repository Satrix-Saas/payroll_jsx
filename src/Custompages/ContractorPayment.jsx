import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Header from '../initialpage/Sidebar/header';
import Sidebar from '../initialpage/Sidebar/sidebar';
import { dropDownArray } from './Dropdown/Dropdownutil';
import options from './Option';



const ContractorPayment = () => {
    const optionArrayPayment = dropDownArray(options, "Payment");
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
                                <h3 className="page-title">Company Payment</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                                    <li className="breadcrumb-item active">Company Payment</li>
                                </ul>
                            </div>
                        </div>
                        {/* Page Header */}

                        <h4>Make all external payments to vendors, consultants, freelancers or contractors here</h4>
                        <div className="card leave-box">
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Who do you want to make the payment to?<span className="text-danger">*</span></label>
                                                <Controller
                                                    name="payment"
                                                    control={control}
                                                    render={({ field: { value, onChange } }) => (
                                                        <input className="form-control" type="text" value={value} onChange={onChange} placeholder="Contractor" />
                                                    )} />
                                            </div>

                                            <div className="form-group">
                                                <label>Invoice images or PDFs (maximum 5 MB each)<span className="text-danger">*</span></label>
                                                <Controller
                                                    name="invoice_image"
                                                    control={control}
                                                    render={({ field: { value, onChange } }) => (
                                                        <input className="form-control" type="file" value={value} onChange={onChange} />
                                                    )} />
                                            </div>
                                            <div className="form-group">
                                                <label>Payment Date <span className="text-danger">*</span></label>
                                                <Controller
                                                    name="payment_date"
                                                    control={control}
                                                    render={({ field: { value, onChange } }) => (
                                                        <input className="form-control floating" type="date" value={value} onChange={onChange} />
                                                    )} />
                                                <p>Your payment will automatically get processed on this date. Please ensure you have enough XPayroll balance.</p>
                                            </div>

                                            <div className="form-group">
                                                <label>Invoice Date <span className="text-danger">*</span></label>
                                                <Controller
                                                    name="invoice_date"
                                                    control={control}
                                                    render={({ field: { value, onChange } }) => (
                                                        <input className="form-control floating" type="date" value={value} onChange={onChange} />
                                                    )} />
                                                <p>Date of invoice. This is used to calculate the date of TDS payment (if any). Invoice date will be ignored in case of recurring payments.</p>
                                            </div>

                                            <div className="form-group">
                                                <label>Repeat Payment?</label>
                                                <Controller
                                                    name="repeat_payment"
                                                    control={control}
                                                    render={({ field: { value, onChange } }) => (
                                                        <select className="form-control form-select" value={value} onChange={onChange} >
                                                            <option value="">--select--</option>
                                                            {optionArrayPayment.map((e) => {
                                                                return (
                                                                    <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                                        {e.optionvalue}
                                                                    </option>
                                                                );
                                                            })}
                                                        </select>
                                                    )} />
                                            </div>

                                            <div className="form-group">
                                                <label>Amount <span className="text-danger">*</span></label>
                                                <Controller
                                                    name="amount"
                                                    control={control}
                                                    render={({ field: { value, onChange } }) => (
                                                        <input className="form-control" type="text" value={value} onChange={onChange} />
                                                    )} />
                                                <p>Gross amount to be paid including TDS, but not including GST, VAT, sales tax etc.</p>
                                            </div>

                                            <div className="form-group">
                                                <label>Tax <span className="text-danger">*</span></label>
                                                <Controller
                                                    name="tax"
                                                    control={control}
                                                    render={({ field: { value, onChange } }) => (
                                                        <input className="form-control" type="text" value={value} onChange={onChange} placeholder="0" />
                                                    )} />
                                                <p>GST, VAT, sales tax etc.</p>
                                            </div>

                                            <div className="form-group">
                                                <label>Any Remarks? <span className="text-danger">*</span></label>
                                                <Controller
                                                    name="remarks"
                                                    control={control}
                                                    render={({ field: { value, onChange } }) => (
                                                        <input className="form-control" type="text" value={value} onChange={onChange} />
                                                    )} />
                                                <p>We will include this in the email notifying the contractor of the payment.</p>
                                            </div>
                                        </div>
                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContractorPayment
