/**
 * Signin Firebase
 */

 import React, { useEffect, useState } from 'react';
 import { Helmet } from "react-helmet";
 import { Link } from 'react-router-dom';
 import {Applogo} from '../Entryfile/imagepath.jsx'
 import { useForm, Controller } from 'react-hook-form'
 import { yupResolver } from '@hookform/resolvers/yup'
 import * as yup from 'yup';
 
 import { alphaNumericPattern, emailrgx } from '../constant'
 
 const schema = yup
   .object({
 
    
  email: yup
       .string()
       .matches(emailrgx, 'Email is required')
       .required('Email is required')
       .trim(),
   })
   .required()
 
 const ForgotPassword = (props) => {
  
  /**
    * On User Login
    */
    const [eye, seteye] = useState(true);
    const [emailerror, setEmailError] = useState("");
    const [nameerror, setNameError] = useState("");
    const [passworderror, setPasswordError] = useState("");
    const [formgroup, setFormGroup] = useState("");
  
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
    alert(data)
     // console.log("data", data)
 
     if (data.emailerror == "") {
      setError('email', {
        message: 'email required',
      })
    } else {
      clearErrors('repeatPassword')
      var arr = [];
      arr['email'] = data.email;
 
       // console.log(arr);
       alert("called");
       var data = Object.assign({}, arr)
       console.log(data);
       $.ajax({
         type: 'POST',
         dataType: 'json',
         url: "http://192.168.0.100:8074/Satrix_Saas2/pub/register/index/index",
         headers: {
           'Access-Control-Allow-Origin': '*',
           'Access-Control-Allow-Headers': 'Content-Type, X-Auth-Token, Authorization, Origin',
           'token': 'assss',
           "Access-Control-Allow-Methods": ["POST", "GET", "OPTIONS", "DELETE", "PUT"],
           "X-Requested-With": "XMLHttpRequest"
         },
         data: { 'data': JSON.stringify(data) },
         success: function (result) {
           var response = result.response;
           if (response.ResponseCode) {
             alert(response.ResponseMessage);
           } else {
             alert(response.ResponseMessage);
           }
         },
         error: function (result) {
           alert("error");
           console.log(result);
         }
       });
       // props.history.push('login')
     }
   }
 
   const onEyeClick = () => {
     seteye(!eye)
   }
   const onUserLogin = e => {
     e.preventDefault();
 
     if (this.state.email !== '') {
       this.props.signinUserInFirebase(this.state, this.props.history);
 
 
     }
   }
         
   const onApplyJob = e => {
     e.preventDefault();
     localStorage.removeItem('jobview')
     this.props.history.push('/applyjob/joblist')
   }
 
   const { loading } = props;
 
       return (
           <>
             <Helmet>
                     <title>Forgot Password - HRMS Admin Template</title>
                     <meta name="description" content="Login page"/>					
             </Helmet>
           <div className="account-content">
             <div className="container">
              
               <div className="account-box">
               
                 <div className="account-wrapper">
                    {/* Account Logo */}
               <div className="account-logo">
                 <Link to="/app/main/dashboard"><img src={Applogo} alt="Dreamguy's Technologies" /></Link>
               </div>
               {/* /Account Logo */}
                   <h3 className="account-title">Forgot Password?</h3>
                   <p className="account-subtitle">Enter your email to get a password reset link</p>
                   {/* Account Form */}
                   <form onSubmit={handleSubmit(onSubmit)}>
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
                     <div className="form-group text-center">
                       <button className="btn btn-primary account-btn"  type="submit">Reset</button>
                     </div>
                     <div className="account-footer">
                       <p>Remember your password? <Link to="/login">Login</Link></p>
                     </div>
                   </form>
                   {/* /Account Form */}
                 </div>
               </div>
             </div>
           </div>
         </>
       );
    }
 
 
 
 export default ForgotPassword;
 