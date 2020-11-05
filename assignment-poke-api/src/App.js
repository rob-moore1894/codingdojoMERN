import './App.css';
import {useState} from 'react'; 

function App() {
  const [pokemon, setPokemon] = useState([])

  const fetchPokemon = (e) => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1050")
        .then(response => response.json())
        .then(response => setPokemon(response.results))
    }

  return (
    <div className="App">
      <div className = "container">
        <div className = "m-2">
            <button className="btn btn-primary" onClick={fetchPokemon}>Fetch Pokemon</button>
        </div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Number</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
          {
            pokemon.map((poke, i) => {
              return(
              <tr>
                <td>{i+1}</td>
                <td>{poke.name}</td>
              </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
