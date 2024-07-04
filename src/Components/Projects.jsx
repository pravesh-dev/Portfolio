import React, { useState } from 'react';
import triangle from '../assets/images/Projects/triangle.svg'

function Projects() {
    const [activeTab, setActiveTab] = useState('all');
    const handleTabClick = (tab)=>{
        setActiveTab(tab)
    }
  return (
    <div className='w-full h-screen flex flex-col items-center py-8 gap-8'>
      <h1 className='text-primary text-center w-40 text-2xl font-semibold relative pb-1 uppercase'>Projects <span className='w-full h-[0.1rem] bg-primary absolute left-0 bottom-0'> <img src={triangle} className='w-3 absolute -left-1 top-1/2 -translate-y-1/2 rotate-90' /> <img src={triangle} className='w-3 absolute -right-1 top-1/2 -translate-y-1/2 -rotate-90' /></span></h1>
      <div className='flex gap-3 items-center'>
        <button className={`text-sm font-semibold px-3 py-1 rounded-lg ${activeTab === 'all' ? 'bg-[#646464] text-primary' : 'text-neutral-300/70'}`} onClick={()=>{handleTabClick('all')}}>ALL</button>
        <button className={`text-sm font-semibold px-3 py-1 rounded-lg ${activeTab === 'frontend' ? 'bg-[#646464] text-primary' : 'text-neutral-300/70'}`} onClick={()=>{handleTabClick('frontend')}}>Frontend</button>
        <button className={`text-sm font-semibold px-3 py-1 rounded-lg ${activeTab === 'full' ? 'bg-[#646464] text-primary' : 'text-neutral-300/70'}`} onClick={()=>{handleTabClick('full')}}>Full Stack</button>
      </div>
    </div>
  )
}

export default Projects
