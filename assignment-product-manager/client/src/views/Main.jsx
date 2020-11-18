import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from '../components/Form';

const Main = (props) => {
    const [form, setForm] = useState({
        title: "",
        price: "",
        description: ""
    })
    
    const [products, setProducts] = useState([])
    const [reset, setReset] = useState(0)

    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => {
                console.log(res.data.products);
                setProducts(res.data.products)
            })
    }, [reset])
    
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
            .then(res => setReset(reset+1))
            .catch(err => console.log(err))
        
    }

    const deleteOne = (_id) => {
        console.log(`Deleting ${_id}...`)
        axios.delete(`http://localhost:8000/api/products/delete/${_id}`)
            .then(res => setReset(reset+1))
            .catch(err => console.log(err)) 
    }

    return(
        <div>
            <div className = "container">
                <h1>Product Manager</h1>
                <Form onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler} form={form}/>
            </div>
            <hr />
            <div className="mt-4 container">
                <ul style={{"listStyleType":"none"}}>
                {
                    products.map((product, i) => {
                        return(
                            <li key={i} className="m-2">
                                <a href={`/products/${product._id}`}>{product.title}</a>
                                &nbsp;
                                <button className="btn btn-danger" onClick={() => deleteOne(product._id)}>Delete</button>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </div>
    )
}

export default Main; 


