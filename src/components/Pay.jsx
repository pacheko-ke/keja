import React from 'react';

const Pay = () => {
    return (
        <div className='flex flex-col gap-2 mx-2'>
            <h1>Payment Page</h1>
            <p>Welcome to the payment page.</p>

            <button className='bg-black rounded-md text-white w-full py-1'>Apple Pay</button>
            <button className='bg-black rounded-md text-white w-full py-1'>Google Pay</button>
            <h1 className='my-4'>or pay with other method</h1>
            <div className="flex gap-2 overflow-x-scroll">
                <div className="flex flex-col py-4 px-10 border rounded-lg">
                    <h1>Card</h1>
                </div>
                <div className="flex flex-col py-4 px-10 border rounded-lg">
                    <h1>Card</h1>
                </div>
                <div className="flex flex-col py-4 px-10 border rounded-lg">
                    <h1>Card</h1>
                </div>
                <div className="flex flex-col py-4 px-10 border rounded-lg">
                    <h1>Card</h1>
                </div>
            </div>
        </div>
    );
};

export default Pay;