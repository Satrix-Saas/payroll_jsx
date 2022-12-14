/**
 * Signin Firebase
 */

 import React, {useEffect, useState} from 'react';
 import { Helmet } from "react-helmet";
 import { Link } from 'react-router-dom';
 import {Applogo} from '../Entryfile/imagepath.jsx'
 import { useForm, Controller } from 'react-hook-form'
 import { yupResolver } from '@hookform/resolvers/yup'
 import * as yup from 'yup';
 import { Api } from './Api/Api.js';
 import  { alphaNumericPattern, emailrgx } from '../constant'
 
 
 const schema = yup
   .object({
   
     email: yup
       .string()
       .matches(emailrgx, 'Email is required')
       .required('Email is required')
       .trim(),
     password: yup.string() .min(6)
     .max(6) .required ('Password is required')
     .trim(),
   })
   
 const Loginpage = (props) => {
      
       const[eye,seteye]=useState(true);
       const [emailerror,setEmailError] = useState("");
     const [nameerror,setNameError] = useState("");
       const [passworderror,setPasswordError] = useState("");
       const [formgroup,setFormGroup] = useState("");
       const [inputValues,setInputValues] = useState({
       email:"",
       password:"",
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
       
     const  onSubmit = (data) => {
      //  console.log("data", data)
     
       if(data.password == "") {
         setError('password', {
           message: 'password required',
         })
     } else {
       clearErrors('password')
       var arr = [];
        arr['email'] = data.email;
        arr['password'] = data.password;
       ;
    
       Api(arr, "http://192.168.0.100:8074/Satrix_Saas2/pub/login/index/index");
       props.history.push('/app/main/dashboard') 
       
     }
     }
 
     const onEyeClick = () =>{
     seteye(!eye)
     }
       return (
          
          
          <>
            <Helmet>
                <title>Login - HRMS Admin Template</title>
                <meta name="description" content="Login page"/>					
          </Helmet>
         <div className="account-content">
           <div className="container">
           
             <div className="account-box">
              
             {/* /Account Logo */}
               <div className="account-wrapper">
                  {/* Account Logo */}
             <div className="account-logo">
               <Link to="/app/main/dashboard"><img src={Applogo} alt="Dreamguy's Technologies" /></Link>
             </div>
                 <h3 className="account-title">Login</h3>
                 <p className="account-subtitle">Access to our dashboard</p>
                 {/* Account Form */}
                 <div>
                 <form onSubmit={handleSubmit(onSubmit)}>
                   <div className="form-group">
                     <label>Email Address</label>
                     <Controller
                       name="email"
                       control={control}
                       render={({ field: { value, onChange } }) => (
                         <input   className={`form-control  ${errors?.email ? "error-input" : "" }`} type="text" value={value} onChange={onChange} autoComplete="false"  />
 
                       )}
                  
                     />											
                     <small>{errors?.email?.message}</small>              
                   </div>
                   <div className="form-group">
                     <div className="row">
                       <div className="col">
                         <label>Password</label>
                       </div>
                       <div className="col-auto">
                         <Link className="text-muted" to="/forgotpassword">
                           Forgot password?
                         </Link>
                       </div>
                     </div>
                     <Controller
                       name="password"
                       control={control}
                       render={({ field: { value, onChange } }) => (
                         <div className="pass-group">
                           <input  type={eye ? "password" : "text"}  className={`form-control  ${errors?.password? "error-input" : "" }`}  value={value} onChange={onChange} autoComplete="false"  />
                           <span onClick={onEyeClick} className={`fa toggle-password" ${eye ? "fa-eye-slash" : "fa-eye" }`}/>
                         </div>
                       )}
                      //  defaultValue=""
                       />											
                     <small>{errors?.password?.message}</small>                  
                   </div>
                   <div className="form-group text-center">
                   <button
                   className="btn btn-primary account-btn" id="formhitbtn"
                   type="submit"  
                 >
                   Login
                 </button>
                    
                   </div>
                   </form>
                   <div className="account-footer">
                     <p>Don't have an account yet? <Link to="/register">Register</Link></p>
                   </div>
                 </div>
                 {/* /Account Form  */}
               </div>
             </div>
           </div>
         </div>
       </>
       );
    }
 
 
 export default Loginpage;
 