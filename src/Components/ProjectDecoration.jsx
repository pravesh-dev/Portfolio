import React from "react";
import triangle from "../assets/images/icon/triangle.svg";
import curve from '../assets/images/Projects/curve.svg'
import roundCurveLeft from '../assets/images/Projects/roundCurveLeft.svg'
import roundCurveRight from '../assets/images/Projects/roundCurveRight.svg'

function ProjectDecoration() {
  return (
    <div className="w-full h-full absolute overflow-hidden top-0 z-10 pointer-events-none">
      {/* Small Circles */}
      <span className="circle w-[0.3rem] bg-green-600 h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[14%] left-[10%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>
      <span className="circle w-[0.3rem] bg-green-600 h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[28%] left-[2%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>
      <span className="circle w-[0.3rem] bg-green-600 h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[26%] left-[93%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>
      <span className="circle w-[0.3rem] bg-green-600 h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[34%] left-[97.5%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>
      <span className="circle w-[0.3rem] bg-green-600 h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[53%] left-[93%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>
      <span className="circle w-[0.3rem] bg-green-600 h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[94.5%] left-[3%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>
      <span className="circle w-[0.3rem] bg-green-600 h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[82%] left-[95%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>

      {/* Large Circles */}
      <span className="circle w-[0.6rem] bg-green-600 h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[10%] left-[5%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] bg-green-600 h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[3.5%] left-[40%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] bg-green-600 h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[12%] left-[85%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] bg-green-600 h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[19%] left-[47%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] bg-green-600 h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[61%] left-[3.4%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] bg-green-600 h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[94%] left-[80%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] bg-green-600 h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[97.5%] left-[25%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>

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
