import './App.css';
import { Router } from '@reach/router'
import PuppiesComponent from './components/PuppiesComponents';
import KittenComponent from './components/KittenComponent.jsx';
import ManyPuppies from './components/ManyPuppies.jsx';

function App() {
  return (
    <div className="App">
    <h1>Hello from the main page</h1>
      <Router>
        {/* Anything inside this router tag will link to another page */}
        <PuppiesComponent path="/puppy"/>
        <KittenComponent path="/kitten"/>
        <ManyPuppies path="/:number" />
      </Router>
    </div>
  );
}

export default App;
