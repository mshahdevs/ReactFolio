import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
export const Navbar = () => {
    const [nav ,setNav] = useState(false)

  const toggleNav = ()=>{
    setNav(!nav)
  }
  const closeNav = ()=>{
    setNav(false)
  }
  const menuVariants = {
    open:{
      x:'0%',
      transition:{
        stiffness:20,
        damping:15
      }   
      },
      close:{
        x:'-100%',
      transition:{
        stiffness:20,
        damping:15,
      
      },
      
      }
  }

  return (
    <div className='fixed top-0 left-0 w-full bg-opacity-70  backdrop-blur-md z-50'>
        <div className='max-w-[1300px] mx-auto  px-12 h-20 flex justify-between items-center text-gray-100  text-xl'>
            <a href="/" className='font-bold flex items-center text-[25px]' > { " </mshahdev> " }</a>
            <ul className='hidden md:flex gap-12 z-10 cursor-pointer'>
                <li><Link to='skills' smooth={true} offset={50} duration={500}>About</Link></li>
                <li><Link to='skills' smooth={true} offset={50} duration={500}>Portfolio</Link></li>
                <li><Link to='skills' smooth={true} offset={50} duration={500}>Contact</Link></li>
            </ul>
            <div onClick={toggleNav} className='md:hidden cursor-pointer z-50 text-gray-300'>
              
                  {nav ? <AiOutlineClose size={30}/> :<AiOutlineMenu size={30}/> }
            </div>
            <motion.div
            initial={false}
            animate ={nav ? 'open' : 'close'}
            variants={menuVariants}
            className='fixed left-0 top-0 w-full min-h-screen bg-gray-900 z-40'
            >
              <ul className='font-semibold text-4xl space-y-8 mt-24 text-center'>
              <li><Link to='skills' onClick={closeNav} smooth={true} offset={50} duration={500}>About</Link></li>
                <li><Link to='skills' onClick={closeNav} smooth={true} offset={50} duration={500}>Portfolio</Link></li>
                <li><Link to='skills' onClick={closeNav} smooth={true} offset={50} duration={500}>Contact</Link></li>
              </ul>


            </motion.div>
        </div>
    </div>
  )
}
