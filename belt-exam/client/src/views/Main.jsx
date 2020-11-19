import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = props => {
    const [pets, setPets] = useState();

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
            .then(res => {
                console.log(res.data.pets);
                setPets(res.data.pets)
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <div className="container">
            <div className="row">
                <h2 className="col-7">These pets are looking for a good home</h2> 
                <div className="col-2"></div>
                <div className="col-3">
                    <a href="/new">add a pet to the shelter</a>
                </div>
            </div>
            
            <table className = "table table-bordered">
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Actions</th>
                </tr>
                {
                    pets ?
                    pets.map((pet, i) => {
                        return <tr>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td>
                                <a href={`http://localhost:3000/pets/${pet._id}`}>Details</a>
                                &nbsp;|&nbsp;
                                <a href={`http://localhost:3000/pets/update/${pet._id}`}>Edit</a></td>
                        </tr>
                    }) : ""
                }
            </table>
        </div>
    )
}

export default Main; 