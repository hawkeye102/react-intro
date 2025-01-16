import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';


import App from './App.jsx'

// what ever u write this is parsed into the custom js we have written it makesa tree 
// const reactElement={
//   type:'a',
//   props:{
//       href:'https://gmail.com',
//       target:'_blank'     this will not work becuz it is what happens behind hthe scence 
//   },
//   children:'click me to visit google'
// }// app functions runs like this which are biundled by the bundler in react background 

// lets write for the react element here for the above code 

const anotherUser="chai and code "
const  reactElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  ['click me to visit google.com' ,anotherUser]// now this is working 
   // the variables gets injected in the last 
   // u cant use here if else or like this because atthe end it is just a object 
)

createRoot(document.getElementById('root')).render(
  
   
  <App/>
    
  
)


