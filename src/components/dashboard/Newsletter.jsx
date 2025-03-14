import React from 'react'

export default function Newsletter() {
  return (
    <div className='flex gap-6 flex-col mx-10 mt-28 '>
        <h1 className='text-4xl italic'>Keja<span className='text-green-400'>.</span></h1>
        <h1 className='text-2xl'>Manage properties effortlessly</h1>
        <p className="text-md">Sign up to get early access to Keja  </p>
        <input type="email" placeholder='Enter email address' className='border pl-2 py-2 rounded-md invalid:border-red-500'/>
        <button className='bg-green-500 py-2 rounded-md text-white'>Get Early Access</button>



    </div>
  )
}
