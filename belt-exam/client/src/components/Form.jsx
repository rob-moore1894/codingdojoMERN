import React from 'react';

const Form = props => {

    return(
        <div>
            <div className="border border-dark p-4">
                <form onSubmit={props.onSubmitHandler}>
                    <div className="row">
                        <div className="col-5">
                            <div className="form-group">
                                <label>Pet Name:</label>
                                <input type="text" name="name" className="form-control" onChange={props.onChangeHandler} value={props.form.name} />
                                {
                                    props.error.name ? <span className="text-danger">{props.error.name.message}</span> : ""
                                }
                            </div>
                            <div className="form-group">
                                <label>Pet Type:</label>
                                <input type="text" name="type" className="form-control" onChange={props.onChangeHandler} value={props.form.type} />
                                {
                                    props.error.type ? <span className="text-danger">{props.error.type.message}</span> : ""
                                }
                            </div>
                            <div className="form-group">
                                <label>Pet Description:</label>
                                <input type="text" name="description" className="form-control" onChange={props.onChangeHandler} value={props.form.description} />
                                {
                                    props.error.description ? <span className="text-danger">{props.error.description.message}</span> : ""
                                }
                            </div>
                            <input type="submit" value="Submit" className="btn btn-primary" />
                        </div>
                        <div className="col-2"></div>
                        <div className="col-5">
                            <p><strong>Skills (Optional)</strong></p>
                            <div className="form-group">
                                <label>Skill 1:</label>
                                <input type="text" name="skill1" className="form-control" onChange={props.onChangeHandler} value={props.form.skill1} />
                            </div>
                            <div className="form-group">
                                <label>Skill 2:</label>
                                <input type="text" name="skill2" className="form-control" onChange={props.onChangeHandler} value={props.form.skill2} />
                            </div>
                            <div className="form-group">
                                <label>Skill 3:</label>
                                <input type="text" name="skill3" className="form-control" onChange={props.onChangeHandler} value={props.form.skill3} />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;