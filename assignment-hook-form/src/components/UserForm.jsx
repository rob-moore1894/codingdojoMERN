import React, { useState } from 'react';

const UserForm = (props) => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    
    const formValidations = {
        firstNameValidation: "First Name must be at least 2 characters", 
        lastNameValidation: "Last Name must be at least 2 characters",
        emailValidation: "Email must be at least 5 characters",
        passwordValidation: "Password must be at least 8 characters",
        confirmPasswordValidation: "Passwords must match",
    }

    const updateInput = (e) => {
        setForm({
            ...form, 
            [e.target.name] : e.target.value
        })
    }

    return (
        <div className="container mt-3">
            <form>
                <div className="form-group">
                    <label>First Name: </label>
                    <input className = "form-control" name="firstName" onChange = {updateInput}/>
                    {form.firstName.length > 1 ? "" : <span className="alert text-danger">{formValidations.firstNameValidation}</span>}
                    
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input className = "form-control" name="lastName" onChange = {updateInput}/>
                    {form.lastName.length > 1 ? "" : <span className="alert text-danger">{formValidations.lastNameValidation}</span>}
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="email" className = "form-control" name="email" onChange = {updateInput}/>
                    {form.email.length > 4 ? "" : <span className="alert text-danger">{formValidations.emailValidation}</span>}
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="password" className = "form-control" name="password" onChange = {updateInput}/>
                    {form.password.length > 7 ? "" : <span className="alert text-danger">{formValidations.passwordValidation}</span>}
                </div>
                <div className="form-group">
                    <label>Confirm Password: </label>
                    <input type="password" className = "form-control" name="confirmPassword" onChange = {updateInput}/>
                    {form.confirmPassword === form.password ? "" : <span className="alert text-danger">{formValidations.confirmPasswordValidation}</span>}
                </div>
            </form>

            <div>
                <h4>Your Form Data</h4>
                <p>First Name: {form.firstName}</p>
                <p>Last Name: {form.lastName}</p>
                <p>Email: {form.email}</p>
                <p>Password: {form.password}</p>
                <p>Confirm Password: {form.confirmPassword}</p>
            </div>
        </div>
    )
}

export default UserForm; 