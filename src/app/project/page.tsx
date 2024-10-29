import React from 'react'
import Header from '@/components/Header'
import Image from 'next/image'

const Projects = () => {
  return (
    <section className="bg-gradient-to-r from-[#11091c] to-[#320d32] min-h-screen max-w-screen flex flex-col items-center p-4">

    <Header/>

    <div className='grid grid-cols-1 md:grid-cols-2 justify-evenly items-center mt-8'>

    <Image src="/calculator.png" alt="calculator_app"
    width={550}
    height={200}
    className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'/>

    <Image src="/todolist.png" alt="todo_app"
    width={550}
    height={200}
    className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'/>

    <Image src="/ecommerce.png" alt="figmaclone"
    width={550}
    height={200}
    className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'/>

    <Image src="/powerpages.png" alt="power_app"
    width={550}
    height={200}
    className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'/>

    <Image src="/chatbot.png" alt="chatbot"
    width={550}
    height={200}
    className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'/>
    
    <Image src="/copilot.png" alt="copilot"
    width={550}
    height={200}
    className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'/>


</div>
       
      
    </section>
  )
}

export default Projects
// 
// from-[#2f1a4c] to-[#3f123f]