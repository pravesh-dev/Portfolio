import React from "react";
import triangle from "../assets/images/icon/triangle.svg";
import shortCurve from "../assets/images/Skills/shortCurve.svg";
import shortCurveBig from "../assets/images/Skills/shortCurveBig.svg";
import longCurve from "../assets/images/Skills/longCurve.svg";
import longCurveBig from "../assets/images/Skills/longCurveBig.svg";

function SkillsDecoration() {
  return (
    <div className="w-full h-full absolute overflow-hidden">
      {/* Small Circles */}
      <span className="circle w-[0.3rem] bg-green-600 h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[7%] left-[35%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>
      <span className="circle w-[0.3rem] bg-green-600 h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[40%] left-[90%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>
      <span className="circle w-[0.3rem] bg-green-600 h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[90%] left-[68%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>
      <span className="circle w-[0.3rem] bg-green-600 h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[60%] left-[25%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>

      {/* Large Circles */}
      <span className="circle w-[0.6rem] bg-green-600 h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[5%] left-[62%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] bg-green-600 h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[18%] left-[0.5%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] bg-green-600 h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[90%] left-[27%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] bg-green-600 h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[85%] left-[85%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] bg-green-600 h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[21%] left-[50.5%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] bg-green-600 h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[80%] left-[40%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>

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
      <img
        src={shortCurveBig}
        className="w-80 absolute left-0 top-0 hidden sm:block"
        alt=""
      />
      <img
        src={longCurveBig}
        className="w-[65rem] absolute left-0 bottom-0 hidden sm:block xl:w-[65rem]"
        alt=""
      />
    </div>
  );
}

export default SkillsDecoration;
