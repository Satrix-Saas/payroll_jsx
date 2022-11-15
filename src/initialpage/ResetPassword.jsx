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
 import { Api } from './Api/Api.js';
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
       arr['email'] = 'test2@gmail.com';
       arr['new_password'] = data.password;
       arr['confirm_password'] = data.repeatPassword;
       Api(arr, "http://192.168.0.100:8074/Satrix_Saas2/pub/login/reset/password");
       // props.history.push('login')
     }
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
                        <input className={`form-control  ${errors?.password ? "error-input" : ""}`} type="text" value={value} onChange={onChange} autoComplete="false" />
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
                     <button className="btn btn-primary account-btn" id="formhitbtn" type="submit">Confirm</button>
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
 