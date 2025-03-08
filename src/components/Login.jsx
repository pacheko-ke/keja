import React from 'react'

export default function Login() {
    return (
        <div>
            <div className="flex flex-col text-left mx-4 mt-4 gap-4">
                <div className="flex justify-between text-2xl">
                    <h1 className=' italic'>Keja.</h1>
                    <h1 className='text-xl underline'>Login</h1>
                </div>

                <h1 className='text-2xl font-medium'>Sign Up Today and Enjoy 1 Month Free Trial </h1>

                
                <div className="flex flex-col">
                    <label htmlFor="businessName">Tenant/Property Owner</label>
                    <input type="text" id='businessName' className='border rounded-lg py-2 focus:border-2 pl-2' />
                    <h1 className='text-sm text-red-500'>Name is required</h1>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="businessName">Business Type</label>
                    <input type="text" id='businessName' className='border rounded-lg py-2 focus:border-2 pl-2' />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="businessName">Email</label>
                    <input type="text" id='businessName' className='border rounded-lg py-2 focus:border-2 pl-2' />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="businessName">Password</label>
                    <input type="password" id='businessName' className='border rounded-lg py-2 focus:border-2 pl-2' />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="businessName">Confirm Password</label>
                    <input type="password" id='businessName' className='border rounded-lg py-2 focus:border-2 pl-2' />
                </div>
                <div className="flex gap-2">
                    <input type="checkbox" name="" id="" className='items-start size-6 accent-[#F1F252]' />
                    <p className='text-sm'>I agree to the terms of service and incorporated terms, no fees terms, sanctions agreement and understand Keja’s privacy notice.</p>
                </div>

                <button className='bg-gray-300 py-2 rounded-full'>Sign Up</button>
            </div>
        </div>
    )
}
