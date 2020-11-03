import './App.css';
import Ingredient from './components/Ingredient.jsx'
import { useState } from 'react';

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [ingURL, setIngURL] = useState("");
  const [name, setName] = useState(""); 

  const addToSandwich = (e) => {
    e.preventDefault(); 
    setIngredients([...ingredients, {
      name: name,
      location: ingURL
      }]);
  }

  const onClickDelete = (index) => {
    console.log(`you clicked item # ${index}`)
    setIngredients([...ingredients.slice(0,index)].concat(ingredients.slice(index+1)))
    }

  return (
    <div className="App">
      <div className="container d-flex justify-content-center bg-light mt-4">
        <form onSubmit={addToSandwich}>
          <div className="form-group">
            <input 
              className="form-control" 
              placeholder="What's on your sandwich??" 
              onChange={(e) => setName(e.target.value)}>
            </input>
          </div>

          <div className="form-group">
            <input 
              className="form-control" 
              placeholder="Enter URL??" 
              onChange={(e) => setIngURL(e.target.value)}>
            </input>
          </div>
          <div className="form-group">
            <input className="btn btn-primary" type="submit"></input>
          </div>
        </form>

        <div className="d-flex flex-wrap">
          {
            ingredients.map((ing, i) => {
              return <Ingredient source={ing.location} onClickDelete={onClickDelete} index={i}/>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
