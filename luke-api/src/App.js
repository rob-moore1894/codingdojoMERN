import React, {useState} from 'react';
import Axios from 'axios';
import { navigate, Router } from '@reach/router';
import DisplayComponent from './components/DisplayComponent'
import './App.css';

function App() {
  const [search,setSearch] = useState("people")
  const [id, setId] = useState("")
  const [swData, setSWData] = useState([])

  const searchAPI = (e) =>{
    e.preventDefault();
    Axios.get(`https://swapi.dev/api/${search}/${id}`)
      .then(res => {setSWData(res.data)})
      .catch(err => console.log(err))

    navigate(`/${search}/${id}`)
    // setSearch("people")
    // setId("")
  }

  return (
    <div className="App">
      <form onSubmit = {searchAPI}>
        <label htmlFor="swSearch">Search for: </label>
        <select name="swSearch" onChange={(e) => setSearch(e.target.value)}>
          <option value='people'>People</option>
          <option value='planets'>Planets</option>
          <option value='films'>Films</option>
          <option value='species'>Species</option>
          <option value='starships'>Starships</option>
          <option value='vehicles'>Vehicles</option>
        </select>
        <label htmlFor="swId"> of ID: </label>
        <input type="number" onChange={(e) => setId(e.target.value)} />
        <input type="submit" value="Search" />
      </form>
      
      <Router>
        <DisplayComponent path="/:search/:id" />
      </Router>
    </div>
  );
}

export default App;
