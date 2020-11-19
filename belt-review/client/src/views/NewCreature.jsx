import React, { useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { navigate } from '@reach/router';

const NewCreature = props => {
    const [form, setForm] = useState({
        name: "",
        species: "",
        role: "",
        specialAbility: "",
        age: 0,
        catchPhrase: ""
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
        axios.post("http://localhost:8000/api/creatures/new", form)
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
        <div>
            <h1>Please Register Yourself</h1>
            <Form form={form} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} error={error}/>
        </div>
    )
}

export default NewCreature;