import React from 'react';
import { Reveal } from './Reveal';

export function Contact() {
  return (
    <div className='px-6 max-w-[1000px] mx-auto md:my-12' id='contact'>
      <Reveal>
        <div className='grid md:grid-cols-2 place-content-start'>
          <div>
            <div className='text-gray-300 my-3'>
              <h3 className='text-4xl text-left font-semibold mb-5'>
                About <span>Me</span>{' '}
              </h3>
              <p className='text-justify leading-7 w-11/12 mx-auto'>
                I am a web developer who loves what I do. I know how to use
                HTML, CSS, and JavaScript. I want to use my skills and
                creativity to help with exciting web projects. I pay attention
                to details and focus on making websites that users enjoy. I
                always look for ways to learn more and get better in web
                development.
              </p>
            </div>
            <div className='flex  mt-10 items-center gap-7'>
              <div className='bg-gray-600/50 p-4 rounded-xl'>
                <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                  9<span>+</span>
                </h3>
                <p className='text-xs md:text-base'>
                  <span>Projects</span>
                </p>
              </div>
              <div className='bg-gray-600/50 p-5 rounded-xl'>
                <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                  1<span>+</span>
                </h3>
                <p className='text-xs md:text-base'>
                  <span>years of experience</span>
                </p>
              </div>
              <div className='bg-gray-600/50 p-5 rounded-xl'>
                <h3 className='md:text-4xl text-2xl font-semibold text-white'>
                  2<span>+</span>
                </h3>
                <p className='text-xs md:text-base'>
                  <span>happy clients</span>
                </p>
              </div>
            </div>
          </div>
          <form
            action='https://getform.io/f/bqoknypb'
            method='POST'
            className='max-w-6xl flex flex-col gap-2 p-5 md:p-12'
            id='form'
          >
            <p className='text-gray-100 font-bold text-xl mb-2'>
              Let's connect!👋{' '}
            </p>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Your Name ...'
              className='mb-2 w-full rounded-xl  bg-gray-50 border outline-purple-400 border-y-purple-600 py-2 pl-2 pr-4'
            />
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Your Email ...'
              className='mb-2 w-full rounded-xl border border-y-purple-600 outline-purple-400 py-2 bg-gray-50 pl-2 pr-4'
            />
            <textarea
              name='textarea'
              id='textarea'
              placeholder='Your Messge ...'
              cols={30}
              rows={4}
              className='mb-2 resize-none w-full bg-gray-50 rounded-xl border border-y-purple-600 outline-purple-400 py-2 pl-2 pr-4'
            />
            <button
              type='submit'
              className='w-full py-3 rounded-xl text-gray-100 font-semibold text-xl bg-primary-color'
            >
              Send Message
            </button>
          </form>
        </div>
      </Reveal>
    </div>
  );
}
