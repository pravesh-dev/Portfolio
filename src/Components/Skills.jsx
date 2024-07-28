import React, { useEffect, useRef } from "react";
import './Skills.css'
import SkillsDecoration from "./SkillsDecoration";

import mouse from "../assets/images/icon/scrollMouse.svg";
import lineLeftTop from "../assets/images/Skills/lineLeftTop.svg";
import lineLeftTopBig from "../assets/images/Skills/lineLeftTopBig.svg";
import lineLeftBottom from "../assets/images/Skills/lineLeftBottom.svg";
import lineLeftBottomBig from "../assets/images/Skills/lineLeftBottomBig.svg";
import lineRightTop from "../assets/images/Skills/lineRightTop.svg";
import lineRightTopBig from "../assets/images/Skills/lineRightTopBig.svg";
import lineRightBottom from "../assets/images/Skills/lineRightBottom.svg";
import lineRightBottomBig from "../assets/images/Skills/lineRightBottomBig.svg";
import ScrollMouse from "./ScrollMouse";
import gsap from "gsap";

function Skills() {
  const componentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "15% center",
          end: "center center",
          scrub: true,
          markers: true,
        },
      });

      tl.from(".skills_heading", {
          y: -100,
          stagger: 0.3,
        });
    }, componentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="skills" ref={componentRef} className="relative pt-5 lg:pt-0 overflow-hidden">
      <SkillsDecoration />

      <div className="w-full h-[110svh] relative flex justify-between items-center mx-auto sm:w-[35rem] lg:h-screen lg:w-[60rem] xl:w-[75rem]">
        <div className="w-36 flex flex-col gap-5 px-3 py-14 relative border-r-2 border-primary lg:w-[26rem] lg:py-20 lg:border-r-[2.3px] lg:pr-16">
          <img
            loading="lazy"
            src={lineLeftTop}
            className="w-[92%] absolute right-0 top-0 lg:hidden"
            alt=""
          />
          <img
            loading="lazy"
            src={lineLeftBottom}
            className="w-[92%] absolute right-0 bottom-0 lg:hidden"
            alt=""
          />
          <img
            loading="lazy"
            src={lineLeftTopBig}
            className="w-[97%] absolute -right-[0.1rem] top-0 hidden lg:block"
            alt=""
          />
          <img
            loading="lazy"
            src={lineLeftBottomBig}
            className="w-[97%] absolute -right-[0.1rem] bottom-0 hidden lg:block"
            alt=""
          />
          <div className="flex flex-col gap-1">
            <h2 className="skills_heading">
              HTML, CSS, JAVASCRIPT
            </h2>
            <p className="skills_para">
              Proficient in building modern web applications with HTML5 for
              structure, CSS3 for styling, and JavaScript (ES6+) for
              interactivity and functionality.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="skills_heading">
              REACT, REDUX
            </h2>
            <p className="skills_para">
              Experienced in creating dynamic and responsive user interfaces
              using React. Skilled in managing application state with Redux for
              efficient data handling.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="skills_heading">
              TAILWIND CSS, GSAP
            </h2>
            <p className="skills_para">
              Utilizing Tailwind CSS for quickly styling applications with a
              utility-first approach and GSAP for creating high-performance
              animations and interactions.
            </p>
          </div>
        </div>

        <h1 className="text-primary text-xl font-bold tracking-widest -rotate-90 whitespace-nowrap absolute left-1/2 -translate-x-1/2 sm:text-3xl lg:tracking-[0.36rem]">
          PROFESSIONAL SKILLS
        </h1>

        <div className="w-36 flex flex-col gap-5 px-3 py-14 relative border-l-2 border-primary lg:w-[26rem] lg:py-20 lg:border-l-[2.3px] lg:pl-16">
          <img
            loading="lazy"
            src={lineRightTop}
            className="w-[30%] absolute left-0 top-0 lg:hidden"
            alt=""
          />
          <img
            loading="lazy"
            src={lineRightBottom}
            className="w-[30%] absolute -left-[0.1rem] -bottom-[0.1rem] lg:hidden"
            alt=""
          />
          <img
            loading="lazy"
            src={lineRightTopBig}
            className="w-[24%] absolute -left-[0.1rem] top-0 hidden lg:block"
            alt=""
          />
          <img
            loading="lazy"
            src={lineRightBottomBig}
            className="w-[24%] absolute -left-[0.1rem] -bottom-[0.1rem] hidden lg:block"
            alt=""
          />
          <div className="flex flex-col gap-1">
            <h2 className="skills_heading">
              GIT & GITHUB
            </h2>
            <p className="skills_para">
              Proficient in using Git for version control and GitHub for
              repository management, collaboration, and showcasing code
              projects.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="skills_heading">
              NODE.JS, EXPRESS.JS
            </h2>
            <p className="skills_para">
              Experienced in building server-side applications and RESTful APIs
              using Node.js and Express.js for robust backend development.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="skills_heading">
              MONGODB, MONGOOSE
            </h2>
            <p className="skills_para">
              Skilled in using MongoDB as a NoSQL database and Mongoose for
              object data modeling (ODM) to interact with MongoDB seamlessly.
            </p>
          </div>
        </div>

        <ScrollMouse mouse={mouse} />
      </div>
    </div>
  );
}

export default Skills;
