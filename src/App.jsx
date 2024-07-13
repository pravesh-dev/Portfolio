import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Footer from './Components/Footer'
import Projects from './Components/Projects'
import Resume from './Components/Resume'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Resume/>
      <Footer/>
    </div>
  )
}

export default App
