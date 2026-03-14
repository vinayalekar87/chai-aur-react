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

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-blue-500">Tailwind test</h1>
      <Card username="Channel Vinay" someprop={myObject}/>
      <Card username="Channel Vedansh"/>
    </>
  )
}

export default App
