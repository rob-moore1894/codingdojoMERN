import React, {useState} from 'react';

const BikeListing = (props) => {
    // purchases - readonly, acts as a variable
    // setPurchases - acts as a set state
    const [purchases, setPurchases] = useState(0); // By default there are 0 purchases
    const {name, make, model, type} = props; //Destructured props to eliminate the props.* below

    const purchaseBike = () => {
        setPurchases(purchases + 1); 
    }

    return(
        <div className = "card container col-4 mt-1">
            <div className = "card-body">
                <h4 className = "card-title">{name}</h4>
                <h5 className = "card-title">Make: {make}</h5>
                <h5 className = "card-title">Model: {model}</h5>
                <h5 className = "card-title">Style: {type}</h5>

                <h6 className="card-title">Sold: {purchases}</h6>
                <button className="btn btn-success" onClick={purchaseBike}>Buy Me</button>
            </div>
        </div>
    )
}

export default BikeListing;