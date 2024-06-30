import React from 'react'
import mouse from "../assets/images/icon/scrollMouse.svg";

function Skills() {
  return (
    <div className='w-full h-screen relative '>
      
      <div className="w-full absolute bottom-3  flex flex-col justify-center items-center lg:bottom-1">
        <img className="w-[0.6rem] lg:w-[0.9rem]" src={mouse} alt="" />
        <p className="text-center text-white/50 font-thin text-[0.6rem] tracking-widest lg:text-[0.8rem]">
          Scroll Down
        </p>
      </div>
    </div>
  )
}

export default Skills
