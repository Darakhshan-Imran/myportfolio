import React from 'react'
import Header from "@/components/Header"
import Image from 'next/image'

const About = () => {
  return (
    <section className="bg-cover bg-gradient-to-r from-[#11091c] to-[#270927] min-h-screen w-full flex flex-col items-center pt-4 mx-auto px-4 sm:px-6 md:px-8 lg:px-0">

      <Header/>
        
        <div className="grid grid-cols-1 md:grid-cols-2 items-center mt-10 md:mt-20 px-4 md:px-0">
  <Image 
    src="/aboutimage.png" 
    alt="about"
    width={500}
    height={500}
    className="w-full h-auto md:w-[24rem] lg:w-[28rem] mx-auto"
  />

  <div className="w-full md:w-[50rem] -m-6 md:-m-12 p-4">
    <h1 className="text-3xl md:text-4xl lg:text-5xl text-slate-50 font-bold mt-9 sm:mt-8 md:mt-7 text-center lg:text-left sm:px-8 md:px-6 lg:px-4">ABOUT ME</h1>
    <p className="text-base md:text-xl lg:text-md text-slate-50 font-medium italic leading-7 md:leading-9 mt-8 md:mt-12 sm:mt-8 sm:px-8 md:px-6 lg:px-4 text-justify sm:text-wrap sm:overflow-x-hidden">
    {`I'm a web developer with a strong focus on expanding my expertise in Generative AI and Robotics. 
    Recently, I've been honing my skills across both frontend and backend development, 
    allowing me to work seamlessly across the full stack. I
    'm also diving into the world of prompt engineering and exploring various AI tools to enhance my capabilities in crafting intelligent, responsive applications. 
    Driven by a passion for continuous learning, I am committed to leveraging these emerging technologies to build innovative solutions 
    that push the boundaries of what's possible in web development and AI.`}
    </p>
  </div>
</div>
      
    </section>
  )
}

export default About

