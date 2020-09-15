import React from 'react';

const Tabs = props => {
    const selected = {
        backgroundColor: 'black',
        color: 'white'
    }
    const unselected = {
        backgroundColor: 'white',
        color: 'black'
    }

    return (
        <div>
            <button onClick={() => props.clickHandler(props.index)} 
            style={props.selected ? selected : unselected}>Tab {props.index}</button>
        </div>
    );
}

export default Tabs; 