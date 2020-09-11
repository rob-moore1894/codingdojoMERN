import React, { useState } from 'react';
import Axios from 'axios'
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([])

  const callPokemon = () => {
    Axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1050")
    .then(response => { setPokemon(response.data.results) })
    .catch(err => { console.log(err) })
}

  return (
    <div>
      <input type="submit" value="Fetch Pokemon" onClick={callPokemon} /> 
      {
        pokemon.map((poke, i) => {
          return ( 
          <ul>
            <li key={i} >{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</li>
          </ul>
          )
        })
      }
    </div>
  );
}

export default App;
