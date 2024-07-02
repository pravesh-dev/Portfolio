import React from "react";
import SkillsDecoration from "./SkillsDecoration";

import mouse from "../assets/images/icon/scrollMouse.svg";
import lineLeftTop from '../assets/images/Skills/lineLeftTop.svg'
import lineLeftTopBig from '../assets/images/Skills/lineLeftTopBig.svg'
import lineLeftBottom from '../assets/images/Skills/lineLeftBottom.svg'
import lineLeftBottomBig from '../assets/images/Skills/lineLeftBottomBig.svg'
import lineRightTop from '../assets/images/Skills/lineRightTop.svg'
import lineRightTopBig from '../assets/images/Skills/lineRightTopBig.svg'
import lineRightBottom from '../assets/images/Skills/lineRightBottom.svg'
import lineRightBottomBig from '../assets/images/Skills/lineRightBottomBig.svg'

function Skills() {
  return (
    <div className="relative pt-5 lg:pt-0">
      <SkillsDecoration/>

      <div className="w-full h-[110vh] relative flex justify-between items-center mx-auto sm:w-[35rem] lg:h-screen lg:w-[60rem] xl:w-[75rem]">
        <div className="w-36 flex flex-col gap-5 px-3 py-14 relative border-r-2 border-primary lg:w-[26rem] lg:py-20 lg:border-r-[2.3px] lg:pr-16">
          <img src={lineLeftTop} className="w-[92%] absolute right-0 top-0 lg:hidden" alt="" />
          <img src={lineLeftBottom} className="w-[92%] absolute right-0 bottom-0 lg:hidden" alt="" />
          <img src={lineLeftTopBig} className="w-[97%] absolute -right-[0.1rem] top-0 hidden lg:block" alt="" />
          <img src={lineLeftBottomBig} className="w-[97%] absolute -right-[0.1rem] bottom-0 hidden lg:block" alt="" />
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-xl font-bold lg:text-2xl">HTML</h2>
            <p className="text-[0.6rem] text-neutral-300 font-extralight tracking-[0.16rem] leading-[0.8rem] text-justify lg:text-[0.8rem] lg:tracking-[0.18rem] lg:leading-[1rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              esse cum incidunt similique. Totam, aliquam.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-xl font-bold lg:text-2xl">HTML</h2>
            <p className="text-[0.6rem] text-neutral-300 font-extralight tracking-[0.16rem] leading-[0.8rem] text-justify lg:text-[0.8rem] lg:tracking-[0.18rem] lg:leading-[1rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              esse cum incidunt similique. Totam, aliquam.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-xl font-bold lg:text-2xl">HTML</h2>
            <p className="text-[0.6rem] text-neutral-300 font-extralight tracking-[0.16rem] leading-[0.8rem] text-justify lg:text-[0.8rem] lg:tracking-[0.18rem] lg:leading-[1rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              esse cum incidunt similique. Totam, aliquam.
            </p>
          </div>
        </div>

        <h1 className="text-primary text-xl font-bold tracking-widest -rotate-90 whitespace-nowrap absolute left-1/2 -translate-x-1/2 sm:text-3xl lg:tracking-[0.36rem]">
          PROFESSIONAL SKILLS
        </h1>

        <div className="w-36 flex flex-col gap-5 px-3 py-14 relative border-l-2 border-primary lg:w-[26rem] lg:py-20 lg:border-l-[2.3px] lg:pl-16">
        <img src={lineRightTop} className="w-[30%] absolute left-0 top-0 lg:hidden" alt="" />
        <img src={lineRightBottom} className="w-[30%] absolute -left-[0.1rem] -bottom-[0.1rem] lg:hidden" alt="" />
        <img src={lineRightTopBig} className="w-[24%] absolute -left-[0.1rem] top-0 hidden lg:block" alt="" />
        <img src={lineRightBottomBig} className="w-[24%] absolute -left-[0.1rem] -bottom-[0.1rem] hidden lg:block" alt="" />
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-xl font-bold lg:text-2xl">HTML</h2>
            <p className="text-[0.6rem] text-neutral-300 font-extralight tracking-[0.16rem] leading-[0.8rem] text-justify lg:text-[0.8rem] lg:tracking-[0.18rem] lg:leading-[1rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              esse cum incidunt similique. Totam, aliquam.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-xl font-bold lg:text-2xl">HTML</h2>
            <p className="text-[0.6rem] text-neutral-300 font-extralight tracking-[0.16rem] leading-[0.8rem] text-justify lg:text-[0.8rem] lg:tracking-[0.18rem] lg:leading-[1rem]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              esse cum incidunt similique. Totam, aliquam.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-white text-xl font-bold lg:text-2xl">HTML</h2>
            <p className="text-[0.6rem] text-neutral-300 font-extralight tracking-[0.16rem] leading-[0.8rem] text-justify lg:text-[0.8rem] lg:tracking-[0.18rem] lg:leading-[1rem]">
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
