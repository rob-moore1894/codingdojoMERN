import React, {useState} from 'react';
import BoxContext from './contexts/BoxContext';
import BoxWrapper from './components/BoxWrapper';
import FormWrapper from './components/FormWrapper';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [box,setBox] = useState([]);
  const [color, setColor] = useState("");

  return (
    <BoxContext.Provider value={{color, setColor, box, setBox}}>
      <FormWrapper />
      <BoxWrapper />
    </BoxContext.Provider>
  );
}

export default App;
