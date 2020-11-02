import './App.css';
import BikeListing from './components/BikeListing.jsx'

function App() {
  return (
    <div className="App">
      <BikeListing name="my touring bike" make="trek" model="520" type="touring"/>
      <BikeListing name="Lucy" make="Specialized" model="Secteur Sport" type="road"/>
      <BikeListing name="my road bike" make="Raleigh" model="Carlton" type="road"/>
    </div>
  );
}

export default App;
