import React from 'react'
import MovieTable from './MovieTable'
import Pagination from './Pagination'
import NewMovie from './NewMovie'
function Movies() {
  return (
    <div>
        <NewMovie>
        </NewMovie>
        <MovieTable>
        </MovieTable>
        <Pagination>
        </Pagination>
    </div>
  )
}

export default Movies