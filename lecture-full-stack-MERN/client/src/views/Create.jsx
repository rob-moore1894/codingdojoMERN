import axios from 'axios';
import React, { useState } from 'react';
import Form from '../components/Form.js'; 
import { navigate } from '@reach/router';

const Create = (props) => {
    const [form, setForm] = useState({
        name: "",
        type: "",
        color: "",
    })

    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(form);
        axios.post("http://localhost:8000/api/plants/new", form)
            .then(res => console.log(res))
            .then(res => navigate("/"))
            .catch(err => console.log(err))
    }

    return(
        <div>
            <h1>Create a new Plant!</h1>
            <Form onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler} form={form} />
        </div>
    )
}

export default Create; 