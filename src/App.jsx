import './App.css'
import Home from './components/Home/Home'
import { Routes, Route } from 'react-router-dom'
import React from 'react'
import AboutMe from './components/AboutMe/AboutMe'
import NavBar from './components/NavigationBar/NavigationBar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
<NavBar />

<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<AboutMe />} />
</Routes>

<Footer className="footerComponent" />
    </>
  )
}

export default App
