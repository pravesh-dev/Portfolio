import React, { useEffect, useRef, useState } from "react";
import triangle from "../assets/images/Projects/triangle.svg";
import mouse from "../assets/images/icon/scrollMouse.svg";
import { userData } from "./ResumeData";
import dateBox from "../assets/images/Resume/dateBox.svg";
import ResumeDecoration from "./ResumeDecoration";
import ScrollMouse from "./ScrollMouse";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Resume() {
  const componentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "0% center",
          end: "0% center",
          scrub: 3,
        },
      });
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: "10% center",
          end: "40% center",
          scrub: 2,
        },
      });

      tl.from(".heading", { opacity: 0, y: 20 })
        .from(".bottom_border", { width: "10px", opacity: 0 })
        .from(".tab_buttons", { scale: 0, stagger: 0.5 });
      tl2
        .from(".data_heading", { opacity: 0 }, "b")
        .from(".content", { opacity: 0 }, "b")
        .from(".balls", { scale: 0 }, "b")
        .from(".time_start", { x: -50, opacity: 0 }, "b")
        .from(".time_end", { x: 50, opacity: 0 }, "b");
    }, componentRef);

    return () => ctx.revert();
  }, []);

  const [activeTab, setActiveTab] = useState("education");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabs = (type) => {
    const filteredType = userData.filter((data) => data.type === type);

    return filteredType.map((data, index) => (
      <div
        key={index}
        id="resume"
        className="data_box w-max p-[0.33rem] flex items-start gap-3"
      >
        <div className="flex items-center gap-3">
          <div className="relative time_start">
            <img
              loading="lazy"
              src={dateBox}
              className="w-14 lg:w-24"
              alt="date container"
            />
            <span className="absolute top-1/2 left-1/2 -translate-x-[55%] -translate-y-1/2 text-[#979797] font-semibold text-sm lg:text-[1.4rem] lg:-translate-x-[60%]">
              {data.timeStart}
            </span>
          </div>
        </div>
        <div className="mid flex gap-2 flex-col justify-between lg:gap-1">
          <div className="flex gap-2 items-center lg:gap-4">
            <span className="balls w-5 h-5 rounded-full bg-primary shadow-[0_0_7px_2px_#FD563C] lg:w-7 lg:h-7"></span>
            <h2 className="data_heading text-white text-[1rem] uppercase font-semibold lg:text-[1.3rem]">
              {data.heading}
            </h2>
          </div>
          <div className="content border-l-2 border-[#c3c3c3] pl-5 ml-[0.55rem] lg:ml-[0.75rem] lg:border-l-[3px] lg:pl-7">
            <h3 className="w-48 text-white/60 font-yellowTail text-[0.7rem] uppercase tracking-wider sm:w-72 lg:text-[0.95rem] lg:w-[35rem] lg:mb-2">
              {data.subHeading}
            </h3>
            <p className="w-48 text-neutral-500 text-[0.5rem] text-justify sm:w-72 lg:text-[0.75rem] lg:w-[35rem]">
              {data.para}
            </p>
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            <span className="balls w-5 h-5 rounded-full bg-primary shadow-[0_0_7px_2px_#FD563C] lg:w-7 lg:h-7"></span>
            <div className="relative rotate-180 time_end">
              <img
                loading="lazy"
                src={dateBox}
                className="w-14 lg:w-24"
                alt="date container"
              />
              <span className="absolute top-1/2 left-1/2 rotate-180 -translate-x-[55%] -translate-y-1/2 text-[#979797] font-semibold text-sm lg:text-[1.4rem] lg:-translate-x-[60%]">
                {data.timeEnd}
              </span>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section
      ref={componentRef}
      className="w-full min-h-[100svh] flex flex-col items-center relative pt-20 py-7"
    >
      <ResumeDecoration />
      <h1 className="text-primary text-center w-40 text-2xl font-semibold relative pb-1 uppercase lg:text-4xl lg:w-56 flex flex-col items-center">
        <span className="heading">Resume</span>
        <span className="bottom_border w-full h-[0.1rem] bg-primary relative">
          <img
            loading="lazy"
            src={triangle}
            className="w-3 absolute -left-1 top-1/2 -translate-y-1/2 rotate-90"
          />
          <img
            loading="lazy"
            src={triangle}
            className="w-3 absolute -right-1 top-1/2 -translate-y-1/2 -rotate-90"
          />
        </span>
      </h1>

      <div className="flex gap-4 items-center mt-5 mb-7">
        {["experience", "education"].map((tab) => (
          <button
            key={tab}
            className={`tab_buttons text-sm font-semibold px-1 capitalize tracking-wider ${
              activeTab === tab
                ? "text-primary border-b-2 border-white"
                : "text-neutral-300/70"
            } lg:text-lg cursor_pointer`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="w-80 gap-3 px-2 flex flex-col items-center relative z-30 sm:w-[31.5rem] lg:w-[56.5rem] xl:w-[60rem]">
        {renderTabs(activeTab)}
      </div>

      <ScrollMouse mouse={mouse} />
    </section>
  );
}

export default Resume;
