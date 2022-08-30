import React from 'react'
import Navbar from './Components/Navbar'
import Movies from './Components/Movies'
import Genre from './Components/Genre'
import './MovieApp.css'
function MovieApp() {
  return (
    <div className='w-full'>
        <Navbar>
        </Navbar>
        <Movies></Movies>
    </div>
  )
}

export default MovieApp