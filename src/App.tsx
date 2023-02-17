import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './styles/dest/style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
