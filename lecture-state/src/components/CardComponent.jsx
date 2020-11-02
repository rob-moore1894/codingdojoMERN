import React, { Component } from "react";

// Create CSS Inline
const btn = {
    background: 'linear-gradient(brown, black, brown)',
    color: 'wheat',
    fontSize: 'medium',
    fontFamily: 'sans-serif', 
    height: '45px',
    borderRadius: '5px',
    boxShadow: '4px 6px 5px #888888'
}

class CardComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            health: this.props.health, 
            isAlive: "Alive"
        }
    }
    dealDamage = () => {
        this.state.health -= 10;
        this.setState({health: this.state.health});
        if(this.state.health <= 0){
            this.setState({isAlive: "Dead"});
        }
    }

    render(){
        return(
            <div>
                <h1>Name: {this.props.name}</h1>
                <h3>Health: {this.state.health}</h3>
                <h3>Martial Arts Style: {this.props.hb}</h3>
                <button style={btn} onClick = {this.dealDamage}>Attack</button>
                <h4>{this.state.isAlive}</h4>
                <hr/>
            </div>
        )
    }
}

export default CardComponent;