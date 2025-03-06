import React from 'react'

export default function Home() {

    const raiseAlert = ()=>{
        alert("Feature under development")
    }
    return (
        <div className='flex flex-col bg-[#1c1b18] text-white text-left px-4 gap-2 py-4 pt-20'>
            <h1 className=' text-3xl font-bold'>Property management, revenue collection and billing under one roof.</h1>
            <p>Grow recurring revenue, and reduce costs with a single unified platform for payments, subscriptions, invoicing, accounting, tax, and more.</p>
            <button className='bg-[#F1F252] rounded-full text-[#1c1b18] py-2' onClick={raiseAlert}>Sign Up</button>
            <button className='border border-white rounded-full text-white py-2' onClick={raiseAlert}>Contact Sales</button>
        </div>
    )
}
