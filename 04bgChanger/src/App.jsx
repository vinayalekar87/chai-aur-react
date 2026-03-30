import { use, useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-500" style={{ backgroundColor: color }}>
      <div className="flexed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flexed flex-col justify-center gap-2 shadow-lg rounded-lg bg-white/80 backdrop-blur-sm p-4">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "red"}}>Red
          </button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "green"}}>Green
          </button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor: "blue"}}>Blue
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
