import React from 'react'

const Species = (props) => {
    const {species} = props;

    return(
        <div>
            <h1>{species.name}</h1>
            <p>Classification: {species.classification}</p>
            <p>Designation: {species.designation}</p>
            <p>Average Lifespan: {species.average_lifespan}</p>
            <p>Language: {species.language}</p>
        </div>
    )
}

export default Species; 