import { useState } from 'react'
import Logo from './assets/logo.svg'
import videoFile from './assets/logo.mp4'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div >
      <video autoPlay loop muted>
      <source src={videoFile} type="video/mp4" />
      </video>
      </div>
      
     
       
    </>
  )
}

export default App
