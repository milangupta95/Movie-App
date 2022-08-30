import React from 'react'
import {useState,useEffect} from 'react'

function Genre(props) {
  const [allGenre,setallGenre] = useState([]);
  const [loading,setLoading] = useState(true);


  useEffect(async function() {
    let response = await fetch("https://react-backend101.herokuapp.com/genres");
    response = await response.json();

    setallGenre(response.genres);
    setLoading(false);
  },[]);
  return (
    <div className = "genre">

      <div className = "mr-6 w-40 border-2 p-2 cursor-pointer" onClick = {(e) => props.setCurrGenre("All Genre")}>All Genre</div>
      {loading ? 
      <></>:
      <>
      {
        allGenre.map(function(genre) {
          return (
            <div className = "mr-6 w-40 border-2 border-t-0 p-2 cursor-pointer" onClick={(e) => props.setCurrGenre(genre.name)}>{genre.name}</div>
          )
        }
      )}
      </>
}
    </div>
  )
}

export default Genre;