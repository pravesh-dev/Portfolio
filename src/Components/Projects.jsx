import React from 'react';
import triangle from '../assets/images/Projects/triangle.svg'

function Projects() {
  return (
    <div className='w-full h-screen flex flex-col items-center py-8'>
      <h1 className='text-primary text-center w-32 text-2xl font-semibold relative pb-1'>Projects <span className='w-full h-[0.1rem] bg-primary absolute left-0 bottom-0'> <img src={triangle} className='w-3 absolute -left-1 top-1/2 -translate-y-1/2 rotate-90' /> <img src={triangle} className='w-3 absolute -right-1 top-1/2 -translate-y-1/2 -rotate-90' /></span></h1>
    </div>
  )
}

export default Projects
