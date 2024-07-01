import React from "react";
import mouse from "../assets/images/icon/scrollMouse.svg";
import lineLeft from '../assets/images/Skills/lineLeft.svg'
import lineRight from '../assets/images/Skills/lineRight.svg'

function Skills() {
  return (
    <div className="relative">
      {/* here will import decoration */}

      <div className="w-full h-screen relative flex justify-between items-center">
        <div className="w-36 border flex flex-col gap-5 px-3 py-4 relative">
          <img src={lineLeft} className="w-full absolute right-0 top-0" alt="" />
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-xl font-bold">HTML</h2>
            <p className="text-[0.6rem] text-neutral-300 font-extralight tracking-[0.16rem] leading-[0.8rem] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              esse cum incidunt similique. Totam, aliquam.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-xl font-bold">HTML</h2>
            <p className="text-[0.6rem] text-neutral-300 font-extralight tracking-[0.16rem] leading-[0.8rem] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              esse cum incidunt similique. Totam, aliquam.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-xl font-bold">HTML</h2>
            <p className="text-[0.6rem] text-neutral-300 font-extralight tracking-[0.16rem] leading-[0.8rem] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              esse cum incidunt similique. Totam, aliquam.
            </p>
          </div>
        </div>

        <h1 className="text-primary text-xl font-bold tracking-widest -rotate-90 whitespace-nowrap absolute left-1/2 -translate-x-1/2">
          PROFESSIONAL SKILLS
        </h1>

        <div className="w-36 border flex flex-col gap-5 px-3 py-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-xl font-bold">HTML</h2>
            <p className="text-[0.6rem] text-neutral-300 font-extralight tracking-[0.16rem] leading-[0.8rem] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              esse cum incidunt similique. Totam, aliquam.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-xl font-bold">HTML</h2>
            <p className="text-[0.6rem] text-neutral-300 font-extralight tracking-[0.16rem] leading-[0.8rem] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              esse cum incidunt similique. Totam, aliquam.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-xl font-bold">HTML</h2>
            <p className="text-[0.6rem] text-neutral-300 font-extralight tracking-[0.16rem] leading-[0.8rem] text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              esse cum incidunt similique. Totam, aliquam.
            </p>
          </div>
        </div>

        <div className="w-full absolute bottom-3  flex flex-col justify-center items-center lg:bottom-1">
          <img className="w-[0.6rem] lg:w-[0.9rem]" src={mouse} alt="" />
          <p className="text-center text-white/50 font-thin text-[0.6rem] tracking-widest lg:text-[0.8rem]">
            Scroll Down
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
