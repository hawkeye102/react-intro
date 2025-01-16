import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './component/card'
import './App.css'

function App() {
  let myObj={
    name:'rajat',
    age:'21'
  } // props dont tkae directl the values of the arrays or object throught variables 
 

  return (
    <>
    <h1 className='bg-green-400 text-yellow'>tailwind</h1>
    <Card channel="learn and code" btntext="click me"/>
    <Card channel="one two three"/> 
   


    
    </>
  )
}

export default App
