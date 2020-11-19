import React, { useEffect, useState } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { navigate } from '@reach/router';

const UpdateCreature = (props) => {
    const [form, setForm] = useState({
        name: "",
        species: "",
        role: "",
        specialAbility: "",
        age: 0,
        catchPhrase: ""
    })

    const [error, setError] = useState({}); 

    useEffect(() => {
        axios.get(`http://localhost:8000/api/creatures/${props._id}`)
            .then(res => {
                console.log(res.data.creatures);
                setForm(res.data.creatures)
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
        axios.put(`http://localhost:8000/api/creatures/update/${props._id}`, form)
            .then(res => {
                if(res.data.error){
                    setError(res.data.error.errors)
                } else {
                    navigate("/")
                }
            })
    }

    return(
        <div>
            <h1>Update Yourself</h1>
            <Form form={form} onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} error={error}/>
        </div>
    )
}

export default UpdateCreature; 