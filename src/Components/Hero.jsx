import React from "react";
import insta from "../assets/images/icon/insta.svg";
import whatsapp from "../assets/images/icon/whatsapp.svg";
import linkedIn from "../assets/images/icon/linkedIn.svg";
import gitHub from "../assets/images/icon/gitHub.svg";
import imageBg from "../assets/images/image-bg.svg";
import myImage from "../assets/images/myImage.svg";
import mouse from "../assets/images/icon/scrollMouse.svg";
import "./Hero.css";
import HeroDecoration from "./HeroDecoration";

function Hero() {
  let socialIcons = [
    {
      name: insta,
    },
    {
      name: whatsapp,
    },
    {
      name: linkedIn,
    },
    {
      name: gitHub,
    },
  ];
  return (
    <div className="w-full h-screen relative overflow-y-auto">
      <HeroDecoration />
      <div id="hero-top" className="h-[70%] w-full flex relative lg:h-[80%]">
        <div className="w-[20%] h-[75%] flex flex-col gap-[0.6rem] items-center justify-end absolute left-0 lg:w-[14%] lg:h-[70%] lg:gap-4 xl:w-[10%] xl:h-[60%]">
          {socialIcons.map((item, index) => {
            return (
              <a key={index} href="#" className={`${index === 3 && "mb-8 lg:mb-14"}`}>
                <img src={item.name} className="lg:w-5" alt="" />
              </a>
            );
          })}
        </div>
        <div className="w-full h-[80%] relative">
          <div className=" w-60 h-60 absolute bottom-0 left-1/2 -translate-x-1/2 lg:w-80 lg:h-96 lg:-bottom-10">
            <img
              src={imageBg}
              className="w-44 z-10 absolute bottom-0 left-1/2 -translate-x-1/2 lg:w-64 lg:-bottom-5"
              alt=""
            />
            <img
              src={myImage}
              className="w-52 z-20 absolute bottom-[10%] left-1/2 -translate-x-[48%] lg:w-[19rem] lg:bottom-[10%]"
              alt=""
            />
            <div className="w-44 h-24 rounded-b-[5.5rem] bg-gradient-to-t from-[#1a1a1a] from-50% to-transparent z-30 absolute bottom-0 left-1/2 -translate-x-1/2 lg:w-64"></div>

            
            <div className="w-16 h-[1.4rem] flex justify-center items-center gap-1 absolute top-[20%] -left-[10%] z-50 bg-white/30 rounded-[2.7px] lg:w-24 lg:h-[1.9rem]">
              <h3 className="text-white font-bold text-[0.5rem] lg:text-[0.7rem]">20+</h3>
              <p className="text-white text-[0.35rem] tracking-widest leading-[0.43rem] lg:text-[0.54rem] lg:leading-3">
                Completed <br /> <span className="text-primary">Projects</span>
              </p>
            </div>
            <div className="w-16 h-[1.4rem] flex justify-center items-center gap-1 absolute top-[51%] left-[80%] z-50 bg-white/30 rounded-[2.7px] lg:w-24 lg:h-[1.9rem]">
              <h3 className="text-white font-bold text-[0.5rem] lg:text-[0.7rem]">1+</h3>
              <p className="text-white text-[0.35rem] tracking-widest leading-[0.43rem] lg:text-[0.54rem] lg:leading-3">
                Years of <br /> <span className="text-primary">Experience</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full absolute bottom-7 left-1/2 -translate-x-1/2 lg:bottom-0">
          <h1 className=" text-center text-primary text-[2.1rem] font-monseret font-extrabold leading-7 xl:text-[3rem] lg:mb-3">
            Pravesh <span className="stroke-text">Sa</span>ini
          </h1>
          <h2 className="w-full text-center uppercase text-white text-sm font-monseret font-bold xl:text-[1.3rem]">
            frontend <span className="stroke-text">developer</span>
          </h2>
        </div>
      </div>
      <div
        id="hero-bottom"
        className="w-full h-[30%] flex justify-between pt-8 pl-11 pr-8 absolute lg:h-[27%] lg:-mt-20 lg:pr-20 lg:pl-24"
      >
        <p className="w-28 text-[0.4rem] text-white/60 font-extralight text-justify mt-3 md:text-[0.55rem] md:w-44 lg:text-[0.5rem] lg:mt-7">
          Debbie put her hand into the hole, sliding her hand down as far as her
          arm could reach. Lorem ipsum dolor sit amet Lorem, ipsum.
        </p>
        <div className="w-[7.2rem]">
          <h3 className="text-[0.6rem] text-white -mb-2 mt-1 lg:text-[0.9rem]">Email</h3>
          <a
            className="text-[0.5rem] text-white/50 lg:text-[0.6rem]"
            href="mailto:praveshsaini.dev@gmail.com"
          >
            praveshsaini.dev@gmail.com
          </a>
          <h3 className="text-[0.6rem] text-white -mb-2 mt-1 lg:text-[0.9rem]">Phone</h3>
          <a className="text-[0.5rem] text-white/50 lg:text-[0.6rem]" href="tel:+9991831473">
            9991831473
          </a>
          <h3 className="text-[0.6rem] text-white -mb-2 mt-1 lg:text-[0.9rem]">Location</h3>
          <p className="text-[0.5rem] text-white/50 mt-2 lg:text-[0.6rem]">
            123001 Niwaz Nagar <br /> Haryana India
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
  );
}

export default Hero;
