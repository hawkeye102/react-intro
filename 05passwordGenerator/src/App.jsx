import { useState,useCallback,useEffect,useRef } from 'react'

import './App.css'


function App() {
  const [length, setlength] = useState(8)
  const [number, setnumber] =useState(false);
  const [char,setchar]=useState(false);
  const [password,setpassword]=useState("")

  //useRef hook

  const passwordRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
    if (number) str += "0123456789";
    if (char) str += "@!$#%/_*^(){}?<>";
  
    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length); // Fix the index generation
      pass += str.charAt(charIndex);
    }
  
    setpassword(pass);
  }, [length, number, char]);

  const copyPasswordtoClipboard=useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  
  
    
   

    useEffect(()=>{
      passwordGenerator();

    },[length,number,char,passwordGenerator])

  

  


  return (
    <>
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
    <h1 className='text-white text-center my-3'>Password Generator</h1>

  <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input type="text"
    value={password}
    className='outline-none w-full py-1 px-1'
    placeholder='password'
    readOnly
    ref={passwordRef} />
    <button onClick={copyPasswordtoClipboard}
    className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
  </div>

  <div className='flex text-sm gap-x-2'>

    <div className='flex items-center gap-x-1'>
      <input 
      type="range"
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>{setlength(e.target.value)}}/>
      <label>Length:{length}</label>
    </div>

    <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox"
      defaultChecked={number}
      id='numberinput'
      
      className='cursor-pointer'
      onChange={(e)=>{setnumber((prev)=>!prev)}}/>
      <label htmlFor='numberinput' >Number</label>
    </div>

    <div className='flex items-center gap-x-1'>
      <input 
      type="checkbox"
      defaultChecked={char}
      id='characterinput'
      
      className='cursor-pointer'
      onChange={(e)=>{setchar((prev)=>!prev)}}/>
      <label htmlFor='characterinput' >Character</label>
    </div>

  </div>
</div>

    </>
  )
}

export default App
