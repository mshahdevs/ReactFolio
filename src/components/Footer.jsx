import { FaGithubSquare, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between items-center md:items-start p-6 md:p-20 text-sm md:text-lg mt-12 gap-6 border-t border-gray-700/50 pt-8'>
      <div className='space-y-4 text-center md:text-left'>
        <h3 className='text-gray-200 text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent'>
          Muhammad Shah
        </h3>
        <p className='text-gray-400 text-sm md:text-base'>
          Front-End Developer | React Specialist | SQA Engineer
        </p>
        <div className='flex flex-row gap-4 text-gray-400 text-3xl md:text-4xl justify-center md:justify-start'>
          <a
            href='https://github.com/mshahdevs'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-white hover:scale-110 transition-all duration-300'
            aria-label='GitHub'
          >
            <FaGithubSquare />
          </a>
          <a
            href='https://www.linkedin.com/in/mshahdevs/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-blue-500 hover:scale-110 transition-all duration-300'
            aria-label='LinkedIn'
          >
            <FaLinkedin />
          </a>
          <a
            href='https://www.instagram.com/mshahdevs/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-pink-500 hover:scale-110 transition-all duration-300'
            aria-label='Instagram'
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className='text-center md:text-right space-y-2'>
        <p className='text-gray-400'>© 2025 All rights reserved</p>
        <p className='text-gray-500 text-xs md:text-sm'>
          Designed & Built by{" "}
          <a
            className='text-purple-400 hover:text-purple-500 hover:underline transition-colors duration-300'
            href='https://linkedin.com/in/mshahdevs/'
            target='_blank'
            rel='noopener noreferrer'
          >
            @mshahdevs
          </a>
        </p>
      </div>
    </div>
  );
};
