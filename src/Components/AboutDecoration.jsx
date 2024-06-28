import React from "react";
import triangle from "../assets/images/icon/triangle.svg";

function AboutDecoration() {
  return (
    <div className="w-full h-full absolute">
      {/* Small Circles */}
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[13%] left-[30%] lg:w-[0.5rem] lg:h-[0.5rem] lg:left-[35%] lg:top-[20%]"></span>
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[11%] left-[57%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[25%] left-[80%] lg:w-[0.5rem] lg:h-[0.5rem] lg:left-[70%] lg:top-[30%]"></span>

      {/* Large Circles */}
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[14%] left-[15%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[8%] left-[70%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[32%] left-[88%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[31%] left-[14%] lg:w-[0.8rem] lg:h-[0.8rem] lg:left-[24%] lg:top-[38%]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[57%] left-[24%] lg:w-[0.8rem] lg:h-[0.8rem] lg:left-[34%]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[53%] left-[77%] lg:w-[0.8rem] lg:h-[0.8rem]"></span>

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
        className="w-[0.6rem] absolute top-[43%] left-[91%]"
        alt="Triangle"
      />
    </div>
  );
}

export default AboutDecoration;
