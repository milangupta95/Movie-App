import React from 'react'
import {useState,useEffect} from 'react'

function MovieTable() {
  const [loading,setLoading] = useState(true);
  const [content,setContent] = useState("");

  useEffect(async function() {
    let response = await fetch("https://react-backend101.herokuapp.com/movies");
    response = await response.json();
    let data = JSON.stringify(response);
    setContent(data);
    setLoading(false);
  },[]);

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
              {JSON.parse(content).movies.map(function (movie,idx) {
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