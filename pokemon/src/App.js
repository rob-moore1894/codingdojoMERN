import React, { useState } from 'react';
import './App.css';

function App() {

  const [pokemon, setPokemon] = useState([])

  const callPokemon = (e) => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1050")
      .then(response => {
        console.log("Successful Call")
        return response.json()})
      .then(response => {
        console.log(response)
        setPokemon(response.results)}) // .results comes from the object within the API JSON
      .catch(error => {
        console.log(error)})
}

  return (
    <div>
      <input type="submit" value="Fetch Pokemon" onClick={callPokemon} /> 
      {
        pokemon.map((poke, i) => {
          return ( 
          <ul>
            <li key={i}>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</li>
          </ul>
          )
        })
      }
    </div>
  );
}

export default App;
