'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const Buttona = () => {

    const router = useRouter();
    const handleNavigation =()=>{

        router.push("/hire")
    } 
  return (

    <div>
      <button onClick={handleNavigation}
        className="w-[20rem] h-[2rem] items-center bg-fuchsia-400 rounded-full mx-4 mt-5
        text-sm font-medium text-wrap transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        Hire Me
      </button>
    </div>
  )
}

export default Buttona


