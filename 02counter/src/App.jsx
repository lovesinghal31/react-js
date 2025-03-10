import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  
  const addValue = () =>{
    if(counter<20){
      setCounter(counter+1);
    }
  }
  const removeValue = () =>{
    if(counter>0){
      setCounter(counter-1);
    }
  }
  const resetValue = () =>{
    setCounter(counter = 0);
  }
  return(
    <>
    <h1>Chai aur React</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addValue}>Add value</button>
    <br />
    <br />
    <button onClick={removeValue}>Remove value</button>
    <br />
    <br />
    <button onClick={resetValue}>Reset value</button>
    </>
  )
}

export default App
