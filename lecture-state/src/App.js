import './App.css';
import CardComponent from './components/CardComponent.jsx'

function App() {
  return (
    <div className="App">
      <CardComponent name = "Chuck Norris" health = {250} hb = "Chun Kuk Do"></CardComponent>
      <CardComponent name = "Jackie Chan" health = {200} hb = "Drunken Boxing"></CardComponent>
      <CardComponent name = "Bruce Lee" health = {10} hb = "Jeet Kun Do"></CardComponent>
    </div>
  );
}

export default App;
