import React from 'react'
import { navItems } from "@/constants"
import Link from 'next/link'
import Image from 'next/image'
import Button from './Button'
import { Menu } from 'lucide-react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Buttona from './Btn'
  


const Header = () => {
  return (

<header>
  <div className="flex justify-center items-center">
    <div className=" max-w-screen-2xl h-[5rem] bg-blend-hue rounded-full flex gap-4 justify-between items-center mt-8 shadow-fuchsia-400 shadow-lg text-white"> 
      
      {/* Title */}
      <div className="flex-shrink-0 flex items-center">
        <Image src="/Di.png" alt="logo"
        width={500}
        height={500}
       className='w-[6rem] rounded-full shadow-fuchsia-400 shadow-lg' />
        <h1 className="font-semibold font-montserrat px-4 text-lg sm:text-xl md:text-3xl mx-4">Darakhshan Imran</h1> 
      </div>

      {/* Navigation - visible on medium and larger screens */}
      <div>
      <nav className='hidden md:block'>
        <ul className=" flex flex-row gap-8 px-5 text-base lg:text-lg">
          {navItems.map((item, index) => (
            <li key={index} 
            >
              <Link href={item.link} className="hover:text-fuchsia-300">
                {item.title}
              </Link>
              
            </li>
          ))}
         
          <Button/>
        </ul>
 
      </nav>

  <Sheet>
  <SheetTrigger className='md:hidden text-fuchsia-400 px-7 text-lg'>
    <Menu/>
  </SheetTrigger>
  <SheetContent className=' bg-[#482f69] text-slate-50 font-medium text-base sm:text-lg flex flex-col items-center px-4 w-full h-full overflow-y-auto'>
  <ul className='space-y-4 py-6 w-full text-center'>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.link} className="hover:text-fuchsia-300">
                {item.title}
              </Link>
            </li>
          ))}

        <Buttona/>      
 </ul>
   
  </SheetContent>
  </Sheet> 
  </div>

  </div> 
  </div> 
</header>
  )
}

export default Header

