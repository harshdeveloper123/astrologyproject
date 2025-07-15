import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { Menu, X } from 'lucide-react'  // icon library, small and clean

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='w-full bg-gradient-to-r from-orange-200 to-yellow-600 text-black'>
      <div className='flex justify-between items-center p-4'>
        <h1 className='text-2xl font-bold'>Astro</h1>
        
        {/* Desktop Links */}
        <div className='navlinks hidden md:flex gap-10'>
          <span><Link to='/'>Home</Link></span>
          <span><Link to='/services'>Services</Link></span>
          <span><Link to='/about'>About</Link></span>
          <span><Link to='/contact'>Contact</Link></span>
        </div>

        {/* Mobile menu button */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className='flex flex-col items-center gap-4 pb-4 md:hidden'>
          <span><Link to='/' onClick={() => setIsOpen(false)}>Home</Link></span>
          <span><Link to='/services' onClick={() => setIsOpen(false)}>Services</Link></span>
          <span><Link to='/about' onClick={() => setIsOpen(false)}>About</Link></span>
          <span><Link to='/contact' onClick={() => setIsOpen(false)}>Contact</Link></span>
        </div>
      )}
    </div>
  )
}

export default Navbar
