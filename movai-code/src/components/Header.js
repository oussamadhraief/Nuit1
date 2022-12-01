import React from 'react'
import Navbar from './Navbar'
import sida from '../assets/sida.png'

export default function Header() {
  return (
    <header className='w-[100vw] h-[100vh] flex flex-col justify-center items-center relative'>
        <Navbar />
        <div className='bg-red-50/10 -rotate-90 z-50'>
          <img src={sida} />
        </div>
        <h1 className='text-[120px] text-red-400 z-50 shakingText'>USE PROTECTION</h1>
        <div className='flex w-1/2 justify-between items-stretch group'>
            <button className='w-fit h-fit px-3 py-4 bg-red-500 text-green-600 font-mono font-bold -skew-y-3 group-hover:translate-x-40 transition-all'>Learn about HIV Virus</button>
            <button className='w-fit h-fit px-3 py-4 bg-red-500 text-green-600 font-mono font-bold skew-y-3 group-hover:-translate-y-40 transition-all'>Subscribe to our newsletter</button>
        </div>
    </header>
  )
}
