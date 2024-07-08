import React, { useEffect, useState } from "react";
import triangle from "../assets/images/Projects/triangle.svg";
import { projects } from "./ProjectsData";
import mouse from '../assets/images/icon/scrollMouse.svg'
import ProjectDecoration from "./ProjectDecoration";

function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [viewAll, setViewAll] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const filteredProjects = projects.filter(
      (project) => activeTab === "all" || project.type === activeTab
    );
    setViewAll(filteredProjects.length > 6);
  }, [activeTab]);

  const renderProjects = (type) => {
    const filteredProjects = projects.filter(
      (project) => type === "all" || project.type === type
    );
    const displayedProjects = !viewAll
      ? filteredProjects
      : filteredProjects.slice(0, 6);

    return displayedProjects.map((project, index) => (
      <div key={index} className="w-36 bg-[#353535] p-[0.33rem] rounded-md sm:w-56 sm:flex flex-col gap-2 sm:p-3 lg:w-64">
        <h2 className="text-white text-[0.7rem] font-semibold sm:text-[1rem] lg:text-[1.3rem]">
          {project.name}
        </h2>
        <p className="text-neutral-500 text-[0.5rem] text-justify sm:text-[0.65rem] lg:text-[0.8rem]">
          {project.para}
        </p>
        <a
          href={project.link}
          className="text-white text-[0.6rem] flex items-center gap-1 sm:text-[0.9rem] lg:text-[1.2rem]"
        >
          Visit Website <span className="text-primary text-xl sm:text-[1.5rem] lg:text-[2.25rem] lg:-mt-1">→</span>
        </a>
        <img src={project.image} className="rounded-lg" alt={project.name} />
      </div>
    ));
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-8 relative p-16 lg:p-28">
        <ProjectDecoration/>
      <h1 className="text-primary text-center w-40 text-2xl font-semibold relative pb-1 uppercase lg:text-4xl lg:w-56">
        Projects
        <span className="w-full h-[0.1rem] bg-primary absolute left-0 bottom-0">
          <img
            src={triangle}
            className="w-3 absolute -left-1 top-1/2 -translate-y-1/2 rotate-90"
          />
          <img
            src={triangle}
            className="w-3 absolute -right-1 top-1/2 -translate-y-1/2 -rotate-90"
          />
        </span>
      </h1>
      <div className="flex gap-3 items-center lg:mb-7">
        {["all", "frontend", "backend"].map((tab) => (
          <button
            key={tab}
            className={`text-sm font-semibold px-3 py-1 capitalize rounded-lg ${
              activeTab === tab
                ? "bg-[#646464] text-primary"
                : "text-neutral-300/70"
            } lg:text-lg`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="w-80 flex-wrap gap-3 px-2 flex relative z-30 sm:w-[31.5rem] sm:gap-8 lg:w-[56.5rem] lg:gap-14 xl:w-[60rem] xl:gap-20">
        {renderProjects(activeTab)}
      </div>
      <button
        className={`text-primary border border-primary bg-primary/5 px-7 py-1 text-sm rounded-[1rem] ${
          viewAll ? "block" : "hidden"
        }`}
      >
        View All
      </button>
      <div className="w-full absolute bottom-3  flex flex-col justify-center items-center lg:bottom-1">
        <img className="w-[0.6rem] lg:w-[0.9rem]" src={mouse} alt="" />
        <p className="text-center text-white/50 font-thin text-[0.6rem] tracking-widest lg:text-[0.8rem]">
          Scroll Down
        </p>
      </div>
    </div>
  );
}

export default Projects;
