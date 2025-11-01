import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='main'>
      <h3>Sushilkumar</h3>
      <div className='navbar'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
