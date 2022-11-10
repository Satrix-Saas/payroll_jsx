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
 import { alphaNumericPattern, emailrgx } from '../constant'
 
 const schema = yup
   .object({
 
    
     password: yup.string().min(6)
       .max(6).required('Password is required')
       .trim(),
 
     repeatPassword: yup.string().required('Confirm Password is required').trim(),
   })
   .required()
 
 const ResetPassword = (props) => {
   /**
    * On User Login
    */
   const [eye, seteye] = useState(true);
   const [emailerror, setEmailError] = useState("");
   const [nameerror, setNameError] = useState("");
   const [passworderror, setPasswordError] = useState("");
   const [formgroup, setFormGroup] = useState("");
   const [inputValues, setInputValues] = useState({
  
     password: "",
     repeatPassword: "",
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
 
     if (data.repeatPassword != data.password) {
       setError('repeatPassword', {
         message: 'confirm password is mismatch',
       })
     } else {
       clearErrors('repeatPassword')
       var arr = [];
       arr['password'] = data.password;
       arr['repeatpassword'] = data.repeatPassword;
 
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
 
     if (this.state.email !== '' && this.state.password !== '') {
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
         <title>Register - HRMS Admin Template</title>
         <meta name="description" content="Login page" />
       </Helmet>
       <div className="account-content">
         <div className="container">         
           <div className="account-box">
             {/* Account Logo */}
         
           {/* /Account Logo */}
             <div className="account-wrapper">
             <div className="account-logo">
             <Link to="/app/main/dashboard"><img src={Applogo} alt="Dreamguy's Technologies" /></Link>
           </div>
               <h3 className="account-title">Reset Password</h3>
               <p className="account-subtitle">Access to our dashboard</p>
               {/* Account Form */}
               <div>
                 <form onSubmit={handleSubmit(onSubmit)}>
                 
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
                     <label>Repeat Password</label>
                     <Controller
                       name="repeatPassword"
                       control={control}
                       render={({ field: { value, onChange } }) => (
                         <input className={`form-control  ${errors?.repeatPassword ? "error-input" : ""}`} type="text" value={value} onChange={onChange} autoComplete="false" />
                       )}
   
                     />
                     <small>{errors?.repeatPassword?.message}</small>
                   </div>
                   <div className="form-group text-center">
                     <button className="btn btn-primary account-btn" type="submit">Register</button>
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
 
 
 
 export default ResetPassword;
 