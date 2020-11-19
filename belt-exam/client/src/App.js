import { Router } from '@reach/router';
import './App.css';
import Main from './views/Main.jsx';
import OnePet from './views/OnePet';
import NewPet from './views/NewPet.jsx';
import UpdatePet from './views/UpdatePet.jsx';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>

      <Router>
        <Main path="/" />
        <OnePet path="/pets/:_id" />
        <NewPet path="/new" />
        <UpdatePet path="/pets/update/:_id"/>
      </Router>
    </div>
  );
}

export default App;
