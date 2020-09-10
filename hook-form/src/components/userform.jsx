import React, {useState} from 'react';

const UserForm = (props) => {
    const { inputs, setInputs} = props; 
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    
    const onChange = e => {
        setInputs({
            ...inputs, 
            [e.target.name]: e.target.value
        });
        if(e.target.value.length < 2){
            setFirstNameError("First Name must be at least 2 characters");
        }
        if(e.target.value.length < 2){
            setLastNameError("Last Name must be at least 2 characters");
        }
        if(e.target.value.length < 2){
            setEmailError("Email must be at least 2 characters");
        }
        if(e.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters");
        }
        // if(e.target.value !== e.props.password){
        //     setConfirmPasswordError("Passwords must match");
        // }
    }

    const handlePassword = e => {
        console.log(`${e[0]}`)
    }

    return (
        <form onSubmit = {(e) => e.preventDefault()}>
            <div>
                <label>First Name: </label>
                <input type="text" name="firstName" onChange = {onChange}/>
                {
                    firstNameError ?
                    <p style={{color:'red'}}>{ firstNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" name="lastName" onChange = {onChange}/>
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="email" name="email" onChange = {onChange}/>
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name="password" onChange = {onChange}/>
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
            <div>
                {
                    confirmPasswordError ?
                    <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                    ''
                }
                <label>Confirm Password: </label>
                <input type="password" name="confirmPassword"  onChange = {handlePassword}/>
            </div>
        </form>
    )
};

export default UserForm; 