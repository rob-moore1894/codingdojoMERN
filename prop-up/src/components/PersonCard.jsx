import React, { useState } from "react";

// Refactored to functional component
// - Changed 'class' to 'const' and created a function
// - Removed constructor, destructured props, created an array for age and setAge
// - Removed render()
const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props;

    return(
        <div className="container p-2">
            <table className="table table-bordered">
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Hair Color</th>
                </tr>
                <tr>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{age}</td>
                    <td>{hairColor}</td>
                </tr>
            </table>
            
        </div>
    )
}


export default PersonCard; 