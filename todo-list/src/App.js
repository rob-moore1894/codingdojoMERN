import React, {useState} from 'react';
import Input from './components/Input';
import Task from './components/Task';  
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [list, setList] = useState([])

  return (
    <div className="App">
      <Input list={list} setList ={setList}/>
      {
        list.map((task,i) => (
          <Task task={task} setList={setList} index={i} list={list}/>
        ))
      }
    </div>
  );
}

export default App;
