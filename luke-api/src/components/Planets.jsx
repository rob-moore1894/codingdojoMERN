import React from 'react'

const Planets = (props) => {
    const {planet} = props;

    return(
        <div>
            <h1>{planet.name}</h1>
            <p>Climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface Water: {planet.surface_water}</p>
            <p>Population: {planet.population}</p>
        </div>
    )
}

export default Planets; 