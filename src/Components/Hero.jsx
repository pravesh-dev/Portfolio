import React, { useRef } from "react";
import imageBg from "../assets/images/image-bg.svg";
import myImage from "../assets/images/myImage.svg";
import mouse from "../assets/images/icon/scrollMouse.svg";
import "./Hero.css";
import HeroDecoration from "./HeroDecoration";

import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import ScrollMouse from "./ScrollMouse";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Hero() {
  const componentRef = useRef();
  useGSAP(()=>{
    const tl = gsap.timeline();
    // tl.from('.socialIcons', {
    //   left: '-100%',
    //   stagger: 0.1,
    // });
    // tl.from('.bgImg', {
    //   scale: 1.3,
    //   opacity: 0,
    //   duration: 0.4
    // });
    // tl.from('.myImg, .myImgSh', {
    //   y: 100,
    //   opacity: 0,
    //   duration: 1
    // })
    tl.from('.popCards', {
      scale: 0,
      duration: 0.6,
      stagger: 0.3
    })
    tl.from('.nameBox', {
      height: '0',
      duration: 1
    })

  }, {scope: componentRef, dependencies: []})
  return (
    <div ref={componentRef} className="w-full h-[100svh] relative overflow-y-auto">
      <HeroDecoration />
      <div id="hero-top" className="h-[70%] w-full flex relative lg:h-[80%]">
        <div className="w-[20%] h-[75%] flex flex-col gap-[0.6rem] items-center justify-end absolute z-20 left-0 lg:w-[14%] lg:h-[70%] lg:gap-4 xl:w-[10%] xl:h-[60%]">
          <a
            href="https://www.instagram.com/dev_pravesh/"
            target="_blank"
            rel="noopener noreferrer"
            className="socialIcons relative duration-300 hover:rotate-6 hover:scale-125 cursor_pointer"
          >
            <span className="icon text-lg text-primary lg:text-2xl duration-300 hover:text-[#F71635]">
              <RiInstagramFill />
            </span>
            <span className="icon_name px-1 bg-[#F71635] text-white absolute top-0 left-[130%] rounded-[0.2rem]">
              Instagram{" "}
              <span className="absolute w-2 h-2 bg-[#F71635] top-1/2 -translate-y-1/2 rotate-45 -left-1"></span>
            </span>
          </a>
          <a
            href="whatsapp://send?phone=919991831473"
            target="_blank"
            rel="noopener noreferrer"
            className="socialIcons relative duration-300 hover:rotate-6 hover:scale-125 cursor_pointer"
          >
            <span className="icon text-lg text-primary lg:text-2xl duration-300 hover:text-[#009A11]">
              <IoLogoWhatsapp />
            </span>
            <span className="icon_name px-1 bg-[#009A11] text-white absolute top-0 left-[130%] rounded-[0.2rem]">
              WhatsApp{" "}
              <span className="absolute w-2 h-2 bg-[#009A11] top-1/2 -translate-y-1/2 rotate-45 -left-1"></span>
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/pravesh-saini-b7ab39280/"
            target="_blank"
            rel="noopener noreferrer"
            className="socialIcons relative duration-300 hover:rotate-6 hover:scale-125 cursor_pointer"
          >
            <span className="icon text-lg text-primary lg:text-2xl duration-300 hover:text-[#2864AA]">
              <FaLinkedin />
            </span>
            <span className="icon_name px-1 bg-[#2864AA] text-white absolute top-0 left-[130%] rounded-[0.2rem]">
              LinkedIn{" "}
              <span className="absolute w-2 h-2 bg-[#2864AA] top-1/2 -translate-y-1/2 rotate-45 -left-1"></span>
            </span>
          </a>
          <a
            href="https://github.com/pravesh-dev"
            target="_blank"
            rel="noopener noreferrer"
            className={`socialIcons relative mb-8 lg:mb-14 duration-300 hover:rotate-6 hover:scale-125 cursor_pointer`}
          >
            <span className="icon text-lg text-primary lg:text-2xl duration-300 hover:text-[#010101]">
              <FaGithub />
            </span>
            <span className="icon_name px-1 bg-[#010101] text-white absolute top-0 left-[130%] rounded-[0.2rem]">
              GitHub{" "}
              <span className="absolute w-2 h-2 bg-[#010101] top-1/2 -translate-y-1/2 rotate-45 -left-1"></span>
            </span>
          </a>
        </div>
        <div className="w-full h-[80%] relative">
          <div className=" w-60 h-60 absolute bottom-0 left-1/2 -translate-x-1/2 lg:w-80 lg:h-96 lg:-bottom-10">
            <img
              loading="lazy"
              src={imageBg}
              className="bgImg w-44 z-10 absolute bottom-0 left-1/2 -translate-x-1/2 lg:w-64 lg:-bottom-5"
              alt=""
            />
            <img
              loading="lazy"
              src={myImage}
              className="myImg w-52 z-20 absolute bottom-[10%] left-1/2 -translate-x-[48%] lg:w-[19rem] lg:bottom-[10%]"
              alt=""
            />
            <div className="myImgSh w-44 h-24 rounded-b-[5.5rem] bg-gradient-to-t from-[#1a1a1a] from-50% to-transparent z-30 absolute bottom-0 left-1/2 -translate-x-1/2 lg:w-64"></div>

            <div className="popCards w-16 h-[1.4rem] flex justify-center items-center gap-1 absolute top-[20%] -left-[10%] z-50 bg-white/30 rounded-[2.7px] lg:w-24 lg:h-[1.9rem]">
              <h3 className="text-white font-bold text-[0.5rem] lg:text-[0.7rem]">
                20+
              </h3>
              <p className="text-white text-[0.35rem] tracking-widest leading-[0.43rem] lg:text-[0.54rem] lg:leading-3">
                Completed <br /> <span className="text-primary">Projects</span>
              </p>
            </div>
            <div className="popCards w-16 h-[1.4rem] flex justify-center items-center gap-1 absolute top-[51%] left-[80%] z-50 bg-white/30 rounded-[2.7px] lg:w-24 lg:h-[1.9rem]">
              <h3 className="text-white font-bold text-[0.5rem] lg:text-[0.7rem]">
                1+
              </h3>
              <p className="text-white text-[0.35rem] tracking-widest leading-[0.43rem] lg:text-[0.54rem] lg:leading-3">
                Years of <br /> <span className="text-primary">Experience</span>
              </p>
            </div>
          </div>
        </div>
        <div className="nameBox w-full h-14 absolute bottom-7 left-1/2 -translate-x-1/2 lg:bottom-0 overflow-hidden flex flex-col justify-center items-center lg:h-20">
          <h1 className="text-center text-primary text-[2.1rem] font-monseret font-extrabold leading-7 xl:text-[3rem] lg:mb-3">
            Pravesh <span className="stroke-text">Sa</span>ini
          </h1>
          <h2 className="text-center uppercase text-white text-sm font-monseret font-bold xl:text-[1.3rem]">
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
          <h3 className="text-[0.6rem] text-white -mb-2 mt-1 lg:text-[0.9rem]">
            Email
          </h3>
          <a
            className="text-[0.5rem] text-white/50 lg:text-[0.6rem] cursor_pointer"
            href="mailto:praveshsaini.dev@gmail.com"
          >
            praveshsaini.dev@gmail.com
          </a>
          <h3 className="text-[0.6rem] text-white -mb-2 mt-1 lg:text-[0.9rem]">
            Phone
          </h3>
          <a
            className="text-[0.5rem] text-white/50 lg:text-[0.6rem] cursor_pointer"
            href="tel:+9991831473"
          >
            9991831473
          </a>
          <h3 className="text-[0.6rem] text-white -mb-2 mt-1 lg:text-[0.9rem]">
            Location
          </h3>
          <p className="text-[0.5rem] text-white/50 mt-2 lg:text-[0.6rem]">
            123001 Niwaz Nagar <br /> Haryana India
          </p>
        </div>
      </div>
      <ScrollMouse mouse={mouse} />
    </div>
  );
}

export default Hero;
