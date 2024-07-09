import React from "react";
import triangle from "../assets/images/icon/triangle.svg";
import curve from '../assets/images/Projects/curve.svg'
import roundCurveLeft from '../assets/images/Projects/roundCurveLeft.svg'
import roundCurveRight from '../assets/images/Projects/roundCurveRight.svg'

function ProjectDecoration() {
  return (
    <div className="w-full h-full absolute overflow-hidden top-0 z-10 pointer-events-none">
      {/* Small Circles */}
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[50%] left-[1%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[94%] left-[33%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[19%] left-[76%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[29%] left-[76%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[39%] left-[76%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[49%] left-[76%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[59%] left-[76%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>

      {/* Large Circles */}
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[14%] left-[0%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[8%] left-[80%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[32%] left-[88%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[74%] left-[89%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[81%] left-[40%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[92%] left-[86%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[92%] left-[86%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>

      {/* Triangles */}
      <img
        src={triangle}
        className="w-[0.6rem] absolute top-[4%] left-[44%] -rotate-[30deg] lg:rotate-0 lg:w-[0.8rem]"
        alt="Triangle"
      />
      <img
        src={triangle}
        className="w-[0.6rem] absolute top-[92%] left-[1.5%] -rotate-[30deg] lg:rotate-0 lg:w-[0.8rem]"
        alt="Triangle"
      />
      <img
        src={triangle}
        className="w-[0.6rem] absolute top-[96%] left-[91%] -rotate-[30deg] lg:rotate-0 lg:w-[0.8rem]"
        alt="Triangle"
      />

      {/* curves */}
      <img src={curve} className="w-[50vw] absolute top-0 left-0 lg:w-[38vw] lg:opacity-55" alt="" />
      <img src={roundCurveRight} className="w-[5rem] absolute bottom-14 right-0 lg:w-[10rem] lg:opacity-55" alt="" />
      <img src={roundCurveLeft} className="w-[5rem] absolute bottom-48 left-0 lg:w-[10rem] lg:opacity-55" alt="" />
    </div>
  );
}

export default ProjectDecoration;
