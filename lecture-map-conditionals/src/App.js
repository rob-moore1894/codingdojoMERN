import { useState } from 'react';
import './App.css';
import TabHeader from './components/TabHeader.jsx'


function App() {
  const [tabs, setTabs] = useState([
    {
      selected: false,
      title: "Best Tab",
      content: "Content from Best Tab"
    },
    {
      selected: false,
      title: "Mediocre Tab",
      content: "Content from Mediocre Tab"
    },
    {
      selected: false,
      title: "Worst Tab",
      content: "Content from Mediocre Tab"
    },
  ])

  const handleClick = (clickedIndex) => {
    tabs.map((tab, i) => {
      let t = tab;
      if(clickedIndex === i){
        t.selected = true;
      } else {
        t.selected = false; 
      }

      setTabs([...tabs.slice(0, i),
      t,
      ].concat(tabs.slice(i+1)))
    })
  }

  return (
    <div className="App container">
      <div className = "row justify-content-around mt-4">
        {
          tabs.map((tab, i) => {
            return <TabHeader selected = {tab.selected} title = {tab.title} index = {i} handleClick = {handleClick} className="col"/>
          })
        }
      </div>

      <div className = "mt-4">
        {
          tabs.map((tab, i) => {
            if(tab.selected){
              return <p className = "border">{tab.content}</p>
            }
          })
        }
      </div>
    </div>
  );
}

export default App;
