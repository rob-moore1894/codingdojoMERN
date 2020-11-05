import './App.css';
import {useState} from 'react'; 
import Axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState([])

  const fetchPokemon = (e) => {
    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=1050")
        .then(response => setPokemon(response.data.results))
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
                <td>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</td>
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
