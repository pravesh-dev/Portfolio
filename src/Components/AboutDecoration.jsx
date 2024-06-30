import React from "react";
import triangle from "../assets/images/icon/triangle.svg";

function AboutDecoration() {
  return (
    <div className="w-full h-full absolute">
      {/* Small Circles */}
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[50%] left-[1%] sm:top-[30%] sm:left-[8%] lg:w-[0.5rem] lg:h-[0.5rem] lg:top-[60%] lg:left-[98.5%]"></span>
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[94%] left-[33%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[19%] left-[76%] lg:w-[0.5rem] lg:h-[0.5rem] lg:top-[78%] lg:left-[45%]"></span>

      {/* Large Circles */}
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[14%] left-[0%] sm:left-[15%] lg:w-[0.8rem] lg:h-[0.8rem] lg:left-[3.5%]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[8%] left-[80%] sm:top-[12%] sm:left-[88%] lg:w-[0.8rem] lg:h-[0.8rem] lg:left-[58%] lg:top-[8%]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[32%] left-[88%] sm:left-[50%] lg:w-[0.8rem] lg:h-[0.8rem] lg:left-[43%] lg:top-[22%]"></span>
      
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[74%] left-[89%] sm:left-[95%] sm:top-[70%] lg:w-[0.8rem] lg:h-[0.8rem] lg:left-[97%] lg:top-[53%]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[81%] left-[40%] lg:w-[0.8rem] lg:h-[0.8rem] lg:left-[14%] lg:top-[87%]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[92%] left-[86%] sm:top-[87%] sm:left-[80%] lg:w-[0.8rem] lg:h-[0.8rem] lg:top-[20%] lg:left-[75%]"></span>

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
      <img
        src={triangle}
        className="w-[0.6rem] absolute top-[96%] left-[91%] -rotate-[30deg] lg:rotate-0 lg:w-[0.8rem] lg:left-[84%] lg:top-[90%]"
        alt="Triangle"
      />
    </div>
  );
}

export default AboutDecoration;
