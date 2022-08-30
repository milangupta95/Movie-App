import React from 'react'

function Pagination() {
  return (
    <div className='mt-2 mx-auto place-self-center'>
      <button className = 'border-y-1 border-l-1 border-r-0 border-slate-500 bg-red-400 p-2 rounded-l'>
        1
      </button>
      <button className = 'border-y-1 border-l-1 border-r-0 border-slate-500 bg-red-400 p-2'>
        2
      </button>
      <button className='border-y-1 border-l-1 border-r-1 border-slate-500 rounded-r bg-red-400 p-2'>
        3
      </button>
    </div>
  )
}

export default Pagination