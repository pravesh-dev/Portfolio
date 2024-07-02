import React from "react";
import triangle from "../assets/images/icon/triangle.svg";
import shortCurve from "../assets/images/Skills/shortCurve.svg";
import longCurve from "../assets/images/Skills/longCurve.svg";

function SkillsDecoration() {
  return (
    <div className="w-full h-full absolute overflow-hidden">
      {/* Small Circles */}
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[50%] left-[1%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[60%] left-[1%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[70%] left-[1%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[80%] left-[1%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>

      {/* Large Circles */}
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[14%] left-[0%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[24%] left-[0%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[34%] left-[0%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[44%] left-[0%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[54%] left-[0%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[64%] left-[0%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>

      {/* Triangles */}
      <img
        src={triangle}
        className="w-[0.6rem] absolute top-[4%] left-[44%] -rotate-[30deg] sm:top-[10%] lg:left-[93%] lg:rotate-0 lg:w-[0.8rem]"
        alt="Triangle"
      />
      <img
        src={triangle}
        className="w-[0.6rem] absolute top-[92%] left-[1.5%] -rotate-[30deg] sm:top-[83%] sm:left-[8%] lg:rotate-0 lg:w-[0.8rem] lg:left-[2.5%] lg:top-[70%]"
        alt="Triangle"
      />

      {/* curves */}
      <img
        src={shortCurve}
        className="w-48 absolute left-0 top-0 sm:hidden"
        alt=""
      />
      <img
        src={longCurve}
        className="w-96 absolute left-0 bottom-0 sm:hidden"
        alt=""
      />
    </div>
  );
}

export default SkillsDecoration;
