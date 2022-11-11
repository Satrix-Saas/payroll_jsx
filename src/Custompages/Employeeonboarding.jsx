import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { dropDownArray } from './Dropdown/Dropdownutil';
import options from './Option';


const EmployeeOnboarding = () => {

    const optionArraymanager = dropDownArray(options, "Manager");
    const optionArraylocation = dropDownArray(options, "State");


    const [inputValues, setInputValues] = useState({
        emp_cont: "",
        description: "",
        image: "",
    })
    const onSubmit = (data) => {
        console.log("data", data)

        var arr = [];
        arr['document_name'] = data.emp_cont;
        arr['description'] = data.description;
        arr['image'] = data.image;

    }

    const {
        handleSubmit,
        control,
    } = useForm()


    return (
        <>
            {/* Add Employee Modal */}
            <div id="add_employee" className="modal custom-modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Employee</h5>
                            <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                {/* Radio Button */}

                                <p>Is this an employee or a contractor?</p>
                                <div className=" form-group form-check form-check-inline">
                                    <label htmlFor="employee">
                                        <input type="radio" name="emp_cont" value="employee" className="form-check-input" id="contractor" />
                                        Employee
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <label htmlFor="contractor">
                                        <input type="radio" name="emp_cont" value="contractor" className="form-check-input" id="contractor" />
                                        Contractor
                                    </label>
                                </div>
                                {/* /Radio Button */}

                                <div className="form-group">
                                    <label>Full Name <span className="text-danger">*</span></label>
                                    <input className="form-control" type="text" name="fullname" id="fullname" />
                                </div>

                                <div className="form-group">
                                    <label>Email <span className="text-danger">*</span></label>
                                    <input className="form-control" type="text" name="email" id="email" />
                                    <p>The email they will use to log into XPayroll. </p>
                                </div>

                                <div className="form-group">
                                    <label>Hire Date <span className="text-danger">*</span></label>
                                    <input className="form-control floating" type="date" name="hiredate" id="hiredate" />
                                    <p>The first day of employment for this person.</p>
                                </div>

                                <div className="form-group">
                                    <label>Title</label>
                                    <input className="form-control" type="text" name="title" id="title" />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Department</label>
                                    <input className="form-control" type="text" name="department" id="department" />
                                </div>
                                <div className="form-group">
                                    <label>Manager</label>
                                    <select className="select" id="manager" name="manager">
                                        <option value="">--select--</option>
                                        {optionArraymanager.map((e) => {
                                            return (
                                                <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                    {e.optionvalue}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Annual Salary</label>
                                    <input className="form-control" type="text" name="salary" id="salary" />
                                    <p>Annual salary is the current CTC (cost to company) for this employee, not including variable pay. If you have a monthly CTC, please multiply by 12.</p>
                                </div>

                                <div className="form-group form-check">
                                    <label>State</label>
                                    <select className="select" name="location" id="location">
                                        <option value="">--select--</option>
                                        {optionArraylocation.map((e) => {
                                            return (
                                                <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                    {e.optionvalue}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>

                                <div className="form-group form-check">
                                    <input className="form-check-input" type="checkbox" name="resident" id="resident" />
                                    <label className="form-check-label">Resident of India</label>
                                </div>

                                <div className="submit-section">
                                    <button className="btn btn-primary submit-btn">Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div >

            {/* /Add Employee Modal */}
        </>
    )
}

export default EmployeeOnboarding