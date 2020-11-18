import React from 'react';

const Form = (props) => {
    return(
        <div>
            <form onSubmit={props.onSubmitHandler}>
                <label>Name:</label>
                <input name="name" onChange={props.onChangeHandler} value={props.form.name}></input><br />
                <label>Type:</label>
                <input name="type" onChange={props.onChangeHandler} value={props.form.type}></input><br />
                <label>Color:</label>
                <input name="color" onChange={props.onChangeHandler} value={props.form.color}></input><br />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default Form;