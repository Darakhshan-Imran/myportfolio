'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const Buttona = () => {

    const router = useRouter();
    const handleNavigation =()=>{

        router.push("/hire")
    } 
  return (

    <div className='flex justify-center items-center overflow-hidden'>
      <button onClick={handleNavigation}
        className="space-y-2 py-2 w-full text-center h-auto items-center bg-fuchsia-400 rounded-full mx-4 
        text-base sm:text-lg font-medium text-wrap transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        Hire Me
      </button>
    </div>
  )
}

export default Buttona

