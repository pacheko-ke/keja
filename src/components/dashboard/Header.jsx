import React from 'react'

export default function Header() {
    return (

        <div className="flex text-7xl md:text-xl justify-between  mx-2 mt-6 text-left">

            <ul className="divide-black  divide-y-2 md:divide-y-0 flex  flex-col md:flex-row  md:gap-x-4 md:justify-between  text-gray-500 gap-0.5  ml-6 rotate-90 md:rotate-0">

                <li>About</li>

                <li>Services </li>
                <li>Projects</li>

                <li>Contact</li>

            </ul>


            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-16 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>

        </div>


    )
}
