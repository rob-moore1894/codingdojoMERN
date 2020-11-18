import axios from 'axios';
import React, { useState } from 'react';
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

            <form onSubmit={onSubmitHandler}>
                <label>Name:</label>
                <input name="name" onChange={onChangeHandler}></input><br />
                <label>Type:</label>
                <input name="type" onChange={onChangeHandler}></input><br />
                <label>Color:</label>
                <input name="color" onChange={onChangeHandler}></input><br />
                <input type="submit" value="Add Plant"/>
            </form>
        </div>
    )
}

export default Create; 