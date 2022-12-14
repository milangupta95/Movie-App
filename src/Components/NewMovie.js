import React, { useState } from 'react'
import {Link} from 'react-router-dom'
function NewMovie(props) {
  const [searchText,setsearchText] = useState();
  const [numberOfMovie,setnumberOfMovie] = useState(4);

  const changeSearchText = (e) => {
    setsearchText(e.target.value);
    props.setGlobalSearch(e.target.value);
  }

  const changeNumberOfMovie = (e) => {
    setnumberOfMovie(e.target.value);
    props.setGlobalMovieNumber(e.target.value);
  }

  return (
    <div>
      <Link to = "/new"><button className='bg-blue-500 p-2 border border-black-1000 rounded w-20 m-5'>New</button></Link>
      <input className = "border-2 border-black-1000 rounded m-2 h-10 p-2" type = "text" value = {searchText} name = "" id = "" onChange = {changeSearchText}/>
      <input className = "border-2 border-black-1000 rounded m-2 h-10 p-2" type = "Number" value = {numberOfMovie} name = "" id = "" onChange = {changeNumberOfMovie}/>
    </div>
  )
}

export default NewMovie