import React from 'react'

const ContractorPayment = () => {
  return (
    <>
    <div className={`main-wrapper ${menu ? 'slide-nav' : ''}`}>
        <Header onMenuClick={(value) => toggleMobileMenu()} />
        <Sidebar />
        <div className="page-wrapper">
            <Helmet>
                <title>Company Details - HRMS Admin Template</title>
                <meta name="description" content="Login page" />
            </Helmet>
            {/* Page Content */}
            <div className="content container-fluid">
                {/* Page Header */}
                <div className="page-header">
                    <div className="col">
                        <h3 className="page-title">Company Payment</h3>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/app/main/dashboard">Dashboard</Link></li>
                            <li className="breadcrumb-item active">Company Payment</li>
                        </ul>
                    </div>
                </div>
                </div>
                </div>
                </div>
                </>
  )
}

export default ContractorPayment
