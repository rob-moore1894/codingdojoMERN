import React, {useContext} from 'react';
import BoxContext from '../contexts/BoxContext';

const Boxes = props => {
    const {box} = useContext(BoxContext);

    return (
        <div>
        {
            box.map((box, i) => {
                return <div style={{backgroundColor: box, width: "4rem", height: "4rem", border: "1px solid black"}}></div>
            })
        }

        </div>
    );    
}

export default Boxes; 