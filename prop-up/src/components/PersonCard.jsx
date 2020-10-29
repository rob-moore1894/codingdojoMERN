import React, { Component } from "react";

class PersonCard extends Component{
    render(){
        return(
            <div className="container">
                <table className="table table-bordered">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Hair Color</th>
                    </tr>
                    <tr>
                        <td>{this.props.firstName}</td>
                        <td>{this.props.lastName}</td>
                        <td>{this.props.age}</td>
                        <td>{this.props.hairColor}</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default PersonCard; 