import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const OnePet = props => {
    const [onePet, setOnePet] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
            .then(res => {
                console.log(res.data.pet);
                setOnePet(res.data.pet)
            })
    }, [])

    const adoptPet = _id => {
        axios.delete(`http://localhost:8000/api/pets/delete/${_id}`)
            .then(res => {
                console.log("Pet adopted!");
                navigate("/");
            })
            .catch(err => console.log(err))
    }

    return(
        <div className="container">
            <div className="row">
                <h2 className="col-6">Details about: {onePet.name}</h2> 
                <div className="col-2"></div>
                <div className="col-2">
                    <button className="btn btn-danger" onClick={() => adoptPet(onePet._id)}>Adopt {onePet.name}</button>
                </div>
                <div className="col-2">
                    <a href="/" className="btn btn-info">Home</a>
                </div>
            </div>
            <div className="border border-dark p-4">
                <div className="row">
                    <div className="col">
                        <h3><strong>Pet type:</strong></h3>
                    </div>
                    <div className="col">
                        {onePet.type}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3><strong>Description:</strong></h3>
                    </div>
                    <div className="col">
                        {onePet.description}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3><strong>Skills:</strong></h3>
                    </div>
                    <div className="col">
                        <p>{onePet.skill1}</p>
                        <p>{onePet.skill2}</p>
                        <p>{onePet.skill3}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OnePet;