import React, { useRef, useEffect, useState } from "react";
import "./About.css";
import AboutDecoration from "./AboutDecoration";
import mouse from "../assets/images/icon/scrollMouse.svg";
import aboutBg from "../assets/images/About/aboutBg.svg";
import aboutBgRight from "../assets/images/About/aboutBgRight.svg";
import myImage from "../assets/images/About/myImage.svg";
import HireButton from "./HireButton";
import ScrollMouse from "./ScrollMouse";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function About() {
  // Create a reference to the component for animation
  const componentRef = useRef(null);

  // Use effect to animate elements on scroll
  useEffect(() => {
    // Create a context for the animation
    const ctx = gsap.context(() => {
      // Create a timeline for the animation
      const tl = gsap.timeline({
        // Set up scroll trigger for the animation
        scrollTrigger: {
          trigger: componentRef.current,
          start: "15% center",
          end: "40% center",
          scrub: 4,
        },
      });

      // Animate elements
      tl.from(".imgBg", { y: -100, opacity: 0 }, "a")
        .from(".img", { y: 100, opacity: 0 }, "a")
        .from(".imgRight", { x: 100, opacity: 0 })
        .from(".popCards", { scale: 0, stagger: 0.2 })
        .from(".aboutContent", { y: 100, stagger: 0.3, opacity: 0 })
        .from(".btn1", { x: -100, opacity: 0 }, "b")
        .to(".resumeDownload", { x: 0, opacity: 1 }, "b");
    }, componentRef);

    // Cleanup function to revert the animation context
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={componentRef}
      id="about"
      className="w-full h-[100svh] relative box-border sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-5 lg:gap-12 xl:gap-44 overflow-x-hidden"
    >
      <AboutDecoration />
      <div className="w-full h-[40%] relative flex items-center px-3 sm:w-auto sm:h-auto">
        <div className="w-48 h-[11.3rem] relative sm:w-80 sm:h-[19.3rem] lg:w-[26rem] lg:h-[25.3rem]">
          <div className="w-[85%] h-[80%] relative flex items-end z-20 overflow-hidden">
            <img
              loading="lazy"
              className="imgBg w-full h-[80%] object-cover"
              src={aboutBg}
              alt="Background"
            />
            <img
              loading="lazy"
              src={myImage}
              className="img absolute -bottom-1 -left-3 w-36 sm:w-60 lg:w-80 lg:-left-6"
              alt="Pravesh Saini"
            />
          </div>
          <img
            loading="lazy"
            src={aboutBgRight}
            className="imgRight w-12 absolute right-0 top-[3.1rem] z-10 sm:w-[4.8rem] sm:top-[5.6rem] lg:w-[6.3rem] lg:top-[7.3rem]"
            alt="Decoration"
          />

          <div className="flex items-center gap-2 h-[20%] lg:gap-6">
            <div className="popCards w-[4rem] h-[1.45rem] flex justify-center items-center gap-1 bg-white/30 rounded-[4px] sm:w-[7rem] sm:h-[1.9rem] lg:w-[8.5rem] lg:h-[2.3rem]">
              <h3 className="text-white font-bold text-[0.6rem] sm:text-[1rem] lg:text-[1.4rem]">
                20+
              </h3>
              <p className="text-white text-[0.38rem] tracking-widest leading-[0.43rem] sm:text-[0.48rem] lg:text-[0.64rem] lg:leading-3">
                Completed <br /> <span className="text-primary">Projects</span>
              </p>
            </div>
            <div className="popCards w-[4rem] h-[1.45rem] flex justify-center items-center gap-1 bg-white/30 rounded-[4px] sm:w-[7rem] sm:h-[1.9rem] lg:w-[8.5rem] lg:h-[2.3rem]">
              <h3 className="text-white font-bold text-[0.6rem] sm:text-[1rem] lg:text-[1.4rem]">
                1+
              </h3>
              <p className="text-white text-[0.38rem] tracking-widest leading-[0.43rem] sm:text-[0.48rem] lg:text-[0.64rem] lg:leading-3">
                Years of <br /> <span className="text-primary">Experience</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-11 -mt-28 relative z-10 px-3 sm:mt-0 sm:gap-5 sm:w-1/2 sm:h-auto md:w-[25rem] lg:w-[33rem] lg:gap-8 xl:w-[37rem]">
        <div className="self-end sm:self-start">
          <h2 className="aboutContent text-neutral-400 font-extralight text-[0.75rem] tracking-wider lg:text-base">
            Introduction
          </h2>
          <h1 className="aboutContent uppercase text-white font-bold text-xl tracking-wider flex flex-col gap-1 lg:text-3xl lg:gap-3">
            About Me{" "}
            <span className="w-20 h-[0.11rem] bg-white relative left-5 lg:w-32 lg:h-[0.15rem]"></span>
          </h1>
        </div>
        <p className="aboutContent text-neutral-300 text-xs tracking-widest leading-[1.1rem] text-justify font-extralight flex flex-col gap-5 lg:text-[0.95rem] lg:leading-5 lg:tracking-[0.13rem] xl:tracking-[0.17rem] xl:leading-[1.3rem]">
          Hi, I'm Pravesh Saini, a frontend web developer who loves making
          websites that are easy to use and look great. I have skills in HTML,
          CSS, JavaScript, React, Tailwind CSS, and GSAP. At HexaDefend, I
          worked on many projects with a great team and learned how to build
          responsive and attractive websites. I focus on writing clean code and
          creating smooth user experiences. I'm always looking for new
          challenges and enjoy keeping up with the latest trends in web
          development.{" "}
          <span className="w-14 h-[0.12rem] bg-white self-end mr-7 lg:h-[0.15rem] xl:mr-20"></span>
        </p>
        <div className="flex gap-7 pl-3 sm:gap-4 sm:justify-between md:justify-start md:gap-10 lg:gap-14">
          <div className="btn1">
            <HireButton />
          </div>
          <button className="resumeDownload relative border border-primary text-white text-[0.65rem] rounded-md tracking-wider font-light lg:text-base cursor-pointer active:scale-95 duration-300 overflow-hidden opacity-0 translate-x-[100px]">
            <a
              className="text-transparent px-5 py-2 lg:px-8 cursor-pointer"
              href="/Resume/PRAVESH-RESUME.pdf"
              download="PRAVESH-RESUME"
              aria-label="Download Resume"
            >
              Download Resume
            </a>
            <span className="inner_circle bg-primary/60 rounded-full pointer-events-none"></span>
          </button>
        </div>
      </div>
      <ScrollMouse mouse={mouse} />
    </section>
  );
}

export default About;
