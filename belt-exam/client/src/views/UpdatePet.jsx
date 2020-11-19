import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { navigate } from '@reach/router';

const UpdatePet = props => {
    const [form, setForm] = useState({
        name: "",
        type: "",
        description: "",
        skill1: "",
        skill2: "",
        skill3: ""
    })

    const [error, setError] = useState({}); 

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => {
                console.log(res.data.pet);
                setForm(res.data.pet)
            })
            .catch(err => console.log(err))
    }, [])

    const onChangeHandler = (e)  => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/update/${props._id}`, form)
            .then(res => {
                if(res.data.error){
                    setError(res.data.error.errors)
                } else {
                    navigate("/")
                }
            })
    }

    return(
        <div className="container">
            <div className="row">
                <h2 className="col-6">Edit {form.name}</h2> 
                <div className="col-4"></div>
                <div className="col-2">
                    <a href="/" className="btn btn-info">Home</a>
                </div>
            </div>
            <Form form = {form} onChangeHandler = {onChangeHandler} onSubmitHandler = {onSubmitHandler} error={error}/>
        </div>
    )
}

export default UpdatePet;