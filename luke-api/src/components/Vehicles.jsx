import React from 'react'

const Vehicles = (props) => {
    const {vehicle} = props;

    return(
        <div>
            <h1>{vehicle.name}</h1>
            <p>Model: {vehicle.model}</p>
            <p>Manufacturer: {vehicle.manufacturer}</p>
            <p>Crew Capacity: {vehicle.crew}</p>
            <p>Passenger Capacity: {vehicle.passengers}</p>
        </div>
    )
}

export default Vehicles; 