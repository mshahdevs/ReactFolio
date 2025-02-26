import React from 'react';
import { FaGithubSquare, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto flex justify-between p-6 md:p-20 text-sm md:text-lg mt-12'>
      <div className='space-y-4'>
        <h3 className='text-gray-200 text-2xl font-semibold'>Muhammad Shah</h3>
        <div className='flex flex-row gap-6 text-gray-400 text-4xl'>
          <a href='#'>
            {' '}
            <FaGithubSquare />{' '}
          </a>
          <a href='#'>
            {' '}
            <FaInstagram />{' '}
          </a>
        </div>
      </div>
      <p className='text-gray-400'>@2025 M.Shah</p>
    </div>
  );
};
