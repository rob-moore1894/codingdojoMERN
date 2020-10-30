import React, { useState } from 'react';

const Form = (props) => {
    const [form, setForm] = useState({
        title: "",
        genre: "",
        description: "",
        cost: 0,
    }); 

    const inputUpdate = (e) => {
        setForm({
            ...form, 
            [e.target.name]: e.target.value
        })
    }

    const titleValidation = (titleInput) => {
        if(titleInput.length >= 5){
            return true;
        }
    }
    
    const genreValidation = (genreInput) => {
        if(genreInput.length >= 3){
            return true;
        }
    }

    const descriptionValidation = (descriptionInput) => {
        if(descriptionInput.length >= 10){
            return true;
        }
    }

    const costValidation = (costInput) => {
        return !isNaN(costInput)
    }

    const allValid = (formInput) => {
        return titleValidation(formInput.title) 
                && genreValidation(formInput.genre) 
                && descriptionValidation(formInput.description) 
                && costValidation(formInput.cost)
    }
    
    return(
        <div>
            <h1>What's your Video Game Idea?</h1>

            <form className = "col-5">
                <div className = "form-group">
                    <label>Title: </label>
                    <input className = "form-control" name="title" onChange={inputUpdate}/>
                    {/* Conditional rendering with AND operator */}
                    {!titleValidation(form.title) && <p className = "alert text-danger">Must be 5 characters</p>}
                    
                </div>
                <div className = "form-group">
                    <label>Genre: </label>
                    <input className = "form-control" name="genre" onChange={inputUpdate}/>
                    {/* Conditional rendering with Ternary operator */}
                    {genreValidation(form.genre) ? "" : <p className = "alert text-danger">Must be 3 characters</p>}
                </div>
                <div className = "form-group">
                    <label>Description: </label>
                    <input className = "form-control" name="description" onChange={inputUpdate}/>
                    {descriptionValidation(form.description) ? "" : <p className = "alert text-danger">Must be 3 characters</p>}
                </div>
                <div className = "form-group">
                    <label>Cost: </label>
                    <input className = "form-control" name="cost" onChange={inputUpdate}/>
                    {costValidation(form.cost) ? "" : <p className = "alert text-danger">Must be a number</p>}
                </div>

                {allValid(form) ? <input type="submit" className="btn btn-primary"></input> : <input type="submit" className="btn btn-danger" disabled></input>}
                
            </form>

            <div>
                <h2>Form State:</h2>
                <p>Title: {form.title}</p>
                <p>Genre: {form.genre}</p>
                <p>Description: {form.description}</p>
                <p>Cost: {form.cost}</p>
            </div>
        </div>
    )
}

export default Form; 