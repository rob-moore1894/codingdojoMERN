import React from 'react';

const People = (props) => {
    const {people} = props; 

    return (
        <div>
            <h1>{people.name}</h1>
            <p>Height: {people.height}</p>
            <p>Mass: {people.mass}</p>
            <p>Hair Color: {people.hair_color}</p>
            <p>Skin Color: {people.skin_color}</p>
        </div>
    )
}

export default People; 