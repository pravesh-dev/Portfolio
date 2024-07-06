import React, { useEffect, useState } from 'react';
import triangle from '../assets/images/Projects/triangle.svg';
import { projects } from './ProjectsData';

function Projects() {
    const [activeTab, setActiveTab] = useState('all');
    const [viewAll, setViewAll] = useState(false);
    
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
      const filteredProjects = projects.filter((project) => activeTab === 'all' || project.type === activeTab);
      setViewAll(filteredProjects.length > 6);
  }, [activeTab]);

  const renderProjects = (type) => {
    const filteredProjects = projects.filter((project) => type === 'all' || project.type === type);
    const displayedProjects = !viewAll ? filteredProjects : filteredProjects.slice(0, 6);
    
    return displayedProjects.map((project, index) => (
        <div key={index} className='w-36 bg-[#aaaaaa29] p-[0.33rem] rounded-md'>
            <h2 className='text-white text-[0.7rem] font-semibold'>{project.name}</h2>
            <p className='text-neutral-500 text-[0.5rem] text-justify'>{project.para}</p>
            <a href={project.link} className='text-white text-[0.6rem] flex items-center gap-1'>
                Visit Website <span className='text-primary text-xl'>→</span>
            </a>
            <img src={project.image} className='rounded-lg' alt={project.name} />
        </div>
    ));
};

    return (
        <div className='w-full min-h-screen flex flex-col items-center py-8 gap-8'>
            <h1 className='text-primary text-center w-40 text-2xl font-semibold relative pb-1 uppercase'>
                Projects
                <span className='w-full h-[0.1rem] bg-primary absolute left-0 bottom-0'>
                    <img src={triangle} className='w-3 absolute -left-1 top-1/2 -translate-y-1/2 rotate-90' />
                    <img src={triangle} className='w-3 absolute -right-1 top-1/2 -translate-y-1/2 -rotate-90' />
                </span>
            </h1>
            <div className='flex gap-3 items-center'>
                {['all', 'frontend', 'backend'].map((tab) => (
                    <button
                        key={tab}
                        className={`text-sm font-semibold px-3 py-1 capitalize rounded-lg ${activeTab === tab ? 'bg-[#646464] text-primary' : 'text-neutral-300/70'}`}
                        onClick={() => handleTabClick(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className='w-80 flex-wrap gap-3 px-2 mx-auto flex'>
                {renderProjects(activeTab)}
            </div>
            <button className={`text-primary border border-primary bg-primary/5 px-7 py-1 text-sm rounded-[1rem] ${viewAll ? 'block' : 'hidden'}`}>View All</button>
        </div>
    );
}

export default Projects;
