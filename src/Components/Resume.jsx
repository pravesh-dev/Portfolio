import React from "react";
import triangle from "../assets/images/Projects/triangle.svg";
import mouse from "../assets/images/icon/scrollMouse.svg";

function Resume() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center relative py-7">
      {/* <ProjectDecoration/> */}
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
