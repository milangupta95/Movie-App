import React from 'react'
import {useState,useEffect} from 'react'

function MovieTable(props) {
  const {loading,content,filteredContent,setContent} = props;
  const deleteContent = (movieIdTBD) => {
    let oldContent = content;
    let newContent = oldContent.filter((movie) =>  {
      return (movie._id != movieIdTBD)
    });
    setContent(newContent);
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
                      <button className = "text-center border bg-red-400 p-2 hover:bg-red-500 rounded" onClick={() => deleteContent(movie._id)}>
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