import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Main = (props) => {
    const [form, setForm] = useState({
        title: "",
        price: "",
        description: ""
    })
    
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res.data.products);
                setProducts(res.data.products)
            })
    }, [])
    
    const onChangeHandler = (e) => {
        e.preventDefault(); 
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(form);
        axios.post("http://localhost:8000/api/products/new", form)
            .then(res => console.log(res))
            .then(res => navigate("/"))
            .catch(err => console.log(err))
    }

    return(
        <div>
            <div className = "container">
                <h1>Product Manager</h1>
                <form onSubmit = {onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="title"><h4>Title:</h4></label>
                        <input className="form-control" name="title" onChange = {onChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price"><h4>Price:</h4></label>
                        <input className="form-control" name="price" onChange = {onChangeHandler} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description"><h4>Description:</h4></label>
                        <input className="form-control" name="description" onChange = {onChangeHandler} />
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </form>
            </div>
            <hr />
            <div className="mt-4 container">
                <ul style={{"listStyleType":"none"}}>
                {
                    products.map((product, i) => {
                        return(
                            <li key={i}><a href={`/products/${product._id}`}>{product.title}</a></li>
                                
                            )
                    })
                }
                </ul>
            </div>
        </div>
    )
}

export default Main; 


