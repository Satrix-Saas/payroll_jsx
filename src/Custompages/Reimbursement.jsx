import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Header from '../initialpage/Sidebar/header';
import Sidebar from '../initialpage/Sidebar/sidebar';
import { dropDownArray } from './Dropdown/Dropdownutil';
import options from './Option';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { Api } from '../initialpage/Api/Api';


const schema = yup
    .object({
        document: yup
            .string()
            .required('Document is required'),
        description: yup
            .string()
            .required('Descrption is required'),
        doc_image: yup
            .string()
            .required('File is required'),
    })
    .required();

const Reimbursement = () => {


function Reimbursement() {
    const optionArrayreimbrusement_type = dropDownArray(options, "reimbrusement_type");

    const [menu, setMenu] = useState(false)

    const [documenterror, setdocumenterror] = useState("");
    const [inputValues, setInputValues] = useState({
        reimbrusement_type: "",
        expense_date: "",
        details: "",
        amount: "",
        supporting_image: "",
    })

    const onSubmit = (data) => {
        console.log("data", data)


        clearErrors()
        var arr = [];
        arr['document'] = data.document;
        arr['description'] = data.description;
        arr['doc_image'] = data.doc_image;

        Api(arr, "http://192.168.0.100:8074/Satrix_Saas2/pub/register/index/index");
        console.log(arr);
        
        data = "";

    }

    const {
        handleSubmit,
        control,
        clearErrors,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

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
                                <h3 className="page-title">Reimbrusement</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                                    <li className="breadcrumb-item active">Reimbrusement</li>
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
                                                            <label>Type of reimbursement?<span className="text-danger">*</span></label>
                                                            <Controller
                                                                name="reimbrusement_type"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <select className={`form-control form-select  ${errors?.document ? "error-input" : ""}`} value={value} onChange={onChange} >
                                                                        <option value="">--Select--</option>
                                                                        {optionArrayreimbrusement_type.map((e) => {
                                                                            return (
                                                                                <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                                                    {e.optionvalue}
                                                                                </option>
                                                                            );
                                                                        })}
                                                                    </select>
                                                                )}
                                                            />
                                                            <small>{errors?.document?.message}</small>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>Expense  Date <span className="text-danger">*</span></label>
                                                            <Controller

                                                                name="expense_date"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control floating" type="date" value={value} onChange={onChange} autoComplete="false" />
                                                                )} />


                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>Any detail?</label>
                                                            <Controller

                                                                name="details"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="text" value={value} onChange={onChange} />
                                                                )} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>Amount <span className="text-danger">*</span> </label>
                                                            <Controller
                                                                name="amount"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="text" value={value} onChange={onChange} />
                                                                )} />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>Supporting images or documents (maximum 5 MB each) <span className="text-danger">*</span> </label>
                                                            <Controller
                                                                name="supporting_image"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="file" value={value} onChange={onChange} />
                                                                )} />

                                                        </div>
                                                    </div>
                                                </div>
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
