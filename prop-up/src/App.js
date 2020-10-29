import './App.css';
import PersonCard from './components/PersonCard.jsx';

function App() {
  return (
    <div className="App">
      <PersonCard firstName = "Io" lastName = "Shirai" age = {30} hairColor = "Brown and Red"/>
      <PersonCard firstName = "Shotzi" lastName = "Blackhart" age = {28} hairColor = "Green"/>
      <PersonCard firstName = "Serena" lastName = "Deeb" age = {34} hairColor = "Brown"/>
      <PersonCard firstName = "Thunder" lastName = "Rosa" age = {34} hairColor = "Dark brown with highlights"/>
    </div>
  );
}

export default App;
