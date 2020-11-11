import './App.css';
import { useState } from 'react';
import Axios from 'axios';
import { navigate, Router } from '@reach/router'; 
import DisplayComponent from './components/DisplayComponent.jsx'

function App() {
  const [form, setForm] = useState({
    search: "",
    id:  ""
  })

  const [swData, setSWData] = useState([])

  const inputUpdate = (e) => {
    setForm({
        ...form, 
        [e.target.name]: e.target.value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    Axios.get(`https://swapi.dev/api/${form.search}/${form.id}`)
      .then(res => setSWData(res.data))
      .then(res => navigate(`/${form.search}/${form.id}`))
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <div className = "container mt-4">
        <form className ="form-inline" onSubmit = {submitHandler}>
          <label htmlFor="search">Search for: </label>
          <select className="form-control m-2" name="search" onChange={inputUpdate}>
            <option>Select a Category:</option>
            <option value='people'>People</option>
            <option value='planets'>Planets</option>
            <option value='films'>Films</option>
            <option value='species'>Species</option>
            <option value='starships'>Starships</option>
            <option value='vehicles'>Vehicles</option>
          </select>
          <label htmlFor="id"> of ID: </label>
          <input className = "form-control m-2" name="id" onChange={inputUpdate} />
          <input className = "btn btn-primary" type="submit" value="Search" />
        </form>
      </div>

      <Router>
        <DisplayComponent path="/:search/:id" />
      </Router>
    </div>
    
  );
}

export default App;
