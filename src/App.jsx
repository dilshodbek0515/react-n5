import { useState } from 'react'
import './App.scss'
import Header from './components/header/Header'
import Hero from "./components/hero/Hero"
import Food from "./components/food/Food"
import About from "./components/about/About"
import Menu from "./components/menu/Menu"

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Food />
      <About />
      <Menu />
    </>
  )
}

export default App
