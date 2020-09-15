import React from 'react'

const Task = (props) => {
    const {task, index, list, setList} = props; 

    const onClick = () => {
        setList(() => {
            return list.filter(task => list.indexOf(task) !== index)
        }); 
    }

    const onChange = () => {
        list[index].isComplete = !list[index].isComplete; 
        setList([...list])
    }
    
    return (
        <div className="container mt-2">
            <h5>{task.name}</h5>
            <div className="container">
                <label htmlFor="checkbox">Completed?</label>
                <input onChange={onChange} type="checkbox" checked={task.isComplete}/>
                <button className="btn btn-danger ml-3" onClick={onClick}>Delete</button>
            </div>
        </div>
    )
}

export default Task