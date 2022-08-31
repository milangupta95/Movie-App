import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='p-2 h-14 mb-5 bg-black text-white flex'>
      <Link to = "/home"><h1 className='mr-5 text-3xl'>IMDB</h1></Link>
      <Link to = "/login"><button className={`
      p-2 
      bg-blue-400 
      rounded 
      border-1 
      border-red-400
      hover:bg-blue-600`}>Login</button></Link>
    </nav>
  )
}

export default Navbar