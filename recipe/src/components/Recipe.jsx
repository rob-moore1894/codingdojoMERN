import React from 'react'

const Recipe = ({title, calories, image, ingredients, mealTime}) => {
    return(
        <div className='card-group'>
            <div className='card'>
                <img className="card-img-top" src={image} alt={title} />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <ul className="card-text" style={{listStyleType:"none"}} key={ingredients.text}>
                        {ingredients.map((ingredient,i) => (
                            <li key={i}>{ingredient.text}</li>
                        ))}
                    </ul>
                    <p className="card-text">Calories: {calories.toFixed(0)}</p>
                    
                </div>
            </div>
        </div>
    );
}

export default Recipe