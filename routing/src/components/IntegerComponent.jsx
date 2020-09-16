import React from 'react';

const IntegerComponent = (props) => {
    if(isNaN(props.id)){
        return <h1>The word is: {props.id}</h1>
    } else {
        return <h1>The number is: {props.id}</h1>
    }
}

export default IntegerComponent