import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = (props) => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/plants")
            .then(res => {
                console.log(res.data.plants);
                setPlants(res.data.plants)})
            .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <h1>Here's all my lovely plants</h1>
            <ul>
                {
                    plants.map((plant, i) => {
                        return <li key={i}>{plant.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Main; 