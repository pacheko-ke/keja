import React from 'react'

export default function Navbar() {
  return (

<>
     {/* mobile nav */}
     <ul className='text-white lg:hidden h-full bg-red-500 w-3/4 text-5xl gap-2 flex flex-col fixed top-0'>

     <li>Pricing</li>
     <li>Sign Up</li>
     <li>Login</li>
   </ul>
    <div className='bg-[#1c1b18] flex px-4 pt-4 justify-between '>

     


      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
      </svg>
      <div className=' text-white top-0 py-2 text-2xl italic '>Keja<span className='text-[#F1F252]'>.</span></div>

    </div>
    </>

  )
}
