import React, { useEffect, useState } from 'react';
import axios from 'axios';

const View = (props) => {
    const [oneProduct, setOneProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props._id}`)
            .then(res => {
                console.log(res.data.product)
                setOneProduct(res.data.product)
            })
            .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <h2>{oneProduct.title}</h2>
            <h4><strong>Price:</strong> ${oneProduct.price}</h4>
            <h4><strong>Description:</strong> {oneProduct.description}</h4>
        </div>
    )
}

export default View;