import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { Link, } from 'react-router-dom';
import Header from '../../initialpage/Sidebar/header';
import Sidebar from '../../initialpage/Sidebar/sidebar';
import EmployeeOnboarding from '../Employeeonboarding';

const RunPayroll = () => {

    const [menu, setMenu] = useState(false)
    const [isActive, setActive] = useState(false);

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
                            <title>Contractor Reimbursements - HRMS Admin Template</title>
                            <meta name="description" />
                        </Helmet>
                        <div className="content container-fluid">

                            {/* Page Header */}
                            <div className="page-header">
                                <div className="col">
                                    <h3 className="page-title">Run Payroll</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                                        <li className="breadcrumb-item active">Run Payroll</li>
                                    </ul>
                                </div>
                            </div>
                            {/* Page Header */}

                            <div>
                                <h3>We do not have any payroll data for you. Perhaps you need to  <a href="#" data-bs-toggle="modal" data-bs-target="#add_employee">add</a> some employees, or set their salaries?</h3>
                            </div>
                            <EmployeeOnboarding/>
                        </div>
                    </div>
                </div>
            </>
     
    )
}
export default RunPayroll