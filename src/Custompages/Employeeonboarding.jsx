import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { dropDownArray } from './Dropdown/Dropdownutil';
import options from './Option';
import { Api } from '../initialpage/Api/Api';


const EmployeeOnboarding = () => {

    const optionArraymanager = dropDownArray(options, "Manager");
    const optionArraylocation = dropDownArray(options, "State");

    const [inputValues, setInputValues] = useState({
        emp_cont: "",
        fullname: "",
        email: "",
        hiredate: "",
        title: "",
        department: "",
        manager: "",
        salary:"",
        location: "",
        resident: "",
    })
    const onSubmit = (data) => {
        console.log("data", data)

        var arr = [];
        arr['emp_type'] = data.emp_cont;
        arr['emp_name'] = data.fullname;
        arr['emp_email'] = data.email;
        arr['emp_hire_date'] = data.hiredate;
        arr['emp_post'] = data.title;
        arr['emp_dept'] = data.department;
        arr['mng_name'] = data.manager;
        arr['emp_salary'] = data.salary;
        arr['emp_location'] = data.location;

     

        Api(arr, "http://192.168.0.100:8074/Satrix_Saas2/pub/employee/employee/employee");
        // props.history.push('/app/main/dashboard') 
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

                                <Controller
                                    name={'emp_cont'}
                                    control={control}
                                    render={({ field: { value, onChange } }) => (
                                        <>
                                            <div className=" form-group form-check form-check-inline">
                                                <label htmlFor="employee">
                                                    <input type="radio" name="emp_cont" value={`employee`} className="form-check-input" onChange={onChange} />
                                                    Employee
                                                </label>
                                            </div>
                                            <div className=" form-group form-check form-check-inline">
                                                <label htmlFor="contractor">
                                                    <input type="radio" name="emp_cont" value={`contractor`} className="form-check-input" onChange={onChange} />
                                                    Contractor
                                                </label>
                                            </div>
                                        </>
                                    )} />
                                {/* /Radio Button */}

                                <div className="form-group">
                                    <label>Full Name <span className="text-danger">*</span></label>
                                    <Controller
                                        name="fullname"
                                        control={control}
                                        render={({ field: { value, onChange } }) => (
                                            <input className="form-control" type="text" value={value} onChange={onChange} autoComplete="false" />
                                        )} />

                                </div>

                                <div className="form-group">
                                    <label>Email <span className="text-danger">*</span></label>
                                    <Controller
                                        name="email"
                                        control={control}
                                        render={({ field: { value, onChange } }) => (
                                            <input className="form-control" type="text" value={value} onChange={onChange} autoComplete="false" />
                                        )} />

                                    <p>The email they will use to log into XPayroll. </p>
                                </div>

                                <div className="form-group">
                                    <label>Hire Date <span className="text-danger">*</span></label>
                                    <Controller
                                        name="hiredate"
                                        control={control}
                                        render={({ field: { value, onChange } }) => (
                                            <input className="form-control floating" type="date" value={value} onChange={onChange} autoComplete="false" />
                                        )} />

                                    <p>The first day of employment for this person.</p>
                                </div>

                                <div className="form-group">
                                    <label>Title</label>
                                    <Controller
                                        name="title"
                                        control={control}
                                        render={({ field: { value, onChange } }) => (
                                            <input className="form-control" type="text" value={value} onChange={onChange} autoComplete="false" />
                                        )} />

                                </div>

                                <div className="form-group">
                                    <label className="form-label">Department</label>
                                    <Controller
                                        name="department"
                                        control={control}
                                        render={({ field: { value, onChange } }) => (
                                            <input className="form-control" type="text" value={value} onChange={onChange} autoComplete="false" />
                                        )} />

                                </div>

                                <div className="form-group">
                                    <label>Manager</label>
                                    <Controller
                                        name="manager"
                                        control={control}
                                        render={({ field: { value, onChange } }) => (
                                            <select className="form-control form-select" value={value} onChange={onChange} >
                                                <option value="">--select--</option>
                                                {optionArraymanager.map((e) => {
                                                    return (
                                                        <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                            {e.optionvalue}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        )} />
                                </div>

                                <div className="form-group">
                                    <label className="form-label">Annual Salary</label>
                                    <Controller
                                        name="salary"
                                        control={control}
                                        render={({ field: { value, onChange } }) => (
                                            <input className="form-control" type="text" value={value} onChange={onChange} autoComplete="false" />
                                        )} />

                                    <p>Annual salary is the current CTC (cost to company) for this employee, not including variable pay. If you have a monthly CTC, please multiply by 12.</p>
                                </div>

                                <div className="form-group ">
                                    <label>State</label>
                                    <Controller
                                        name="location"
                                        control={control}
                                        render={({ field: { value, onChange } }) => (
                                            <select className="form-control form-select" value={value} onChange={onChange} >
                                                <option value="">--select--</option>
                                                {optionArraylocation.map((e) => {
                                                    return (
                                                        <option key={e.option} name={e.name} option={e.option} value={e.optionvalue}>
                                                            {e.optionvalue}
                                                        </option>
                                                    );
                                                })}
                                            </select>
                                        )} />
                                </div>

                                <div className="form-group form-check">
                                    <Controller
                                        name="resident"
                                        control={control}
                                        render={({ field: { value, onChange } }) => (
                                            <input className="form-check-input" type="checkbox" value={value} onChange={onChange} />
                                        )} />
                                    <label className="form-check-label">Resident of India</label>
                                </div>

                                <div className="submit-section">
                                    <button className="btn btn-primary submit-btn" data-bs-dismiss="modal" aria-label="Close">Submit</button>
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