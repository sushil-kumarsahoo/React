import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-4 py-8 bg-cyan-900 text-xl font-bold text-white items-center'>
      <h2 className='text-xl font-bold'>Sushil</h2>
      <div className='flex gap-8 '>
        <Link className='text-lg font-medium' to='/'>Home</Link>
        <Link className='text-lg font-medium' to='/about'>About</Link>
        <Link className='text-lg font-medium' to='/product'>Products</Link>
        <Link className='text-lg font-medium' to='/courses' >Courses</Link>
      </div>
    </div>
  )
}

export default Navbar
 