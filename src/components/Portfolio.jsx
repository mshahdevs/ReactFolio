import React from 'react';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import { AiOutlineGithub, AiOutlineHtml5 } from 'react-icons/ai';
import { DiCss3, DiHtml5 } from 'react-icons/di';
import { RiTailwindCssFill } from 'react-icons/ri';
import { Reveal } from './Reveal';

export const Portfolio = () => {
  const projects = [
    {
      img: project1,
      title: 'Project #1',
      description: 'UI for frontend development using React.',
      links: {
        site: '#',
        github: 'https://github.com/mshahdevs/shopping-cart-redux-toolkit',
      },
      icons: {
        html: <AiOutlineHtml5 />,
      },
    },
    {
      img: project2,
      title: 'Project #2',
      description: 'Logic for frontend development using React.',
      links: {
        site: 'https://mshahdevs.github.io/responsive-book-web/',
        github: 'https://github.com/mshahdevs/responsive-book-web',
      },
      icons: {
        html: <DiHtml5 />,
        css: <DiCss3 />,
        tailwindcss: <RiTailwindCssFill />,
      },
    },
    {
      img: project3,
      title: 'Project #3',
      description: 'UI for frontend development using React.',
      links: {
        site: 'https://cafe-shah.netlify.app/',
        github: 'https://github.com/mshahdevs/coffee-shop-store',
      },
      icons: {
        html: <AiOutlineHtml5 />,
      },
    },
  ];
  return (
    <div className=' max-w-[1000px] mx-auto p-6 md:my-20' id='portfolio'>
      <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
      {projects.map((project, index) => (
        <Reveal>
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } mb-12 `}
          >
            <div className='w-full md:w-1/2  p-4'>
              <img
                src={project.img}
                className='w-full h-full object-cover rounded-xl shadow-lg'
                alt={project.title}
              />
            </div>
            <div className='text-white w-full md:w-1/2 p-4 flex flex-col items-start justify-center '>
              <h3 className='text-2xl font-semibold text-gray-200 mb-4'>
                {project.title}
              </h3>
              <p className='text-gray-300 mb-4'>{project.description}</p>
              <div className='flex space-x-4'>
                <a
                  href={project.links.site}
                  className='px-4 py-2 bg-slate-600 text-gray-100 rounded-xl hover:bg-slate-700'
                >
                  View Site
                </a>
                <a
                  href={project.links.github}
                  className='px-4 py-2 bg-slate-600 text-gray-100 rounded-xl hover:bg-slate-700'
                >
                  <AiOutlineGithub />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
      <a href='https://github.com/mshahdevs'>
        <button className='download_btn'>Many more +</button>
      </a>
    </div>
  );
};
