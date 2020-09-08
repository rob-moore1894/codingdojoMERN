import React, {Component} from 'react';
import './App.css';
import PersonCard from './components/personcard.jsx';

class App extends Component{
  constructor(props){
    super(props);

    this.state = {
      person: []
    }
  }

    render(){
      return(
        <div>
          <PersonCard firstName="Kenny" lastName="Omega" age={36} hairColor="Blonde Highlights"/>
          <PersonCard firstName="Cody" lastName="Rhodes" age={35} hairColor="Bleached Blonde"/>
          <PersonCard firstName="Matt" lastName="Jackson" age={35} hairColor="Brown"/>
          <PersonCard firstName="Nick" lastName="Jackson" age={31} hairColor="Brown"/>
        </div>
      )
    }
  }

export default App; 
