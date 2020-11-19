import React, { useState } from 'react';
import Form from '../components/Form';
import { navigate } from '@reach/router'; 
import axios from 'axios'; 

const NewPet = props => {
    const [form, setForm] = useState({
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: ""
    })

    const [error, setError] = useState({});

    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets/new", form)
            .then(res => {
                if(res.data.error){
                    console.log(res.data.error.errors)
                    setError(res.data.error.errors)
                } else {
                    console.log("It worked!")
                    navigate("/")
                }
                
            })
            .catch(console.log("Something went wrong!"))
    }

    return(

        <div className="container">
            <div className="row">
                <h2 className="col-6">Know a pet needing a home?</h2> 
                <div className="col-4"></div>
                <div className="col-2">
                    <a href="/" className="btn btn-info">Home</a>
                </div>
            </div>
            <Form form = {form} onChangeHandler = {onChangeHandler} onSubmitHandler = {onSubmitHandler} error={error}/>
        </div>
    )
}

export default NewPet; 