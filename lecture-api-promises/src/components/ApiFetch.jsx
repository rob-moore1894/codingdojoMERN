import React, { useEffect } from 'react';
import axios from 'axios';

const ApiFetch = () => {
        
    // Example Promise
    // const noMondays = new Promise((resolve, reject) => {
    //     if(new Date().getDay() != 1){
    //         resolve("Good, it's not Monday"); 
    //     } else {
    //         reject("Case of the Mondays"); 
    //     }
    // })

    // noMondays
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))

    // Basic Fetch
    // fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
    //     .then(response => { return response.json(); })
    //     .then(response => { console.log(response); })
    //     .catch(err => { console.log(err) })

    // useEffect
    // useEffect(() => {
    //     fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
    //         .then(response => response.json())
    //         .then(response => console.log(response.results))
    // }, [])

    // Axios Method
    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then(response => console.log(response.data.results))
            .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <h1>Hello from ApiFetch</h1>
        </div>  
    )
    
}

export default ApiFetch; 