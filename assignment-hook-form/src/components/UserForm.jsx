import React, { useState } from 'react';

const UserForm = (props) => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

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
                </div>
                <div className="form-group">
                    <label>Last Name: </label>
                    <input className = "form-control" name="lastName" onChange = {updateInput}/>
                </div>
                <div className="form-group">
                    <label>Email: </label>
                    <input type="email" className = "form-control" name="email" onChange = {updateInput}/>
                </div>
                <div className="form-group">
                    <label>Password: </label>
                    <input type="password" className = "form-control" name="password" onChange = {updateInput}/>
                </div>
                <div className="form-group">
                    <label>Confirm Password: </label>
                    <input type="password" className = "form-control" name="confirmPassword" onChange = {updateInput}/>
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