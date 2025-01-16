import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setcounter]=useState(5)
  // let counter=5

  const value =()=>{
    
     counter=counter+1;
     setcounter(counter)
     console.log('value added',Math.random());
  }
  const removeValue=()=>{
    setcounter(counter-1)
  }
  

  return (
    <>
   <h1>learn and code</h1>
   <h2>counter value:{counter}</h2>
   <button onClick={value}>
   
    Add Value {counter}</button>
   <br/>
   <button onClick={removeValue}>Remove Button {counter}</button>
    </>
  )
}

export default App
