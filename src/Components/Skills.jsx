import React from "react";
import mouse from "../assets/images/icon/scrollMouse.svg";
import lineLeftTop from '../assets/images/Skills/lineLeftTop.svg'
import lineLeftBottom from '../assets/images/Skills/lineLeftBottom.svg'
import lineRightTop from '../assets/images/Skills/lineRightTop.svg'
import lineRightBottom from '../assets/images/Skills/lineRightBottom.svg'

function Skills() {
  return (
    <div className="relative">
      {/* here will import decoration */}

      <div className="w-80 h-screen relative flex justify-between items-center mx-auto">
        <div className="w-36 flex flex-col gap-5 px-3 py-14 relative border-r-2 border-primary">
          {/* <img src={lineLeft} className="h-full absolute right-0 top-1/2 -translate-y-1/2" alt="" /> */}
          <img src={lineLeftTop} className="w-[92%] absolute right-0 top-0" alt="" />
          <img src={lineLeftBottom} className="w-[92%] absolute right-0 bottom-0" alt="" />
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

        <div className="w-36 flex flex-col gap-5 px-3 py-14 relative border-l-2 border-primary">
        <img src={lineRightTop} className="w-[30%] absolute left-0 top-0" alt="" />
        <img src={lineRightBottom} className="w-[30%] absolute left-0 bottom-0" alt="" />
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
