import React, {Component} from "react";

class CardComp extends Component {
    render() {
        return(
            <div className = "container">
                <table className = "table table-bordered">
                    <tr>
                        <th>Name</th>
                        <th>Finishing Move</th>
                        <th>Current Championship</th>
                    </tr>
                    <tr>
                        <td>{this.props.cardname}</td>
                        <td>{this.props.finMove}</td>
                        <td>{this.props.currChamp}</td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default CardComp; 