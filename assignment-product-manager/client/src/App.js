import React from 'react'; 
import Main from './views/Main.jsx';
import View from './views/View.jsx';
import Update from './views/Update.jsx';
import { Router } from '@reach/router';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Main path="/"/>
        <View path="/products/:_id" />
        <Update path="/products/:_id/update"/>
      </Router>
    </div>
  );
}

export default App;
