import React, { useState } from 'react';
import triangle from '../assets/images/Projects/triangle.svg'
// import img from '../assets/images/Projects/img.svg'
import  {projects} from './ProjectsData';

function Projects() {
    const [activeTab, setActiveTab] = useState('all');
    const handleTabClick = (tab)=>{
        setActiveTab(tab)
    }

  return (
    <div className='w-full min-h-screen flex flex-col items-center py-8 gap-8'>
      <h1 className='text-primary text-center w-40 text-2xl font-semibold relative pb-1 uppercase'>Projects <span className='w-full h-[0.1rem] bg-primary absolute left-0 bottom-0'> <img src={triangle} className='w-3 absolute -left-1 top-1/2 -translate-y-1/2 rotate-90' /> <img src={triangle} className='w-3 absolute -right-1 top-1/2 -translate-y-1/2 -rotate-90' /></span></h1>
      <div className='flex gap-3 items-center'>
        <button className={`text-sm font-semibold px-3 py-1 rounded-lg ${activeTab === 'all' ? 'bg-[#646464] text-primary' : 'text-neutral-300/70'}`} onClick={()=>{handleTabClick('all')}}>ALL</button>
        <button className={`text-sm font-semibold px-3 py-1 rounded-lg ${activeTab === 'frontend' ? 'bg-[#646464] text-primary' : 'text-neutral-300/70'}`} onClick={()=>{handleTabClick('frontend')}}>Frontend</button>
        <button className={`text-sm font-semibold px-3 py-1 rounded-lg ${activeTab === 'backend' ? 'bg-[#646464] text-primary' : 'text-neutral-300/70'}`} onClick={()=>{handleTabClick('backend')}}>Backend</button>
      </div>
      <div className={`w-80 flex-wrap gap-3 px-2 mx-auto ${activeTab === 'all' ? 'flex' : 'hidden'}`}>
        {projects.map((project, index)=>{
          return (
            <div key={index} className='w-36 bg-[#aaaaaa29] p-[0.33rem] rounded-md'>
            <h2 className='text-white text-[0.7rem] font-semibold'>GolfClub Company Website UI Clone</h2>
            <p className='text-neutral-500 text-[0.5rem] text-justify'>"It was so great to hear from you today and it was such weird timing," he said. "This is going to sound funny and a little strange, but you were in a dream I had just a couple of days ago.</p>
            <a href="#" className='text-white text-[0.6rem] flex items-center gap-1'>Visit Website <span className='text-primary text-xl'>→</span></a>
            <img src={project.image} className='rounded-lg' alt="" />
        </div>
          )
        })}
      </div>
      <div className={`w-80 flex-wrap gap-3 px-2 mx-auto ${activeTab === 'frontend' ? 'flex' : 'hidden'}`}>
        {projects.map((project, index)=>{
          if(project.type === 'frontend'){
            return (
              <div key={index} className='w-36 bg-[#aaaaaa29] p-[0.33rem] rounded-md'>
              <h2 className='text-white text-[0.7rem] font-semibold'>GolfClub Company Website UI Clone</h2>
              <p className='text-neutral-500 text-[0.5rem] text-justify'>"It was so great to hear from you today and it was such weird timing," he said. "This is going to sound funny and a little strange, but you were in a dream I had just a couple of days ago.</p>
              <a href="#" className='text-white text-[0.6rem] flex items-center gap-1'>Visit Website <span className='text-primary text-xl'>→</span></a>
              <img src={project.image} className='rounded-lg' alt="" />
          </div>
            )
          }
        })}
      </div>
      <div className={`w-80 flex-wrap gap-3 px-2 mx-auto ${activeTab === 'backend' ? 'flex' : 'hidden'}`}>
        {projects.map((project, index)=>{
          if(project.type === 'backend'){
            return (
              <div key={index} className='w-36 bg-[#aaaaaa29] p-[0.33rem] rounded-md'>
              <h2 className='text-white text-[0.7rem] font-semibold'>GolfClub Company Website UI Clone</h2>
              <p className='text-neutral-500 text-[0.5rem] text-justify'>"It was so great to hear from you today and it was such weird timing," he said. "This is going to sound funny and a little strange, but you were in a dream I had just a couple of days ago.</p>
              <a href="#" className='text-white text-[0.6rem] flex items-center gap-1'>Visit Website <span className='text-primary text-xl'>→</span></a>
              <img src={project.image} className='rounded-lg' alt="" />
          </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default Projects
