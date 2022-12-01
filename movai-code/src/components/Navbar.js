import React from 'react'
import Modal from './Modal'
import { useState } from 'react';


export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav className='flex w-[110vw] fixed justify-center gap-[10vw] pt-2 pb-4 top-[15%] -left-[5vw] mx-auto bg-slate-900 -rotate-12'>
        <div className='flex rotate-45 w-52'>
            <h1 className='text-red-600 text-3xl'>HIV</h1>
            <h1 className='text-blue-600 text-3xl'>FIGHTERS</h1>
        </div>
        <div className='flex w-1/2 items-center text-white'>
            <a href='https://www.google.com' className='mr-[5%] text-purple-700' target="_blank">INFORMATION</a>
            <p href='' className='mr-[10%] text-3xl'>Login</p>
            <a href='#iframe' className='mr-[25%] text-xs'>Home</a>
            <button onClick={e => setOpen(true)} className='text-yellow-500'>logout</button>
        </div>

        <Modal show={open} onClose={() => setOpen(false)} />
    </nav>
  )
}
