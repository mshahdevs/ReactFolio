import React from 'react'
import profilepic from '../assets/profile.png'
import {TypeAnimation} from 'react-type-animation'
import {ShinyEffect}  from './ShinyEffect'
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLinkedin
} from 'react-icons/ai'
import {
 DiCss3,
 DiHtml5,
 DiJavascript,
 DiJavascript1,
 DiNodejs,
 DiNodejsSmall,
 DiReact,
} from 'react-icons/di'
import { RiNextjsLine } from "react-icons/ri";
import { motion } from 'framer-motion'
export const Hero = () => {

  return (
    <div className='w-full mt-24  max-w-[1200px] mx-auto relative'>
      <div className='w-full grid md:grid-cols-2 place-items-center gap-8'>
        <motion.div
        initial = {{opacity:0,y:-50}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:1}}
        >
      <TypeAnimation
      sequence={[
        "Front-End Developer",
        1000,
        "Web Developer",
        1000,
        "React Developer",
        1000,
      ]}
      speed={{type:'keyStrokeDelayInMs',value:100}}
      repeat={Infinity}
      omitDeletionAnimation={true}
      className='font-bold text-gray-400 text-xl md:text-5xl italic mb-4'
      />
      <motion.p
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      viewport={{once:true}}
      transition={{duration:1,delay:0.5}}
      className='text-gray-200 md:text-7xl text-5xl tracking-tight mb-4'
      >
      HEY, I AM <br />
       <span className='text-purple-500'>Muhammad Shah</span>
   
      </motion.p>

      <motion.p
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      viewport={{once:true}}
      transition={{duration:1,delay:0.5}}
      className='text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg tracking-tight mb-4'
      >
      I am a passionate Front-End Developer with over 3 years of experience.
       
   
      </motion.p>
      <motion.div
      initial={{opacity:0,y:50}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true}}
      transition={{duration:1,delay:1.5}}
      className='flex items-center justify-center gap-6 my-4 md:mb-0'
      >
        <motion.button
        whileHover={{scale:1.05,boxShadow:"0px 0px 8px rgba(0,0,0,0.3) "}}
        className='z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-3 border border-purple-400 rounded-xl'
        >

        Download CV
        </motion.button>
        <div className="flex gap-6 flex-row text-4xl text-purple-400 z-20">
          <motion.a
          whileHover={{scale:1.2}} href='#'
          >
            <AiOutlineGithub />
          </motion.a>
          <motion.a
          whileHover={{scale:1.2}}
          
          href='#'
          >
            <AiOutlineLinkedin />
          </motion.a> 
          <motion.a
          whileHover={{scale:1.2}} href='#'
          >
            <AiOutlineInstagram />
          </motion.a>
        </div>
      </motion.div>
        </motion.div>
        <motion.div 
         initial = {{opacity:0,y:-50}}
         whileInView={{opacity:1,y:0}}
         viewport={{once:true}}
         transition={{duration:1}}
        className='mt-4'>

        <div className='bg-red-200 w-[86%] h-[70vh] rounded-custom '>

        <motion.img 
        initial={{opacity:0,scale:0.8,y:30}}
        whileInView={{opacity:1,scale:1,y:0}}
        viewport={{once:true}}
        transition={{duration:1,delay:1.5}}
        src={profilepic} className='w-[500px] relative bottom-16 right-0 drop-shadow-drop' alt="" />
        </div>
        </motion.div>
      </div>
      <motion.div
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      viewport={{once:true}}
      transition={{duration:1,delay:2}}
      className='flex justify-center items-center py-24 px-12 w-full md:px-0 text-7xl'
      >

       <p className='text-white'>My Tech Stack</p>
       
      
       <DiJavascript1 className='text-yellow-500 mx-2'/>
       <DiReact className='text-blue-500 mx-2' />
       <DiNodejsSmall className='text-green-400 mx-2'/>
       <RiNextjsLine className='text-white mx-2'/>
      </motion.div>
      <div className='w-full absolute inset-0 hidden md:block'>
        <ShinyEffect left={'0'} right={0} size={1000} top={0}/>
      </div>
    </div>
  )
}
