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
    financial_year: yup
    .string()
    .required('Financial Year is required')
  })
  .required();

const Payslip = () => {

    const [financialyearerror, setfinancialyearerror] = useState("");
    const [inputValues, setInputValues] = useState({
        financial_year: "",
       
    });

    const {
        handleSubmit,
        control,
        clearErrors,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        }
    );

    const onSubmit = (data) => {
        console.log("data", data)
        

        clearErrors()
        var arr = [];
        arr['financial_year'] = data.financial_year;


        Api(arr, "http://192.168.0.100:8074/Satrix_Saas2/pub/register/index/index");
        console.log(arr);
    
        //  this.props.history.push('/app/main/dashboard')
    }
   
 


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

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="card leave-box" id="comp_logo">
                                        <div className="card-body">
                                            <div className="leave-item">

                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>Select financial year</label>
                                                            <Controller
                                                                name="financial_year"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <select className={`form-control form-select  ${errors?.financial_year ? "error-input" : ""}`} type="text" value={value} onChange={onChange} >
                                                                        <option value="">--Select--</option>
                                                                        {optionArrayfinancial.map((e) => {
                                                                            return (
                                                                                <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                                                    {e.optionvalue}
                                                                                </option>
                                                                            );
                                                                        })}
                                                                    </select>
                                                                )}
                                                            />
                                                             <small>{errors?.financial_year?.message}</small>

                                                        </div>
                                                    </div>


                                                </div>
                                                <p>Oops, looks like we have not processed a payroll for you.</p>


                                            </div>
                                            <div className="submit-section">
                                               <button className="btn btn-primary " type='submit'>Submit</button>
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
