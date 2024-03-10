import { useEffect, useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import socketClient from "socket.io-client" 
import { Navigate, Route, Routes } from 'react-router-dom'
import Chat from './components/Chat'

function App() {
  let socket = useRef();
  console.log(socket);
  //const[socket, setsocket] = useState("")
  let endpoint = "http://localhost:5000"
  
  useEffect(()=>{
  socket.current = socketClient(endpoint)
  },[])
  
  return (
    <>
      <Routes>
        <Route path="/chat" element={<Chat socket = {socket}/> } />
        
        </Routes>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
