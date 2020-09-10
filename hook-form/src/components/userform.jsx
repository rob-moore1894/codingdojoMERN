import React from 'react';

const UserForm = (props) => {
    const { inputs, setInputs} = props; 

    const onChange = e => {
        setInputs({
            ...inputs, 
            [e.target.name]: e.target.value
        });
    }

    return (
        <form >
            <div>
                <label>First Name: </label>
                <input type="text" name="firsName" onChange = {onChange}/>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" name="lastName" onChange = {onChange}/>
            </div>
            <div>
                <label>Email: </label>
                <input type="email" name="email" onChange = {onChange}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name="password" onChange = {onChange}/>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" name="confirmPassword"  onChange = {onChange}/>
            </div>
        </form>
    )
};

export default UserForm; 