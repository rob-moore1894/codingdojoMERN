import React from 'react'; 
import Main from './views/Main.jsx';
import View from './views/View.jsx';
import { Router } from '@reach/router';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <View path="/products/:_id" />
      </Router>
    </div>
  );
}

export default App;
