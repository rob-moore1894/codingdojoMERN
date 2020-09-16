import React from 'react';
import { Link } from '@reach/router'

const WordComponent = (props) => {
    if(isNaN(props.string)){
        return <h1 style={{color:`${props.textColor}`, backgroundColor:`${props.backgroundColor}`}}>The word is: {props.string}</h1>
    } else {
        return <Link to="/home">Go Back Home</Link>
    }
}

export default WordComponent; 