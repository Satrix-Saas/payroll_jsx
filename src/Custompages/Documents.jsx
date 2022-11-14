import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Api } from '../initialpage/Api/Api';
import Header from '../initialpage/Sidebar/header';
import Sidebar from '../initialpage/Sidebar/sidebar';
import { dropDownArray } from './Dropdown/Dropdownutil';
import options from './Option';



function Documents() {

    const [inputValues, setInputValues] = useState({
        upload_doc: "",
        description: "",
        image:"",
    })
    const onSubmit = (data) => {
        console.log("data", data)
        
        var arr = [];
        arr['upload_document'] = data.upload_doc;
        arr['description'] = data.description;
        var file_name = data.image;
        file_name = file_name.replace(/^.*[\\\/]/, '');
        arr['file_image'] = file_name;

        Api(arr, "http://192.168.0.100:8074/Satrix_Saas2/pub/employee/document/document");
        // props.history.push('/app/main/dashboard') 
    }

    const {
        handleSubmit,
        control,
    } = useForm()
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
                    {/* {/ Page Content /} */}
                    <div className="content container-fluid">
                        {/* {/ Page Header /} */}
                        <div className="page-header">
                            <div className="col">
                                <h3 className="page-title">Documents</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                                    <li className="breadcrumb-item active">Documents</li>
                                </ul>
                            </div>
                        </div>
                        {/* {/ /Page Header /} */}

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="card leave-box" id="comp_logo">
                                        <div className="card-body">
                                            <div className="leave-item">
                                                {/* {/ File Upload /} */}
                                                <div className="leave-row">
                                                    <div className="leave-left">

                                                        <div className="form-group">
                                                            <label>Upload new documents</label>
                                                            <Controller
                                                                name="upload_doc"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <select className="form-control form-select" type="text" value={value} onChange={onChange} >
                                                                        <option value="">--</option>
                                                                        {optionArraydocuments.map((e) => {
                                                                            return (
                                                                                <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                                                    {e.optionvalue}
                                                                                </option>
                                                                            );
                                                                        })}
                                                                    </select>
                                                                )}
                                                            />

                                                        </div>
                                                    </div>
                                                </div>
                                                {/* {/ /File Upload /} */}
                                                {/* {/ Description /} */}

                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>Description?</label>
                                                            <Controller
                                                                name="description"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="text" value={value} onChange={onChange} autoComplete="false" />
                                                                )}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* {/ /Description /} */}
                                                {/* {/ Image upload /} */}

                                                <div className="leave-row">
                                                    <div className="leave-left">
                                                        <div className="form-group">
                                                            <label>Images or documents (maximum 5 MB each)</label>
                                                            <Controller
                                                                name="image"
                                                                control={control}
                                                                render={({ field: { value, onChange } }) => (
                                                                    <input className="form-control" type="file" value={value} onChange={onChange} autoComplete="false" />
                                                                )}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* {/ Image upload /} */}
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

                </div>
            </div>



        </>
    )
}

export default Documents