import React, { Component } from "react";

class PersonCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        }
    }
    render(){
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
                        <td>{this.props.firstName}</td>
                        <td>{this.props.lastName}</td>
                        <td>{this.state.age}</td> {/* changed from props to state as defined above*/}
                        <td>{this.props.hairColor}</td>
                    </tr>
                </table>
                <button onClick = { () => this.setState({age: this.state.age + 1})} className = "mb-2">{this.props.firstName} {this.props.lastName}'s Birthday Button</button>
            </div>
        )
    }
}

export default PersonCard; 