import React from 'react'
import { useState } from 'react'


export default function Navbar() {
  const [navOpen,openNavbar] = useState(false)
  const openNav = ()=>{
    openNavbar(!navOpen)
  }

  return (
    
   

    <>
      {/* mobile nav */}
      <ul className={navOpen ? 'text-white lg:hidden h-full bg-[#1c1b18] w-3/4 text-5xl gap-2 flex flex-col fixed top-0':'text-white hidden h-full bg-red-500 w-3/4 text-5xl gap-2  flex-col fixed top-0'}>
      <h1 className='absolute w-full text-right pr-6 text-4xl' onClick={openNav}>x</h1>
        <div className=' text-white top-0 py-2  italic mb-10 mt-10'>Keja<span className='text-[#F1F252]'>.</span></div>

        <li>Pricing</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul>
      <div className='bg-[#1c1b18] flex px-4 pt-4 justify-between '>




        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white" onClick={openNav}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
        </svg>
        <div className=' text-white top-0 py-2 text-2xl italic '>Keja<span className='text-[#F1F252]'>.</span></div>

      </div>
    </>

  )
}
