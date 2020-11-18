import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Form from '../components/Form.js'; 
import { navigate } from '@reach/router';

const Update = (props) => {
    const [form, setForm] = useState({
        name: "",
        type: "",
        color: "",
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/plants/${props._id}`)
            .then(res => {
                console.log(res.data.plant);
                setForm(res.data.plant);
            })
    },[])

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
        axios.put(`http://localhost:8000/api/plants/${props._id}/update`, form)
            .then(res => console.log(res))
            .then(res => navigate("/"))
            .catch(err => console.log(err))
    }


    return(
        <div>
            <Form onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler} form={form} />
        </div>
    )
}

export default Update; 