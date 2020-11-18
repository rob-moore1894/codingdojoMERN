import React from 'react';

const Form = (props) => {
    return(
        <div>
            <form onSubmit = {props.onSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="title"><h4>Title:</h4></label>
                        <input className="form-control" name="title" onChange = {props.onChangeHandler} value={props.form.title}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price"><h4>Price:</h4></label>
                        <input className="form-control" name="price" onChange = {props.onChangeHandler} value={props.form.price}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description"><h4>Description:</h4></label>
                        <input className="form-control" name="description" onChange = {props.onChangeHandler} value={props.form.description}/>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </form>
        </div>
    )
}

export default Form; 