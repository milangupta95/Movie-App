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
        <div className='flex flex-row w-full'>
            <Genre className = 'basis-1/4'/>
            <Movies className = 'basis-3/4'/>
        </div>
    </div>
  )
}

export default MovieApp