import React from 'react';
import { Router, Link } from '@reach/router';
import HomeComponent from './components/HomeComponent';
import IntegerComponent from './components/IntegerComponent';
import WordComponent from './components/WordComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <HomeComponent path="/home" />
        <IntegerComponent path="/:id" />
        <WordComponent path=":string/:textColor/:backgroundColor" />
      </Router>
    </div>
  );
}

export default App;
