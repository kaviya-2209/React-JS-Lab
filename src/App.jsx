import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard'

function App(){
  const [name,setname]=useState("kaviya")
  const [occ,setOcc]=useState("student")
  function nameChange(){
    setname"Ravi"
    setOcc"developer"
    console.log(name)
  }
  return(
    <Dashboard name={name} occ={occ} nameChange={nameChange}></Dashboard>
  )
}

export default App
