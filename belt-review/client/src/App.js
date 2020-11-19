import './App.css';
import Main from './views/Main.jsx'; 
import OneCreature from './views/OneCreature.jsx';
import NewCreature from './views/NewCreature.jsx';
import UpdateCreature from './views/UpdateCreature.jsx';
import { Router, Link } from '@reach/router'; 
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div className = "jumbotron">
        <h1>Welcome to Plenty O' Creatures</h1>
        <Link to= "/"><h4 className="navig">Home</h4></Link> &nbsp;| &nbsp;      
        <Link to= "/new"><h4 className="navig">Create</h4></Link>
      </div>
      
      <Router>
        <Main path="/" />
        <OneCreature path="creatures/:_id" />
        <NewCreature path="/new" />
        <UpdateCreature path="/creatures/update/:_id" />
      </Router>
    </div>
  );
}

export default App;
