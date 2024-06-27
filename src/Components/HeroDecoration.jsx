import React from "react";
import triangle from "../assets/images/icon/triangle.svg";
import heroCurveTop from "../assets/images/heroCurveTop.svg";
import heroCurveBottom from "../assets/images/heroCurveBottom.svg";
import heroCurveLong from "../assets/images/heroCurveLong.svg";

function HeroDecoration() {
  return (
    <div className="w-full h-full absolute">
      {/* Small Circles */}
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[13%] left-[30%]"></span>
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[11%] left-[57%]"></span>
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[25%] left-[80%]"></span>
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[56%] left-[53%]"></span>
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[69%] left-[42%]"></span>
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[66%] left-[92%]"></span>
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[73%] left-[73%]"></span>

      {/* Large Circles */}
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[14%] left-[15%]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[8%] left-[70%]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[32%] left-[88%]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[31%] left-[14%]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[57%] left-[24%]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[53%] left-[77%]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[70%] left-[6%]"></span>

      {/* Triangles */}
      <img
        src={triangle}
        className="w-[0.6rem] absolute top-[16%] left-[68%]"
        alt="Triangle"
      />
      <img
        src={triangle}
        className="w-[0.6rem] absolute top-[23%] left-[91%]"
        alt="Triangle"
      />
      <img
        src={triangle}
        className="w-[0.6rem] absolute top-[50%] left-[6%]"
        alt="Triangle"
      />
      <img
        src={triangle}
        className="w-[0.6rem] absolute top-[67%] left-[65%]"
        alt="Triangle"
      />

      {/* Curves */}
      <img
        src={heroCurveTop}
        alt="curve lines"
        className="absolute right-0 top-0 w-24 md:w-36"
      />
      <img
        src={heroCurveBottom}
        alt="curve lines"
        className="absolute left-0 bottom-5 w-11 md:w-14"
      />
      <img
        src={heroCurveLong}
        alt="curve lines"
        className="absolute left-0 bottom-[28%] w-full md:bottom-[20%] md:opacity-25"
      />
    </div>
  );
}

export default HeroDecoration;
