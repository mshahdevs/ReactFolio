import React from 'react';
import profilepic from '../assets/profile.png';
import '../styles/hero.css';
import { TypeAnimation } from 'react-type-animation';
import { ShinyEffect } from './ShinyEffect';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import {
  DiCss3,
  DiHtml5,
  DiJavascript,
  DiJavascript1,
  DiNodejs,
  DiNodejsSmall,
  DiReact,
} from 'react-icons/di';
import { RiNextjsLine } from 'react-icons/ri';
import { motion } from 'framer-motion';
export const Hero = () => {
  return (
    <div className='w-full mt-24  max-w-[1200px] mx-auto'>
      <div className='w-full grid md:grid-cols-2 place-items-center gap-8'>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <TypeAnimation
            sequence={[
              'Front-End Developer',
              1000,
              'Web Developer',
              1000,
              'React Developer',
              1000,
            ]}
            speed={{ type: 'keyStrokeDelayInMs', value: 100 }}
            repeat={Infinity}
            omitDeletionAnimation={true}
            className='font-bold text-gray-400 text-xl md:text-5xl italic mb-4'
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className='text-gray-200 md:text-7xl text-5xl tracking-tight mb-4'
          >
            HEY, I AM <br />
            <span className='text-purple-500'>Muhammad Shah</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className='text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg tracking-tight mb-4'
          >
            I am a passionate Front-End Developer with over 1+ years of
            experience.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className='flex items-center justify-center gap-6 my-4 md:mb-0'
          >
            <motion.a
              href='https://drive.google.com/file/d/1QYYXsRBWqO-QWO21cO42-_qv-nHw3pI4/view?usp=drive_link'
              target='_blank'
            >
              <button className='download_btn'>Download CV</button>
            </motion.a>
            <div className='flex gap-6 flex-row text-4xl  z-20'>
              <motion.a
                whileHover={{ scale: 1 }}
                className='icons'
                target='_blank'
                href='https://github.com/mshahdevs'
              >
                <motion.span
                  className='icon'
                  initial={{ color: '#fff' }}
                  whileHover={{
                    scale: 1,
                    color: '#fff',
                    backgroundImage:
                      'linear-gradient(220.55deg, #a531dc 0%, #4300b1 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  <AiOutlineGithub />
                </motion.span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1 }}
                className='icons'
                target='_blank'
                href='https://linkedin.com/in/mshahdevs'
              >
                <motion.span
                  className='icon'
                  initial={{ color: '#fff' }}
                  whileHover={{
                    scale: 1,
                    color: '#0077B5',
                    backgroundImage:
                      'linear-gradient(220.55deg, #a531dc 0%, #4300b1 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  <FaLinkedinIn to={''} />
                </motion.span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1 }}
                className='icons'
                target='_blank'
                href='https://wa.me/923119080523'
              >
                <motion.span
                  className='icon'
                  initial={{ color: '#fff' }}
                  whileHover={{
                    scale: 1,
                    color: '#25D366',
                    backgroundImage:
                      'linear-gradient(220.55deg, #a531dc 0%, #4300b1 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  <FaWhatsapp />
                </motion.span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='mt-4'
        >
          <div className='card'>
            <div className='image-box'>
              <img src={profilepic} alt='' />
            </div>
            <div className='text-box'>
              <div className='name'>
                <span>Muhammad Shah</span>
              </div>
              <div className='username'>
                <span className='text-white'>@mshahdev</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 2 }}
        className='flex justify-center items-center py-24 px-12 w-full md:px-0 text-7xl'
      >
        <p className='text-white'>My Tech Stack</p>

        <DiJavascript1 className='text-yellow-500 mx-2' />
        <DiReact className='text-blue-500 mx-2' />
        <DiNodejsSmall className='text-green-400 mx-2' />
        <RiNextjsLine className='text-white mx-2' />
      </motion.div>
      <div className='w-full absoute inset-0 hidden md:block'>
        <ShinyEffect left={'0'} right={0} size={1000} top={0} />
      </div>
    </div>
  );
};
