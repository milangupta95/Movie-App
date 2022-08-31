import React from 'react'
import MovieTable from './MovieTable'
import Pagination from './Pagination'
import NewMovie from './NewMovie'
import {useState,useEffect} from 'react'
import Genre from './Genre'
function Movies() {
  const [searchText,setsearchText] = useState("");
  const [movieNumber,setMovie] = useState(4);
  const [cGenre,setcGenre] = useState("");
  const [cPage,setcPage] = useState(1);
  const setGlobalPageNumber = (pageNumber) => {
    setcPage(pageNumber);
  }

  const setGlobalSearch = (globalsearchText) => {
    setsearchText(globalsearchText);
    setcPage(1);
  }

  const setGlobalMovieNumber = (MovieNumber) => {
    setMovie(MovieNumber);
    setcPage(1);
  }

  const setCurrGenre = (nGenre) => {
    console.log(nGenre);
    if(nGenre == "All Genre"){
      setcGenre("");
      setcPage(1);
    } else {
      setcPage(1);
      setcGenre(nGenre);
    }
  }
  //************************* Movies Table *****************************************
  
  const [loading,setLoading] = useState(true);
  const [content,setContent] = useState("");
  useEffect(async function() {
    let response = await fetch("https://react-backend101.herokuapp.com/movies");
    response = await response.json();
    setContent(response.movies);
    setLoading(false);
  },[]);

  let filteredContent;
  if(content != "") {
    filteredContent = content;
    // Filter on The Basis of Genre
    if(cGenre != "") {
      filteredContent = filteredContent.filter(function(movie) {
        if(movie.genre.name == cGenre) {
          return true;
        } else {
          return false;
        }
      })
    }
    //Searching
    if(searchText != "") {
      console.log(searchText);
      filteredContent = content.filter(function(movie) {
        let movieinLowerCase = movie.title.toLowerCase();
        let searchTextinLowerCase = searchText.toLowerCase();
        return movieinLowerCase.includes(searchTextinLowerCase);
      });
      console.log(filteredContent);
    }
    // Slicing 
    let sidx = (cPage - 1) * movieNumber;
    let eidx = sidx + movieNumber;
    console.log(sidx);
    filteredContent = filteredContent.slice(sidx,eidx);
  }

  //************************* Movies Table *****************************************
  return (
    <div className = 'flex'>
        <div>
          <Genre setCurrGenre = {setCurrGenre}></Genre>
        </div>
        <div>
          <NewMovie setGlobalSearch = {setGlobalSearch} 
          setGlobalMovieNumber = {setGlobalMovieNumber}>
          </NewMovie>
          <MovieTable 
            content = {content}
            loading = {loading} setLoading ={setLoading}
            filteredContent = {filteredContent} setContent = {setContent}
           >
          </MovieTable>
          <Pagination setGlobalPageNumber = {setGlobalPageNumber}
          content = {content}
          noOfMovie = {movieNumber}
          >
          </Pagination>
        </div>
    </div>
  )
}

export default Movies