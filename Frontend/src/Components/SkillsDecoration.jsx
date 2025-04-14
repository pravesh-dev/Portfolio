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
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[7%] left-[35%] lg:w-[0.5rem] lg:h-[0.5rem] lg:left-[41%]"></span>
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[40%] left-[90%] lg:w-[0.5rem] lg:h-[0.5rem] lg:top-[9%] lg:left-[91%]"></span>
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[90%] left-[68%] lg:w-[0.5rem] lg:h-[0.5rem] lg:left-[45%] lg:top-[85%]"></span>
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[60%] left-[25%] lg:w-[0.5rem] lg:h-[0.5rem] lg:left-[4%] lg:top-[56.5%]"></span>

      {/* Large Circles */}
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[5%] left-[62%] lg:w-[0.8rem] lg:h-[0.8rem] lg:top-[2%] lg:left-[75%]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[18%] left-[0.5%] lg:w-[0.8rem] lg:h-[0.8rem] lg:top-[27%] lg:left-[3%]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[90%] left-[27%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[85%] left-[85%] lg:w-[0.8rem] lg:h-[0.8rem] lg:top-[60%] lg:left-[96%]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[21%] left-[50.5%] lg:w-[0.8rem] lg:h-[0.8rem] lg:top-[12%] lg:left-[54%]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[80%] left-[40%] lg:w-[0.8rem] lg:h-[0.8rem] lg:top-[70%] lg:left-[42%] xl:left-[38%] xl:top-[67%]"></span>

      {/* Triangles */}
      <img
        src={triangle}
        className="w-[0.6rem] absolute top-[9%] left-[88%] -rotate-[30deg] lg:rotate-0 lg:w-[0.8rem] lg:left-[10%]"
        alt="Triangle"
      />
      <img
        src={triangle}
        className="w-[0.6rem] absolute top-[86%] left-[5%] -rotate-[30deg] lg:rotate-0 lg:w-[0.8rem] lg:left-[80%] lg:top-[80%]"
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
