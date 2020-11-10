import './App.css';
import { Router } from '@reach/router'; 
import HomeComponent from './components/HomeComponent.jsx'
import WordNumComponent from './components/WordNumComponent';

function App() {
  return (
    <div className="App">
      <Router>
        <HomeComponent path='/home' />
        <WordNumComponent path = '/:input' />
        <WordNumComponent path = '/:input/:textColor/:backgroundColor' />
      </Router>
    </div>
  );
}

export default App;
