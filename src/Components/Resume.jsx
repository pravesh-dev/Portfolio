import React, { useState } from "react";
import triangle from "../assets/images/Projects/triangle.svg";
import mouse from "../assets/images/icon/scrollMouse.svg";
import { userData } from "./ResumeData";
import dateBox from "../assets/images/Resume/dateBox.svg";
import ResumeDecoration from "./ResumeDecoration";

function Resume() {
  const [activeTab, setActiveTab] = useState("experience");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabs = (type) => {
    const filteredType = userData.filter((data) => data.type === type);

    return filteredType.map((data, index) => (
      <div
        key={index}
        className="data_box w-max p-[0.33rem] flex items-start gap-3"
      >
        <div className="flex items-center gap-3">
          <div className="relative">
            <img src={dateBox} className="w-14 lg:w-24" alt="date container" />
            <span className="absolute top-1/2 left-1/2 -translate-x-[55%] -translate-y-1/2 text-[#979797] font-semibold text-sm lg:text-[1.4rem] lg:-translate-x-[60%]">
              {data.timeStart}
            </span>
          </div>
        </div>
        <div className="mid flex gap-2 flex-col justify-between lg:gap-1">
          <div className="flex gap-2 items-center lg:gap-4">
            <span className="w-5 h-5 rounded-full bg-primary shadow-[0_0_7px_2px_#FD563C] lg:w-7 lg:h-7"></span>
            <h2 className="text-white text-[1rem] uppercase font-semibold lg:text-[1.3rem]">
              {data.heading}
            </h2>
          </div>
          <div className="border-l-2 border-[#c3c3c3] pl-5 ml-[0.55rem] lg:ml-[0.75rem] lg:border-l-[3px] lg:pl-7">
            <h3 className="w-48 text-white/60 font-yellowTail text-[0.7rem] uppercase tracking-wider sm:w-72 lg:text-[0.95rem] lg:w-[35rem] lg:mb-2">
              {data.subHeading}
            </h3>
            <p className="w-48 text-neutral-500 text-[0.5rem] text-justify sm:w-72 lg:text-[0.75rem] lg:w-[35rem]">
              {data.para}
            </p>
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            <span className="w-5 h-5 rounded-full bg-primary shadow-[0_0_7px_2px_#FD563C] lg:w-7 lg:h-7"></span>
            <div className="relative rotate-180">
              <img src={dateBox} className="w-14 lg:w-24" alt="date container" />
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
    <div className="w-full min-h-[60vh] flex flex-col items-center relative py-7">
      <ResumeDecoration />
      <h1 className="text-primary text-center w-40 text-2xl font-semibold relative pb-1 uppercase lg:text-4xl lg:w-56">
        Resume
        <span className="w-full h-[0.1rem] bg-primary absolute left-0 bottom-0">
          <img
            src={triangle}
            className="w-3 absolute -left-1 top-1/2 -translate-y-1/2 rotate-90"
          />
          <img
            src={triangle}
            className="w-3 absolute -right-1 top-1/2 -translate-y-1/2 -rotate-90"
          />
        </span>
      </h1>

      <div className="flex gap-4 items-center mt-5 mb-7">
        {["experience", "education"].map((tab) => (
          <button
            key={tab}
            className={`text-sm font-semibold px-1 capitalize tracking-wider ${
              activeTab === tab
                ? "text-primary border-b-2 border-white"
                : "text-neutral-300/70"
            } lg:text-lg`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="w-80 gap-3 px-2 flex flex-col items-center relative z-30 sm:w-[31.5rem] lg:w-[56.5rem] xl:w-[60rem]">
        {renderTabs(activeTab)}
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

export default Resume;
