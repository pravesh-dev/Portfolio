import React from "react";
import AboutDecoration from "./AboutDecoration";
import mouse from "../assets/images/icon/scrollMouse.svg";
import aboutBg from "../assets/images/About/aboutBg.svg";
import aboutBgRight from "../assets/images/About/aboutBgRight.svg";
import myImage from "../assets/images/About/myImage.svg";

function About() {
  return (
    <div className="w-full h-screen relative">
      {/* <AboutDecoration/> */}
      <div className="w-full h-[40%] relative flex items-center">
        <div className="w-56 h-52 ml-2 relative">
          <div className="w-[85%] h-[80%] relative flex items-end z-20 overflow-hidden">
            <img className="w-full h-[80%] object-cover" src={aboutBg} alt="" />
            <img
              src={myImage}
              className="absolute -bottom-1 -left-3 w-40"
              alt=""
            />
          </div>
          <img
            src={aboutBgRight}
            className="w-14 absolute right-0 top-[3.65rem] z-10"
            alt=""
          />

          <div className="flex items-center gap-2 h-[20%]">
            <div className="w-[4.7rem] h-[1.6rem] flex justify-center items-center gap-1 bg-white/30 rounded-[4px] lg:w-24 lg:h-[1.9rem]">
              <h3 className="text-white font-bold text-[0.7rem]">20+</h3>
              <p className="text-white text-[0.42rem] tracking-widest leading-[0.43rem] lg:text-[0.54rem] lg:leading-3">
                Completed <br /> <span className="text-primary">Projects</span>
              </p>
            </div>
            <div className="w-[4.7rem] h-[1.6rem] flex justify-center items-center gap-1 bg-white/30 rounded-[4px] lg:w-24 lg:h-[1.9rem]">
              <h3 className="text-white font-bold text-[0.7rem]">1+</h3>
              <p className="text-white text-[0.42rem] tracking-widest leading-[0.43rem] lg:text-[0.54rem] lg:leading-3">
                Years of <br /> <span className="text-primary">Experience</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border w-full h-[70%] flex flex-col gap-12 px-2 -mt-24 relative z-10">
        <div className="self-end">
          <h2 className="text-neutral-400 font-extralight text-[0.6rem] tracking-wider">
            Introduction
          </h2>
          <h1 className="uppercase text-white font-bold text-base tracking-wider flex flex-col gap-1">
            About Me{" "}
            <span className="w-16 h-[0.11rem] bg-white relative left-4"></span>
          </h1>
        </div>
        <p className="text-neutral-300 text-xs tracking-widest leading-5 text-justify font-extralight">It was easy to spot her. All you needed to do was look at her socks. They were never a matching pair. One would be green while the other would be blue. One would reach her knee while the other barely touched her ankle. Every other part of her was perfect, but never the socks. They were her micro act of rebellion. It had been her dream for years but Dana had failed to take any action toward making it come true. There had always been a good excuse to delay or prioritize another project. As she woke, she realized she was once again at a crossroads. </p>
      </div>
      <div className="w-full absolute bottom-3  flex flex-col justify-center items-center lg:bottom-1">
        <img className="w-[0.6rem] lg:w-[0.9rem]" src={mouse} alt="" />
        <p className="text-center text-white/50 font-thin text-[0.6rem] tracking-widest lg:text-[0.8rem]">
          Scroll Down
        </p>
      </div>
    </div>
  );
}

export default About;
