import React from 'react';

const DeleteButton = (props) => {
    return(
        <div>
            <button className="btn btn-danger" delete={props.deleteOne(props._id)}>Delete</button>
        </div>
    )
}

export default DeleteButton; 