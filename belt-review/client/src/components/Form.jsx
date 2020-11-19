import React from 'react';

const Form = props => {
    return(
        <div>
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <form onSubmit={props.onSubmitHandler}>
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" name="name" className="form-control" onChange={props.onChangeHandler} value={props.form.name}/>
                            {
                                props.error.name ? <span className="text-danger">{props.error.name.message}</span> : ""
                            }
                        </div>
                        <div className="form-group">
                            <label>Species:</label>
                            <input type="text" name="species" className="form-control" onChange={props.onChangeHandler} value={props.form.species}/>
                            {
                                props.error.species ? <span className="text-danger">{props.error.species.message}</span> : ""
                            }
                        </div>
                        <div className="form-group">
                            <label>Role:</label>
                            <input type="text" name="role" className="form-control" onChange={props.onChangeHandler} value={props.form.role}/>
                            {
                                props.error.role ? <span className="text-danger">{props.error.role.message}</span> : ""
                            }
                        </div>
                        <div className="form-group">
                            <label>Special Ability:</label>
                            <input type="text" name="specialAbility" className="form-control" onChange={props.onChangeHandler} value={props.form.specialAbility}/>
                            {
                                props.error.specialAbility ? <span className="text-danger">{props.error.specialAbility.message}</span> : ""
                            }
                        </div>
                        <div className="form-group">
                            <label>Age:</label>
                            <input type="text" name="age" className="form-control" onChange={props.onChangeHandler} value={props.form.age}/>
                            {
                                props.error.age ? <span className="text-danger">{props.error.age.message}</span> : ""
                            }
                        </div>
                        <div className="form-group">
                            <label>Catch Phrase:</label>
                            <input type="text" name="catchPhrase" className="form-control" onChange={props.onChangeHandler} value={props.form.catchPhrase}/>
                            {
                                props.error.catchPhrase ? <span className="text-danger">{props.error.catchPhrase.message}</span> : ""
                            }
                        </div>
                        <input type="submit" value="Submit" className="btn btn-info" />
                    </form>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    )
}

export default Form;