//run the below code in app.jsx file to see the output of this file
import React,{useState} from 'react'

function App() {
  // const nameStateVariable= useState("Mayuri");
  // const name = nameStateVariable[0];
  // const setName = nameStateVariable[1];
  const [name,setName] = useState("Mayuri");
  const [roll,setRoll] = useState(101);
  const handleClick=()=>{
    setName("Sham");
    setRoll(roll+1);
  };
  return (
  <React.Fragment>
    <h1>Name:{name} </h1>
    <h2>Roll:{roll}</h2>
    <button type="button" onClick={handleClick}>change</button>
  </React.Fragment>
  );
}
export default App;

//run belown code in main.jsx file to see the output of this file

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App consumer={false} /> */}
    
    <App />
  </StrictMode>,
)

