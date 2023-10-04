import React from 'react'
import {GiWhiteBook} from 'react-icons/gi'
export default function Header() {
  return (
     <>
      <div className='py-6'>
          <div className='flex items-center justify-center gap-4'>
            <GiWhiteBook size={70} color='#172554'/>
            <h1 className='text-[2.8rem] font-medium text-indigo-950'>My Dictionary</h1>
          </div>
          <p className='text-xl text-center text-slate-700 mt-4 ml-2'>Created by Bibhav Shrestha</p>
      </div>
     </>
  )
}
