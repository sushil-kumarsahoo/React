import React from 'react'
import { useNavigate } from 'react-router'

const About = () => {
  const navigate = useNavigate('/')


  return (
    <div>
      <button onClick={()=>{
          navigate('/')}} 
          className='font-medium bg-green-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95 '>Home page

      </button>

      <button onClick={
        ()=>{
          navigate(-1)
        }
      } className='font-medium bg-green-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95 '>back
      </button>

      <h1>About Page</h1>
    </div>
  )
}

export default About
