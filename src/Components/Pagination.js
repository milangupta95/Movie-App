import React from 'react'

function Pagination(props) {
  let {content,noOfMovie} = props;
  let noOfPages = Math.ceil(content.length / noOfMovie);
  let pages = [];
  for(let i=1;i<=noOfPages;i++) {
    pages.push(i);
  }
  return (
    <div className='mt-2 mx-auto place-self-center'>
      {pages.map(function(i){
        return (
          <button className = 'border-y-1 border-l-1 border-r-0 border-slate-500 bg-red-400 p-2 rounded-l' onClick={() => props.setGlobalPageNumber(i)}>
            {i}
          </button>
        )
      })
    }
    </div>
  )
}

export default Pagination