import React, { useState } from "react";
import bar from "../assets/images/icon/bar.svg";
import { Link } from "react-router-dom";

function Header() {
  const [activeNav, setActiveNav] = useState(false);
  const [activeTab, setActiveTab] = useState('home')
  const handleNav = () => {
    setActiveNav(!activeNav);
  };
  return (
    <>
      <header className="w-full py-5  flex items-center justify-between px-7 absolute top-0 left-0 z-[99] lg:px-16">
        <h2 className="font-yellowTail text-white text-xl lg:text-2xl">Pravesh</h2>
        <img src={bar} onClick={handleNav} className="cursor-pointer md:hidden" alt="" />
        <nav className="gap-5 lg:gap-12 hidden md:flex">
          <Link to='/' className={`text-xs font-extralight tracking-wider ${activeTab === 'home' ? 'text-neutral-400' : 'text-white'} duration-500 hover:scale-105`} onClick={()=>{setActiveTab('home')}}>Home</Link>
          <Link to='/about' className={`text-xs font-extralight tracking-wider ${activeTab === 'about' ? 'text-neutral-400' : 'text-white'} duration-500 hover:scale-105`} onClick={()=>{setActiveTab('about')}}>About</Link>
          <Link to='/projects' className={`text-xs font-extralight tracking-wider ${activeTab === 'project' ? 'text-neutral-400' : 'text-white'} duration-500 hover:scale-105`} onClick={()=>{setActiveTab('project')}}>Projects</Link>
          <Link to='resume' className={`text-xs font-extralight tracking-wider ${activeTab === 'resume' ? 'text-neutral-400' : 'text-white'} duration-500 hover:scale-105`} onClick={()=>{setActiveTab('resume')}}>Resume</Link>
        </nav>
        <button className="bg-primary text-white rounded-[1rem] text-sm px-3 py-1 hidden md:block shadow-md shadow-white/80 lg:px-4 hover:translate-y-1 hover:shadow-none duration-500 active:scale-90">Let's Talk</button>
      </header>
      <div
        className={`w-[80%] h-screen bg-red-500 fixed z-[100] ${
          activeNav ? "block" : "hidden"
        }`}
      ></div>
    </>
  );
}

export default Header;
