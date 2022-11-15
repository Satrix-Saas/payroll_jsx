import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Header from '../../initialpage/Sidebar/header';
import Sidebar from '../../initialpage/Sidebar/sidebar';
import { dropDownArray } from '../Dropdown/Dropdownutil';
import options from '../Option';



const ContractorPayment = () => {
    const optionArrayPayment = dropDownArray(options, "Payment");
    const [menu, setMenu] = useState(false)

    const toggleMobileMenu = () => {
        setMenu(!menu)
    }

    const [inputValues, setInputValues] = useState({
        payment_purpose: "",
        remarks: "",
        tax: "",
        amount: "",
        repeat_payment: "",
        invoice_date: "",
        payment_date: "",
        invoice_image: "",
        payment: "",

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


                                            <div className="form-group">
                                                <label>Please select the payment purpose. <span className="text-danger">*</span></label>

                                                <div className="table-responsive m-t-5">
                                                    <table className="table custom-table">
                                                        <thead>
                                                            <tr>
                                                                <th >Purpose</th>
                                                                <th className="text-center">TDS</th>
                                                                <th className="text-center">CreateTax Code</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td><Controller
                                                                    name="payment_purpose"
                                                                    control={control}
                                                                    render={({ field: { value, onChange } }) => (
                                                                        <div className=" form-group form-check ">
                                                                            <label htmlFor="Professional_Services">
                                                                                <input type="radio" name="payment_purpose" value={`Professional_Services`} className="form-check-input" onChange={onChange} />
                                                                                Professional Services
                                                                            </label>
                                                                        </div>
                                                                    )} />
                                                                </td>
                                                                <td className="text-center"> 10% </td>
                                                                <td className="text-center">   194J </td>
                                                            </tr>
                                                            <tr>
                                                                <td><Controller
                                                                    name="payment_purpose"
                                                                    control={control}
                                                                    render={({ field: { value, onChange } }) => (
                                                                        <div className=" form-group form-check ">
                                                                            <label htmlFor="Technical_Services">
                                                                                <input type="radio" name="payment_purpose" value={`Technical_Services`} className="form-check-input" onChange={onChange} />
                                                                                Technical Services
                                                                            </label>
                                                                        </div>
                                                                    )} />
                                                                </td>
                                                                <td className="text-center"> 2% </td>
                                                                <td className="text-center">   194J </td>
                                                            </tr>
                                                            <tr>
                                                                <td><Controller
                                                                    name="payment_purpose"
                                                                    control={control}
                                                                    render={({ field: { value, onChange } }) => (
                                                                        <div className=" form-group form-check ">
                                                                            <label htmlFor="Commission_or_Brokerage">
                                                                                <input type="radio" name="payment_purpose" value={`Commission_or_Brokerage`} className="form-check-input" onChange={onChange} />
                                                                                Commission or Brokerage
                                                                            </label>
                                                                        </div>
                                                                    )} />
                                                                </td>
                                                                <td className="text-center"> 5% </td>
                                                                <td className="text-center">   194H </td>
                                                            </tr>
                                                            <tr>
                                                                <td><Controller
                                                                    name="payment_purpose"
                                                                    control={control}
                                                                    render={({ field: { value, onChange } }) => (
                                                                        <div className=" form-group form-check ">
                                                                            <label htmlFor="Interest">
                                                                                <input type="radio" name="payment_purpose" value={`Interest`} className="form-check-input" onChange={onChange} />
                                                                                Interest
                                                                            </label>
                                                                        </div>
                                                                    )} />
                                                                </td>
                                                                <td className="text-center"> 10% </td>
                                                                <td className="text-center">   194A </td>
                                                            </tr>
                                                            <tr>
                                                                <td><Controller
                                                                    name="payment_purpose"
                                                                    control={control}
                                                                    render={({ field: { value, onChange } }) => (
                                                                        <div className=" form-group form-check ">
                                                                            <label htmlFor="Contractor_Resident_Individual_HUF">
                                                                                <input type="radio" name="payment_purpose" value={`Contractor_Resident_Individual_HUF`} className="form-check-input" onChange={onChange} />
                                                                                Contractor - Resident Individual or HUF
                                                                            </label>
                                                                        </div>
                                                                    )} />
                                                                </td>
                                                                <td className="text-center"> 1% </td>
                                                                <td className="text-center">   194C</td>
                                                            </tr>
                                                            <tr>
                                                                <td><Controller
                                                                    name="payment_purpose"
                                                                    control={control}
                                                                    render={({ field: { value, onChange } }) => (
                                                                        <div className=" form-group form-check ">
                                                                            <label htmlFor="Contractor_others">
                                                                                <input type="radio" name="payment_purpose" value={`Contractor_others`} className="form-check-input" onChange={onChange} />
                                                                                Contractor - Others
                                                                            </label>
                                                                        </div>
                                                                    )} />
                                                                </td>
                                                                <td className="text-center"> 2% </td>
                                                                <td className="text-center">   194C</td>
                                                            </tr>
                                                            <tr>
                                                                <td><Controller
                                                                    name="payment_purpose"
                                                                    control={control}
                                                                    render={({ field: { value, onChange } }) => (
                                                                        <div className=" form-group form-check ">
                                                                            <label htmlFor="Rent_land/building/furniture/fitting">
                                                                                <input type="radio" name="payment_purpose" value={`Rent_land/building/furniture/fitting`} className="form-check-input" onChange={onChange} />
                                                                                Rent of land/building/furniture/fitting
                                                                            </label>
                                                                        </div>
                                                                    )} />
                                                                </td>
                                                                <td className="text-center"> 10% </td>
                                                                <td className="text-center">   194I</td>
                                                            </tr>
                                                            <tr>
                                                                <td><Controller
                                                                    name="payment_purpose"
                                                                    control={control}
                                                                    render={({ field: { value, onChange } }) => (
                                                                        <div className=" form-group form-check ">
                                                                            <label htmlFor="Rent_plant_machinery">
                                                                                <input type="radio" name="payment_purpose" value={`Rent_plant_machinery`} className="form-check-input" onChange={onChange} />
                                                                                Rent of plant and machinery
                                                                            </label>
                                                                        </div>
                                                                    )} />
                                                                </td>
                                                                <td className="text-center"> 2% </td>
                                                                <td className="text-center">   194I</td>
                                                            </tr>
                                                            <tr>
                                                                <td><Controller
                                                                    name="payment_purpose"
                                                                    control={control}
                                                                    render={({ field: { value, onChange } }) => (
                                                                        <div className=" form-group form-check ">
                                                                            <label htmlFor="Reimbursement_No_TDS">
                                                                                <input type="radio" name="payment_purpose" value={`Reimbursement_No_TDS`} className="form-check-input" onChange={onChange} />
                                                                                Reimbursement / No TDS
                                                                            </label>
                                                                        </div>
                                                                    )} />
                                                                </td>
                                                                <td className="text-center"> 0% </td>
                                                                <td></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group text-center">
                                        <button className="btn btn-primary account-btn" type="submit" >Make Payment</button>
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
