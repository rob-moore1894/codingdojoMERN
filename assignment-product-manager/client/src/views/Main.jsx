import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = (props) => {
    const [form, setForm] = useState({
        title: "",
        price: 1,
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
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    
    const onSubmitHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/products/new", form)
        .then(res => console.log("Product Added!"))
        .catch(console.log("Something went wrong!"))
    }

    return(
        <div>
            <div className = "container">
                <h1>Product Manager</h1>
                <form onSubmit = {onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="title"><h4>Title:</h4></label>
                    <input className="form-control" onChange = {onChangeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="price"><h4>Price:</h4></label>
                    <input className="form-control" onChange = {onChangeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="description"><h4>Description:</h4></label>
                    <input className="form-control" onChange = {onChangeHandler} />
                </div>
                <input type="submit" value="Submit" className="btn btn-primary" />
                </form>
            </div>

            <div className="mt-4 container">
                <table className="table table-bordered">
                <thead>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                </thead>
                <tbody>
                {
                    products.map((product, i) => {
                        return(
                            <tr>
                                <td>{product.title}</td>
                                <td>${product.price}</td>
                                <td>{product.description}</td>
                            </tr>
                            )
                    })
                }
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default Main; 


