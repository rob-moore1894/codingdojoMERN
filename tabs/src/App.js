import React, {useState} from 'react';
import Tabs from './components/Tabs'

function App() {
  const [tabs, setTabs] = useState([
    {
      index: 0,
      text: "Tab 0 content is showing here",
      selected: false
    },
    {
      index: 1,
      text: "Tab 1 content is showing here",
      selected: false
    },
    {
      index: 2,
      text: "Tab 2 content is showing here",
      selected: false
    },
  ])

  const clickHandler = (tabIndex) => {
    tabs.map((tab, i) => {
      if(tabIndex === i){
        let t = tab; 
        t.selected = true; 
        setTabs([...tabs.slice(0,i), 
        t, 
        ].concat(tabs.slice(i+1)))
      } else {
        let t = tab; 
        t.selected = false; 
        setTabs([...tabs.slice(0,i), 
        t, 
        ].concat(tabs.slice(i+1)))
      }
    })
  }

  return (
    <div className="App">
      <div style={{display:'flex', justifyContent:'space-evenly'}}>
      {
        tabs.map((tab, i) => {
          return <Tabs index={i} key={i} selected={tab.selected} clickHandler={clickHandler}/>
        })  
      }
      </div>
      <div style={{textAlign:'center'}}>
        {
          tabs.map((tab, i) => {
            return tab.selected ? <h1>{tab.text}</h1> : ""
          })
        }
      </div>
      
    </div>
  );
}

export default App;
