import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

const Main = props => {
    const [creatures, setCreatures] = useState();
    const [update, setUpdate] = useState(false); 

    useEffect(() => {
        axios.get("http://localhost:8000/api/creatures")
            .then(res => setCreatures(res.data.creatures))
    },[update])

    const removeCreature = _id => {
        axios.delete(`http://localhost:8000/api/creatures/delete/${_id}`)
            .then(res => {
                setUpdate(!update);
                console.log("Creature gone!")
            })
            .catch(err => console.log(err)) 
    }

    return(
        <div>
            <table className = "table table-bordered">
                <tr>
                    <th>Name</th>
                    <th>Species</th>
                    <th>Ability</th>
                    <th>Actions</th>
                </tr>
                {
                    creatures ? 
                    creatures.map((creat, i) => {
                        return <tr>
                                <td><a href={`http://localhost:3000/creatures/${creat._id}`}>{creat.name}</a></td>
                                <td>{creat.species}</td>
                                <td>{creat.specialAbility}</td>
                                <td><button onClick={() => removeCreature(creat._id)} className="btn btn-danger">Remove</button>&nbsp;<a href= {`http://localhost:3000/creatures/update/${creat._id}`} className="btn btn-info">Update</a></td>
                            </tr>
                    }) : ""
                    
                }
            </table>

        </div>
    )
}

export default Main; 