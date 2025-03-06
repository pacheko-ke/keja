import React from 'react'
import Pay from '../images/pay.svg'

export default function Features() {
    return (
        <div className='mt-10 flex flex-col mx-4 text-left gap-4 '>
            <h1 className='text-xl font-bold mb-2'>Manage Your Properties.But With Zero Hassle</h1>

            <div className='flex flex-col '>
                <h1 className='text-md font-bold '>Support Multiple Payment Gateways</h1>
                <p>The mobile app allows your tenants to send payments easily and conviniently through our several supported payment providers.</p>
                <img src={Pay} alt="payment" />
            </div>

            <div>
                <h1 className='text-md font-bold'>Interact seamlessly with your tenants and agents</h1>
                <p>Bridge the gap between you and your tenants through a live chat.</p>
            </div>

            <div>
                <h1 className='text-md font-bold'>Enforce offers and deals to tenants</h1>
                <p>Enforce offers and deals for your tenants to increase their stay .</p>
            </div>

            <div>
                <h1 className='text-md font-bold'>Landlords Mobile App</h1>
                <p>Manage your properties from the comfort of your bedroom through our mobile app .</p>
            </div>
        </div>
    )
}
