import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import Form from '../components/Form';

const Update = (props) => {
    const [form, setForm] = useState({
        title: "",
        price: "",
        description: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props._id}`)
            .then(res => {
                console.log(res.data.product)
                setForm(res.data.product)
            })
    }, [])

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
        axios.put(`http://localhost:8000/api/products/${props._id}/update`, form)
            .then(res => console.log(res))
            .then(res => navigate("/"))
            .catch(err => console.log(err))
    }

    return(
        <div className="container">
            <h1 className="m-4">Update {form.title}</h1>
            <Form onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} form={form} />
        </div>
    )
}

export default Update; 