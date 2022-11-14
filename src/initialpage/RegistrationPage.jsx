/**
 * Signin Firebase
 */

import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import { Applogo } from '../Entryfile/imagepath.jsx'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { alphaNumericPattern, emailrgx, fullnameregx, numberregx } from '../constant'
import { Api } from './Api/Api.js';
import Message from '../_components/modelbox/Message.jsx';


const schema = yup
  .object({

    fullname: yup
      .string()
      .matches(fullnameregx, 'Full Name is required')
      .required('Full Name is required')
      .trim(),

    org_name: yup
      .string()
      .required('Oragnisation Name is required')
      .trim(),

    phonenum: yup
      .string()
      .matches(numberregx, 'Phone Number is incorrect')
      .required('Phone Number  is required')
      .trim(),

    num_emp: yup
      .string()
      .required('Number Of Employees is required'),

    title: yup
      .string()
      .required('Title is required'),

    email: yup
      .string()
      .matches(emailrgx, 'Email is required')
      .required('Email is required')
      .trim(),
    password: yup.string().min(6)
      .max(6).required('Password is required')
      .trim(),


  })
  .required()

const Registrationpage = (props) => {
  /**
   * On User Login
   */
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const [eye, seteye] = useState(true);
  const [emailerror, setEmailError] = useState("");
  const [nameerror, setNameError] = useState("");
  const [passworderror, setPasswordError] = useState("");
  const [formgroup, setFormGroup] = useState("");
  const [inputValues, setInputValues] = useState({
    fullname: "",
    org_name: "",
    phonenum: "",
    email: "",
    password: "",
    num_emp: "",
    title: "",

  });

  const {
    handleSubmit,
    control,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => {
    // console.log("data", data)

    // if (data.fullname == "" || data.org_name=="" || data.phonenum == "" ||  data.num_emp == "" ||  data.title == "" ||  data.password == "" || data.email == ""  ) {
    //   setError('', {
    //     message: 'confirm password is mismatch',
    //   })
    // } else {
    clearErrors()
    var arr = [];

    arr['email'] = data.email;
    arr['password'] = data.password;
    arr['username'] = data.fullname;
    arr['org_name'] = data.org_name;
    arr['org_size'] = data.num_emp;
    arr['contact'] = data.phonenum;
    arr['emp_type'] = data.title;

    Api(arr, "http://192.168.0.100:8074/Satrix_Saas2/pub/register/index/index");

    console.log(arr);

  }

  const onEyeClick = () => {
    seteye(!eye)
  }


  const onApplyJob = e => {
    e.preventDefault();
    localStorage.removeItem('jobview')
    this.props.history.push('/applyjob/joblist')
  }

  const { loading } = props;
  return (

    <>
      <Message show={show} onHide={handleClose} />
      <Helmet>
        <title>Register - HRMS Admin Template</title>
        <meta name="description" content="Login page" />
      </Helmet>
      <div className="account-content">
        <Link to="/applyjob/joblist" className="btn btn-primary apply-btn">Apply Job</Link>
        <div className="container">

          <div className="account-box">
            <div className="account-wrapper">
              {/* Account Logo */}
              <div className="account-logo">
                <Link to="/app/main/dashboard"><img src={Applogo} alt="Dreamguy's Technologies" /></Link>
              </div>
              {/* /Account Logo */}
              <h3 className="account-title">Register</h3>
              <p className="account-subtitle">Access to our dashboard</p>
              {/* Account Form */}
              <div>
                <form onSubmit={handleSubmit(onSubmit)} >
                  <div className="form-group">
                    <label>Full Name</label>
                    <Controller
                      name="fullname"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input className={`form-control  ${errors?.fullname ? "error-input" : ""}`} type="text" value={value} onChange={onChange} autoComplete="false" />
                      )}
                    />
                    <small>{errors?.fullname?.message}</small>
                  </div>
                  <div className="form-group">
                    <label>Organisation Name</label>
                    <Controller
                      name="org_name"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input className={`form-control  ${errors?.org_name ? "error-input" : ""}`} type="text" value={value} onChange={onChange} autoComplete="false" />
                      )}
                    />
                    <small>{errors?.org_name?.message}</small>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <Controller
                      name="email"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input className={`form-control  ${errors?.email ? "error-input" : ""}`} type="text" value={value} onChange={onChange} autoComplete="false" />
                      )}
                    />
                    <small>{errors?.email?.message}</small>
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <Controller
                      name="phonenum"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <input className={`form-control  ${errors?.phonenum ? "error-input" : ""}`} type="text" value={value} onChange={onChange} autoComplete="false" />
                      )}
                    />
                    <small>{errors?.phonenum?.message}</small>
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <Controller
                      name="password"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <div className="pass-group">
                          <input type={eye ? "password" : "text"} className={`form-control  ${errors?.password ? "error-input" : ""}`} value={value} onChange={onChange} autoComplete="false" />
                          <span onClick={onEyeClick} className={`fa toggle-password" ${eye ? "fa-eye-slash" : "fa-eye"}`} />
                        </div>
                      )}
                    />

                    <small>{errors?.password?.message}</small>
                  </div>

                  <div className="form-group">
                    <label>Number Of Employee</label>
                    <Controller
                      name="num_emp"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <select className={`form-control form-select  ${errors?.num_emp ? "error-input" : ""}`} type="text" value={value} onChange={onChange} >
                          <option value="">--Select--</option>
                          <option value="1-20" >1-20</option>
                          <option value="21-50" >21-50</option>
                          <option value="51-100" >51-100</option>
                          <option value="More than 100" >More than 100</option>
                        </select>
                      )}
                    />
                    <small>{errors?.num_emp?.message}</small>
                  </div>

                  <div className="form-group">
                    <label>Your Title</label>
                    <Controller
                      name="title"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <select className={`form-control form-select  ${errors?.title ? "error-input" : ""}`} type="text" value={value} onChange={onChange} >
                          <option value="">--Select--</option>
                          <option value="Founder/CEO">Founder/CEO</option>
                          <option value="Finance/HR Manager">Finance/HR Manager</option>
                          <option value="Employee">Employee</option>
                        </select>
                      )}
                    />
                    <small>{errors?.title?.message}</small>
                  </div>

                  <div className="form-group text-center">
                    <button className="btn btn-primary account-btn"  type="submit" >Register</button>

                  </div>
                </form>
                <div className="account-footer">
                  <p>Already have an account? <Link to="/login">Login</Link></p>
                </div>
              </div>

              {/* /Account Form */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Registrationpage;



