import React from 'react'

const Starships = (props) => {
    const {starship} = props;

    return(
        <div>
            <h1>{starship.name}</h1>
            <p>Model: {starship.model}</p>
            <p>Manufacturer: {starship.manufacturer}</p>
            <p>Crew Capacity: {starship.crew}</p>
            <p>Passenger Capacity: {starship.passengers}</p>
        </div>
    )
}

export default Starships; 