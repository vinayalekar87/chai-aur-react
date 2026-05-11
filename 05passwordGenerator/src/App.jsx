import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numbersAllowed, setNumbersAllowed] = useState(false)
  const [charAllowed, setCharAllowd] = useState(false)
  const [password, setPassowrd] = useState('')

  // use ref hook
  const passowrdRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numbersAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%^&*()_+'

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassowrd(pass)
  }, [length, numbersAllowed, charAllowed, setPassowrd])

  const copyPasswordToClipboard = useCallback( () => {{
    passowrdRef.current?.select()
    navigator.clipboard.writeText(password)
    
}}, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length,numbersAllowed, charAllowed, passwordGenerator])

  return (
    <>
      
      <div className='w-full max-w-md max-auto shadow-md rounded-lg px-4 my-8 
      text-orange-500 bg-gray-700'>
        <h1 className='text-4xl text-center text-white'>Password Generator</h1>
        <div className='flex shadow-md rounded-lg mt-4 bg-gray-600 p-4'>
          <input type="text" value={password} readOnly className='outline-none w-full py-1 px-3'
          placeholder='password' ref={passowrdRef}></input>
          <button
            onClick={copyPasswordToClipboard}
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm mt-4 items-center gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" value={length} min={6} max={20} className='cursor-pointer' 
            onChange={(e)=> {setLength(e.target.value)}}></input>
            <label>Length: {length}</label>
          </div>
          <dev className='flex items-center gap-x-1'>
            <input type="checkbox" id='numberInput' checked={numbersAllowed} 
            onChange ={() => {setNumbersAllowed((prev) => !prev)}}></input>
            <label htmlFor='numberInput'>Numbers</label>
          </dev>
          <dev className='flex items-center gap-x-1'>
            <input type="checkbox" id='charInput' checked={charAllowed}
            onChange={() => {
              setCharAllowd((prev) => !prev);
            }}/>
            <label htmlFor='charInput'>Special Characters</label>
          </dev>
          </div>
      </div>
    </> 
  )
}

export default App
