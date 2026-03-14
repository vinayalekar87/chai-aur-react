import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card';

function App() {
  const [count, setCount] = useState(0)
  let myObject = {
  name: "Vinay Aleakr",
  age: 38,
  city: "Pune"
  }

  const addValue = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
  }

  const removeValue = () => {
    setCount(prevCount => prevCount - 1);
    setCount(prevCount => prevCount - 1);
    setCount(prevCount => prevCount - 1);
    setCount(prevCount => prevCount - 1);
  }


  return (
    <>
      <h1 className="text-3xl font-bold underline bg-blue-500">Tailwind test</h1>
      <Card username="Channel Vinay" someprop={myObject}/>
      <Card username="Channel Vedansh"/>
      <button onClick={addValue} className="px-4 py-2 bg-green-500 text-white rounded-lg mt-4">
        Count: {count}
      </button>
      <button onClick={removeValue} className="px-4 py-2 bg-red-500 text-white rounded-lg mt-4 ml-2">
        Decrease Count
      </button>
      <p>footer: {count}  </p>
    </>
  )
}

export default App
