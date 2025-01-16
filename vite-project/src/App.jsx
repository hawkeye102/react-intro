import { Fav } from "./Fav"
import Test from "./test"
import { One } from "./Fav"
import React from "react"



function App() {
  
  return (
   <>
   <Test/>
   <Fav/>
   {One}
   
   </>
  )  // <One/>  one is not a component it is just a constant so only use {} 
}

export default App // default exports 
