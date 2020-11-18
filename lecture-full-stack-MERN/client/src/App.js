import React from 'react';
import Main from './views/Main.jsx';
import Create from './views/Create.jsx';
import { Router } from '@reach/router';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <Create path="/new" />
      </Router>
    </div>
  );
}

export default App;
