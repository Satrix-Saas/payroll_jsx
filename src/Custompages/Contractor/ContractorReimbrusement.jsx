import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { Link, withRouter } from 'react-router-dom';
import Header from '../../initialpage/Sidebar/header';
import Sidebar from '../../initialpage/Sidebar/sidebar';
import PendingApproval from './PendingApproval';
import PendingPayment from './PendingPayment';

const ContractorReimbrusement = () => {

    
  useEffect( ()=>{
    let firstload = localStorage.getItem("minheight")
    if(firstload === "true"){
        setTimeout(function() {
          window.location.reload(1)
          localStorage.removeItem("minheight")
        },1000)
    }
 });

    const [menu, setMenu] = useState(false)
    const [isActive, setActive] = useState(false);

    const toggleMobileMenu = () => {
        setMenu(!menu)

    }

    return (
        <div>
            <>
                <div className={`main-wrapper ${menu ? 'slide-nav' : ''}`}>

                    <Header onMenuClick={(value) => toggleMobileMenu()} />
                    <Sidebar />
                    <div className="page-wrapper">
                        <Helmet>
                            <title>Contractor Reimbursements - HRMS Admin Template</title>
                            <meta name="description" />
                        </Helmet>

                        <div className="content container-fluid">

                            {/* Page Header */}
                            <div className="page-header">
                                <div className="col">
                                    <h3 className="page-title">Contractor Reimbursements</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                                        <li className="breadcrumb-item active">Contractor Reimbursements</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Page Content */}
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className={`nav-link ${isActive ? "" : "active"}`} onClick={() => setActive(!true)}>PENDING APPROVALS
                                    </a>
                                    {isActive == false ? <PendingApproval /> : ""}
                                </li>

                                <li className="nav-item">
                                    <a className={`nav-link ${isActive ? "active" : ""}`} onClick={() => setActive(true)}>PENDING PAYMENT</a>
                                    {isActive == true ? <PendingPayment /> : ""}
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </>

        </div>
    )
}

export default ContractorReimbrusement
