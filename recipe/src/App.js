import React, {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Recipe from './components/Recipe'

const App = () => {
  const APP_ID = process.env.REACT_APP_APP_ID;
  const APP_KEY = process.env.REACT_APP_API_KEY;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=30`)
    const data = await response.json()
    console.log(data.hits);
    setRecipes(data.hits); 
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <div className="title">
        <h1>Recipe Search</h1>
        <p>What would you like to make today?</p>
      </div>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange= {updateSearch}/>
        <button className="search-button" type="submit">Submit</button>
      </form>
      <div className='recipes'>
        {recipes.map((recipe,i) => (
          <Recipe key={i} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} mealTime={recipe.recipe.mealTime}/>
        ))}
      </div>
    </div>
  );
}

export default App;
