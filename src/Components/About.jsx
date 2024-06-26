import React from "react";
import AboutDecoration from "./AboutDecoration";
import mouse from "../assets/images/icon/scrollMouse.svg";
import aboutBg from "../assets/images/About/aboutBg.svg";
import aboutBgRight from "../assets/images/About/aboutBgRight.svg";
import myImage from "../assets/images/About/myImage.svg";

function About() {
  return (
    <div className="w-full h-screen relative box-border sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-5 lg:gap-12 xl:gap-44">
      <AboutDecoration/>
      <div className="w-full h-[40%] relative flex items-center px-3 sm:w-auto sm:h-auto">
        <div className="w-48 h-[11.3rem] relative sm:w-80 sm:h-[19.3rem] lg:w-[26rem] lg:h-[25.3rem]">
          <div className="w-[85%] h-[80%] relative flex items-end z-20 overflow-hidden">
            <img className="w-full h-[80%] object-cover" src={aboutBg} alt="" />
            <img
              src={myImage}
              className="absolute -bottom-1 -left-3 w-36 sm:w-60 lg:w-80 lg:-left-6"
              alt=""
            />
          </div>
          <img
            src={aboutBgRight}
            className="w-12 absolute right-0 top-[3.1rem] z-10 sm:w-[4.8rem] sm:top-[5.6rem] lg:w-[6.3rem] lg:top-[7.3rem]"
            alt=""
          />

          <div className="flex items-center gap-2 h-[20%] lg:gap-6">
            <div className="w-[4rem] h-[1.45rem] flex justify-center items-center gap-1 bg-white/30 rounded-[4px] sm:w-[7rem] sm:h-[1.9rem] lg:w-[8.5rem] lg:h-[2.3rem]">
              <h3 className="text-white font-bold text-[0.6rem] sm:text-[1rem] lg:text-[1.4rem]">20+</h3>
              <p className="text-white text-[0.38rem] tracking-widest leading-[0.43rem] sm:text-[0.48rem] lg:text-[0.64rem] lg:leading-3">
                Completed <br /> <span className="text-primary">Projects</span>
              </p>
            </div>
            <div className="w-[4rem] h-[1.45rem] flex justify-center items-center gap-1 bg-white/30 rounded-[4px] sm:w-[7rem] sm:h-[1.9rem] lg:w-[8.5rem] lg:h-[2.3rem]">
              <h3 className="text-white font-bold text-[0.6rem] sm:text-[1rem] lg:text-[1.4rem]">1+</h3>
              <p className="text-white text-[0.38rem] tracking-widest leading-[0.43rem] sm:text-[0.48rem] lg:text-[0.64rem] lg:leading-3">
                Years of <br /> <span className="text-primary">Experience</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[70%] flex flex-col gap-11 -mt-28 relative z-10 px-3 sm:mt-0 sm:gap-5 sm:w-1/2 sm:h-auto md:w-[25rem] lg:w-[33rem] lg:gap-8 xl:w-[37rem]">
        <div className="self-end sm:self-start">
          <h2 className="text-neutral-400 font-extralight text-[0.75rem] tracking-wider lg:text-base">
            Introduction
          </h2>
          <h1 className="uppercase text-white font-bold text-xl tracking-wider flex flex-col gap-1 lg:text-3xl lg:gap-3">
            About Me{" "}
            <span className="w-20 h-[0.11rem] bg-white relative left-5 lg:w-32 lg:h-[0.15rem]"></span>
          </h1>
        </div>
        <p className="text-neutral-300 text-xs tracking-widest leading-[1.1rem] text-justify font-extralight flex flex-col gap-5 lg:text-[0.95rem] lg:leading-5 lg:tracking-[0.13rem] xl:tracking-[0.17rem] xl:leading-[1.3rem]">It was easy to spot her. All you needed to do was look at her socks. They were never a matching pair. One would be green while the other would be blue. One would reach her knee while the other barely touched her ankle. Every other part of her was perfect, but never the socks. They were her micro act of rebellion. It had been her dream for years but Dana had failed to take any action toward making it come true. There had always been a good excuse to delay or prioritize another project. As she woke, she realized she was once again at a crossroads.  <span className="w-14 h-[0.12rem] bg-white self-end mr-7 lg:h-[0.15rem] xl:mr-20"></span></p>
        <div className="flex gap-3 lg:gap-10">
          <button className="text-xs px-6 py-2 rounded-md bg-primary text-white shadow-[2px_1px_1px_1px_#000] tracking-wider font-light lg:text-base lg:px-8">Hire me</button>
          <button className="border border-primary text-white text-xs px-6 py-2 rounded-md tracking-wider font-light lg:text-base lg:px-8">View Portfolio</button>
        </div>
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
