import Image from "next/image"
import Header from "@/components/Header";
import { FiLinkedin } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
import { VscGithub } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa6";



export default function Home() {
  return (
    
    <section className="bg-gradient-to-r from-[#11091c] to-[#270927] min-h-screen w-screen bg-cover overflow-x-hidden flex flex-col items-center mx-0 px-0 sm:px-6 md:px-8">
  
    <Header />
  
    <div className="flex flex-col-reverse sm:flex-row justify-between items-center max-w-screen-2xl w-full mt-8 sm:mt-0">
      
      <div className="text-center mt-[3rem] sm:text-left sm:w-[40rem] p-4">
        <p className="text-5xl font-extrabold text-slate-100 mb-4">
          Building The Web & Shaping AI
        </p>
        <p className="text-2xl font-medium text-slate-100 sm:leading-8 md:mt-[3rem] sm:text-wrap italic">
          {`A developer and prompt engineer creating tomorrow's tech today...`}
        </p>

      
   
      <div className="flex gap-5 items-center px-5 max-2xl ">
  
      <a
        href="https://www.linkedin.com/in/darakhshan-imran-5b9727297/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-slate-50 hover:text-[#b441b2] flex items-center justify-center w-14 h-14 rounded-full
         mt-8 border-2 border-fuchsia-400 shadow-fuchsia-400 shadow-lg"
      >
        <FiLinkedin size={35}/>
      </a>

      <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-slate-50 hover:text-[#b441b2] flex items-center justify-center w-14 h-14 rounded-full
         mt-8 border-2 border-fuchsia-400 shadow-fuchsia-400 shadow-lg"
      >
        <LuFacebook size={35}/>
      </a>

      <a
        href="www.https://github.com/Darakhshan-Imran"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="text-slate-50 hover:text-[#b441b2] flex items-center justify-center w-14 h-14 rounded-full
         mt-8 border-2 border-fuchsia-400 shadow-fuchsia-400 shadow-lg"
      >
        <VscGithub size={35}/>
      </a>

      <a
        href="https://www.instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="text-slate-50 hover:text-[#b441b2] flex items-center justify-center w-14 h-14 rounded-full
         mt-8 border-2 border-fuchsia-400 shadow-fuchsia-400 shadow-lg"
      >
        <FaInstagram size={35}/> 
      </a>
  
      </div>
   
      </div>
      <div className="flex-shrink-0 mt-10 sm:mt-[12rem]">

        <Image
          src="/big-glow.png"
          alt="glow-ball"
          width={700}
          height={700}
          className="w-full max-w-[500rem] sm:max-w-[800px]"
        />
      </div>
  
    </div>
  
  </section>
  
   
  );
}

