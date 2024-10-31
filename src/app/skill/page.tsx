import React from 'react'
import Header from "@/components/Header"
import Image from 'next/image'

const Skills = () => {
  return (
    <section className="bg-gradient-to-r from-[#11091c] to-[#270927] min-h-screen w-screen overflow-x-hidden 
                        flex flex-col items-center mx-0 px-0 sm:px-6 md:px-8">

    <Header/>

  <div className='flex flex-col-reverse sm:flex-row items-center justify-start space-x-5 mx-[3rem] px-[4rem] max-w-screen-2xl w-full sm:mt-0'>

    <div className='flex flex-col justify-left sm:justify-center'>
    <h1 className='text-4xl text-slate-50 font-bold'>Design. Develop. Innovate</h1>
    <p className='text-xl text-slate-50 font-medium italic leading-9 mt-[3rem]'>{`I'm currently looking to join a cross-functional team that values improving people's lives through accessible design`}</p>
    </div>
    
    <Image src="/myskills.png" alt="skills"
    width={800}
    height={700}
    
    className='mt-[5rem]'/>
      
  </div>
  </section>
  )
}

export default Skills
