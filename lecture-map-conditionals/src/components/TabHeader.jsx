import React from 'react';

const TabHeader = (props) => {
    const selectedStyle = {
        backgroundColor : "seagreen"
    }

    const nonSelectedStyle = {
        backgroundColor : "grey"
    }

    return(
        <div style={props.selected ? selectedStyle : nonSelectedStyle} onClick = {() => props.handleClick(props.index)}>
            Tab # {props.index} : {props.title}
        </div>
    )
}

export default TabHeader;