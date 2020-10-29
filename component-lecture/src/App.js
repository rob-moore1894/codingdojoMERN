import logo from './logo.svg';
import './App.css';
import FirstComp from './components/FirstComp.jsx'
import SecondComp from './components/SecondComp.jsx';
import CardComp from './components/CardComp.jsx';

function App() {
  return (
    <div className="App">
      <FirstComp />
      <SecondComp>  
        <CardComp cardname = "Adam Page" finMove = "Buckshot Lariat" currChamp = "None"/>
        <CardComp cardname = "Kenny Omega" finMove = "One-winged Angel" currChamp = "AAA Mega Champion" />
        <CardComp cardname = "Hikaru Shida" finMove = "Shiny Wizard" currChamp = "AEW Women's Champion" />
      </SecondComp>
    </div>
  );
}

export default App;
