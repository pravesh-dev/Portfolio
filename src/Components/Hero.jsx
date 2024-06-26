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
    <div className="w-full h-screen relative">
      <HeroDecoration />
      <div id="hero-top" className="h-[70%] w-full flex relative">
        <div className="w-[20%] h-[75%] flex flex-col gap-[0.6rem] items-center justify-end absolute left-0">
          {socialIcons.map((item, index) => {
            return (
              <a key={index} href="#" className={`${index === 3 && "mb-8"}`}>
                <img src={item.name} alt="" />
              </a>
            );
          })}
        </div>
        <div className="w-full h-[80%] relative border">
          <div className=" w-60 h-60 absolute bottom-0 left-1/2 -translate-x-1/2">
            <img
              src={imageBg}
              className="w-44 z-10 absolute bottom-0 left-1/2 -translate-x-1/2"
              alt=""
            />
            <img
              src={myImage}
              className="w-52 z-20 absolute bottom-[10%] left-1/2 -translate-x-[48%]"
              alt=""
            />
            <div className="w-44 h-24 rounded-b-[5.5rem] bg-gradient-to-t from-[#1a1a1a] from-50% to-transparent z-30 absolute bottom-0 left-1/2 -translate-x-1/2"></div>

            
            <div className="w-16 h-[1.4rem] flex justify-center items-center gap-1 absolute top-[20%] -left-[10%] z-50 bg-white/30 rounded-[2.7px]">
              <h3 className="text-white font-bold text-[0.5rem]">20+</h3>
              <p className="text-white text-[0.35rem] tracking-widest leading-[0.4.3rem]">
                Completed <br /> <span className="text-primary">Projects</span>
              </p>
            </div>
            <div className="w-16 h-[1.4rem] flex justify-center items-center gap-1 absolute top-[51%] left-[80%] z-50 bg-white/30 rounded-[2.7px]">
              <h3 className="text-white font-bold text-[0.5rem]">1+</h3>
              <p className="text-white text-[0.35rem] tracking-widest leading-[0.4.3rem]">
                Years of <br /> <span className="text-primary">Experience</span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full absolute bottom-7 left-1/2 -translate-x-1/2">
          <h1 className=" text-center text-primary text-[2.1rem] font-monseret font-extrabold leading-7">
            Pravesh <span className="stroke-text">Sa</span>ini
          </h1>
          <h2 className="w-full text-center uppercase text-white text-sm font-monseret font-bold">
            frontend <span className="stroke-text">developer</span>
          </h2>
        </div>
      </div>
      <div
        id="hero-bottom"
        className="w-full h-[30%] flex justify-between pt-8 pl-11 pr-8 absolute"
      >
        <p className="w-28 text-[0.4rem] text-white/60 font-extralight text-justify mt-3">
          Debbie put her hand into the hole, sliding her hand down as far as her
          arm could reach. Lorem ipsum dolor sit amet Lorem, ipsum.
        </p>
        <div className="w-[7.2rem]">
          <h3 className="text-[0.6rem] text-white -mb-2 mt-1">Email</h3>
          <a
            className="text-[0.5rem] text-white/50"
            href="mailto:praveshsaini.dev@gmail.com"
          >
            praveshsaini.dev@gmail.com
          </a>
          <h3 className="text-[0.6rem] text-white -mb-2 mt-1">Phone</h3>
          <a className="text-[0.5rem] text-white/50" href="tel:+9991831473">
            9991831473
          </a>
          <h3 className="text-[0.6rem] text-white -mb-2 mt-1">Location</h3>
          <p className="text-[0.5rem] text-white/50 mt-2">
            123001 Niwaz Nagar <br /> Haryana India
          </p>
        </div>
      </div>
      <div className="w-full absolute bottom-3  flex flex-col justify-center items-center">
        <img className="w-[0.6rem]" src={mouse} alt="" />
        <p className="text-center text-white/50 font-thin text-[0.6rem] tracking-widest">
          Scroll Down
        </p>
      </div>
    </div>
  );
}

export default Hero;
