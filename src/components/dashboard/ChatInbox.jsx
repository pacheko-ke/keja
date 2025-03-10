import React from 'react'
import { useState } from 'react'

export default function ChatInbox() {
    const [chatHidden, showChats] = useState(true)
    const showChatList = () => {
        showChats(!chatHidden)
    }


    return (


        // chat inbox
        <div className=' text-left flex flex-row  h-lvh relative'>

            {/* chat list */}

            <div className={!chatHidden ? "flex flex-col gap-2 divide-y-2 divide-gray-300 bg-green-400 h-full px-2" : "hidden"}>
                <h1 className="text-lg">Direct Messages</h1>
                <div className='flex gap-2 rounded-full size-6 '>
                    <img src="" alt="profile_pic" />
                    <div>Clark</div>
                </div>
                <div className='flex gap-2 rounded-full size-6 '>
                    <img src="" alt="profile_pic" />
                    <div>John</div>
                </div>


            </div>

            <div className='flex flex-col px-2 w-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8" onClick={showChatList}>
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                </svg>

                <div>Chat with Clark -Safari -RM 11</div>
                <h1 className='text-sm text-gray-400 text-center mt-20 mb-6'>Wednesday 10/03/2025</h1>
                {/* sender */}
                <div className='bg-green-300 w-1/2  py-2 rounded-br-xl rounded-tl-xl rounded-tr-xl pl-2 mt-2' >Hey.</div>
                <h1 className='text-sm text-gray-400'>09.34 pm</h1>
                <div className='bg-green-300 w-1/2  py-2 rounded-br-xl rounded-tl-xl rounded-tr-xl mt-2 pl-2' >How you doing?.</div>

                <div className='bg-green-300 w-1/2  py-2 rounded-bl-xl rounded-tl-xl rounded-tr-xl pl-2 mt-2 self-end ' >Hey.</div>
                <div className='bg-green-300 w-1/2  py-2 rounded-bl-xl rounded-tl-xl rounded-tr-xl mt-2 pl-2 self-end' >What's the issue?.</div>
                {/* typing indicator */}
                <div className="flex gap-2 ">
                    <div className='bg-green-200 size-3 rounded-full pl-2 mt-2 animate-bounce' ></div>
                    <div className='bg-green-200 size-3 rounded-full pl-2 mt-2 animate-bounce' ></div>
                    <div className='bg-green-200 size-3 rounded-full pl-2 mt-2 animate-bounce' ></div>
                </div>

                <div className="flex gap-2 mt-2">

                    <input type="text" placeholder='Type your text here...' className=' pl-2 py-2 w-full border rounded-md' />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>


                </div>

            </div>
        </div>
    )
}
