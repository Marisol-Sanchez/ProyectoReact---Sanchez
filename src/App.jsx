import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CartWidget from './components/CartWidget'
import NavBar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'

function App() {

  return (
    <>
        <NavBar/>    
        <ItemListContainer/>      
        <Footer/>
  
    </>
  )
}

export default App
