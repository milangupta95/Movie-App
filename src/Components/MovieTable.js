import React from 'react'
import {useState,useEffect} from 'react'

function MovieTable(props) {
  const [loading,setLoading] = useState(true);
  const [content,setContent] = useState("");

  useEffect(async function() {
    let response = await fetch("https://react-backend101.herokuapp.com/movies");
    response = await response.json();
    setContent(response);
    setLoading(false);
  },[]);
  let searchText = props.searchText;
  let movieNumber = props.movieNumber;
  let cGenre = props.cGenre;

  let filteredContent;

  if(content != "") {
    filteredContent = content.movies;

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
      filteredContent = content.movies.filter(function(movie) {
        let movieinLowerCase = movie.title.toLowerCase();
        let searchTextinLowerCase = searchText.toLowerCase();
        return movieinLowerCase.includes(searchTextinLowerCase);
      });
      console.log(filteredContent);
    }
    // Slicing 
    filteredContent = filteredContent.slice(0,movieNumber);
  }

  return (
    <div>
      {
      loading ? <div>Loading...</div> : 
        <div>
          <table className='table-auto border border-collapse w-full'>
            <thead>
              <tr>
                <th className='border p-1'>#</th>
                <th className='border p-1'>Title</th>
                <th className='border p-1'>Genre</th>
                <th className='border p-1'>Stock</th>
                <th className='border p-1'>Rate</th>
              </tr>
            </thead>
            <tbody>
              {filteredContent.map(function (movie,idx) {
                return(
                  <tr>
                    <td className = "text-center border p-1">{idx + 1}</td>
                    <td className = "text-center border p-1">{movie.title}</td>
                    <td className = "text-center border p-1">
                      {
                        movie.genre.name
                      }
                    </td>
                    <td className = "text-center border p-1">{movie.numberInStock}</td>
                    <td className = "text-center border p-1">{movie.dailyRentalRate}</td>
                    <td className = "text-center border p-1">
                      <button className = "text-center border bg-red-400 p-2 hover:bg-red-500 rounded">
                        Delete
                        </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      }
    </div>
  )
}

export default MovieTable