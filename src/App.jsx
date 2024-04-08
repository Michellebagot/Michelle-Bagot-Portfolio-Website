import './App.css'
import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import AboutMe from './components/AboutMe/AboutMe'

function App() {

  return (
    <>
<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<AboutMe />} />
      


</Routes>
    </>
  )
}

export default App
