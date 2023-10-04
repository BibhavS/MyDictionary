import React from 'react'

export default function SearchBar() {
  return (
     <>
     <div className='mt-8 flex justify-center'>
        <input type="text" className='w-4/5 border-2 border-slate-500 outline-none rounded-2xl text-xl p-2' placeholder='Search any word...'/>
     </div>
     </>
  )
}
