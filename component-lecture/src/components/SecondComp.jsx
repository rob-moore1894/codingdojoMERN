import React, { Component } from "react"; 

class SecondComp extends Component {
    render(){
        return(
            <div>
                <h2>Hello from the Second Component</h2>
                <h5>I am being rendered above children</h5>
                {this.props.children}
                <h5>I am being rendered below children</h5>
            </div>
        )
    }
}

export default SecondComp; 