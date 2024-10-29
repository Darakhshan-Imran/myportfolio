'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const Button = () => {

    const router = useRouter();
    const handleNavigation =()=>{

        router.push("/hire")
    } 
  return (

    <div>
      <button onClick={handleNavigation}
      
      className="w-[5rem] md:w-[8rem] h-[2rem] md:h-[2.5rem] hidden md:block bg-gradient-to-r from-[#b05695] to-fuchsia-400 rounded-full mx-4 md:mx-6 md:p-2
              text-sm font-medium text-wrap sm:text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Contact Me  
    </button>
    </div>
  )
}

export default Button


