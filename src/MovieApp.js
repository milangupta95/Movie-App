import React from 'react'
import Navbar from './Components/Navbar'
import Movies from './Components/Movies'
import {Route,Routes,BrowserRouter,Navigate} from 'react-router-dom'
import './MovieApp.css'
import New from './Components/New'
import Login from './Components/Login'
function MovieApp() {
  return (
    <div className='w-full'>
      <BrowserRouter>
        <Navbar>
        </Navbar>
        <Routes>
          <Route path = "/home" element = {<Movies></Movies>}></Route> 
          <Route path = "/new" element = {<New></New>}></Route>
          <Route path = "/login" element = {<Login></Login>}></Route>
          <Route path = "/" element = {<Navigate to = "/home" replace />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default MovieApp