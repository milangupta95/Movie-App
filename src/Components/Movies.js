import React from 'react'
import MovieTable from './MovieTable'
import Pagination from './Pagination'
import NewMovie from './NewMovie'
import {useState} from 'react'
import Genre from './Genre'
function Movies() {
  const [searchText,setsearchText] = useState("");
  const [movieNumber,setMovie] = useState(4);
  const [cGenre,setcGenre] = useState("");
  
  const setGlobalSearch = (globalsearchText) => {
    setsearchText(globalsearchText);
  }

  const setGlobalMovieNumber = (MovieNumber) => {
    setMovie(MovieNumber);
  }

  const setCurrGenre = (nGenre) => {
    console.log(nGenre);
    if(nGenre == "All Genre"){
      setcGenre("");
    } else {
      setcGenre(nGenre);
    }
  }

  return (
    <div className = 'flex'>
        <div>
          <Genre setCurrGenre = {setCurrGenre}></Genre>
        </div>
        <div>
          <NewMovie setGlobalSearch = {setGlobalSearch} setGlobalMovieNumber = {setGlobalMovieNumber}>
          </NewMovie>
          <MovieTable searchText = {searchText} movieNumber = {movieNumber} cGenre = {cGenre}>
          </MovieTable>
          <Pagination>
          </Pagination>
        </div>
    </div>
  )
}

export default Movies