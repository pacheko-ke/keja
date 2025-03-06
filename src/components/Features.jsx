import React from 'react'

export default function Features() {
    return (
        <div className='mt-10 flex-col gap-2 mx-4'>
            <h1 className='text-xl font-bold'>Manage Your Properties. With Zero Hassle</h1>

            <div>
                <h1 className='text-md font-bold'>Support Multiple Payment Gateways</h1>
                <p>Our tenants mobile app allows tenants to send payments easily and conviniently.</p>
            </div>

            <div>
                <h1 className='text-md font-bold'>Interact seamlessly with your tenants and agents</h1>
                <p>Bridge the gap between you and your tenants through a live chat.</p>
            </div>

            <div>
                <h1 className='text-md font-bold'>Enforce offers and deals to tenants</h1>
                <p>Enforce offers and deals for your tenants to increase their stay .</p>
            </div>
        </div>
    )
}
