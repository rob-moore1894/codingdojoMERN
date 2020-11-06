import React from 'react';

const ManyPuppies = (props) => {
    // const loopPuppies = () => {
    //     for(let i = 0; i < props.number; i++){
    //         return <img src="https://www.dogtime.com/assets/uploads/2018/10/puppies-cover-1280x720.jpg" alt="puppy" />
    //     }
    // }
    return(
        <div>
            {
                isNaN(props.number) ? <p>This page says: {props.number} </p> : <p>This page should have {props.number} puppies</p>
            }
            
            {/* {
                loopPuppies
            } */}
        </div>
    )
}

export default ManyPuppies; 