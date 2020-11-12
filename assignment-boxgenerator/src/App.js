import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <form>
            <label htmlFor="color">Color:</label>
            <input type="text"></input>
            <input type="submit" value="Add"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
