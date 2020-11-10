import React from 'react';

const WordNumComponent = (props) => {
    return(
        <div>
        {
            isNaN(props.input) ? <h1 style={{color:`${props.textColor}`, backgroundColor:`${props.backgroundColor}`}}>This page says: {props.input}</h1> : <h1 style={{color:`${props.textColor}`, backgroundColor:`${props.backgroundColor}`}}>The number is: {props.input}</h1>
        }
            
        </div>
    )
}

export default WordNumComponent; 