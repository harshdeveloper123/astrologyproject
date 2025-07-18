import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home';
import About from './Pages/About'
import Contact from './Pages/Contact';
import Services from './Pages/Services'
import Footer from './Components/Footer';



function App() {
  
  return (
    
    <>
    
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
     
    </>
     
  )
}

export default App
