import React, {useContext} from 'react';
import BoxContext from '../contexts/BoxContext';

const BoxForm = props => {
    const {color, setColor, box, setBox} = useContext(BoxContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setBox(b => [...b, color])
        setColor('');
    }


    return (
        <form className="col-5 mx-auto" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor='color'>Color:</label>
                <input 
                    type="text" 
                    className='form-control' 
                    onChange={(e) => setColor(e.target.value)} 
                    value={color}/>
            </div>  
            <input type="submit" value="Add Box" className="btn btn-primary" />  
        </form>
    );
}

export default BoxForm