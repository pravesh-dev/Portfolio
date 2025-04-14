import React, { useRef, useEffect } from "react";
import triangle from "../assets/images/icon/triangle.svg";
import aboutLongCurve from "../assets/images/About/aboutLongCurve.svg";
import aboutLongCurve2 from "../assets/images/About/aboutLongCurve2.svg";
import aboutShortCurve from "../assets/images/About/aboutShortCurve.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AboutDecoration() {
  const componentRef = useRef(null);

  // useEffect(() => {
  //   if (isCompleted) {
  //     let tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: componentRef.current,
  //         start: "15% center",
  //         end: "40% center",
  //         scrub: 8,
  //       },
  //     });

  //     tl.from(".curve2", { y: 200 });
  //   }
  // }, [isCompleted]);

  return (
    <div ref={componentRef} className="w-full h-full absolute overflow-hidden">
      {/* Small Circles */}
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[50%] left-[1%] sm:top-[30%] sm:left-[8%] lg:w-[0.5rem] lg:h-[0.5rem] lg:top-[60%] lg:left-[98.5%] xl:top-[53%]"></span>
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[94%] left-[33%] lg:w-[0.5rem] lg:h-[0.5rem]"></span>
      <span className="circle w-[0.3rem] h-[0.3rem] border border-[#A5A5A5] rounded-full absolute top-[19%] left-[76%] lg:w-[0.5rem] lg:h-[0.5rem] lg:top-[78%] lg:left-[45%]"></span>

      {/* Large Circles */}
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[14%] left-[0%] sm:left-[15%] lg:w-[0.8rem] lg:h-[0.8rem] lg:left-[3.5%]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[8%] left-[80%] sm:top-[12%] sm:left-[88%] lg:w-[0.8rem] lg:h-[0.8rem] lg:left-[58%] lg:top-[8%] xl:top-[4.5%]"></span>
      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[32%] left-[88%] sm:left-[50%] lg:w-[0.8rem] lg:h-[0.8rem] lg:left-[43%] lg:top-[22%]"></span>

      <span className="circle w-[0.6rem] h-[0.6rem] border border-[#A5A5A5] rounded-full absolute top-[74%] left-[89%] sm:left-[95%] sm:top-[70%] lg:w-[0.8rem] lg:h-[0.8rem] lg:left-[97%] lg:top-[53%] xl:top-[45%]"></span>
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

      {/* curves */}
      <img
        src={aboutLongCurve}
        className="curve1 w-full absolute left-0 top-0 sm:hidden"
        alt=""
      />
      <img
        src={aboutLongCurve2}
        className="curve2 w-full absolute left-0 top-10 hidden sm:block lg:-top-24 xl:rotate-6"
        alt=""
      />
      <img
        src={aboutShortCurve}
        className="curve3 absolute bottom-0 right-0 lg:bottom-10 xl:w-36"
        alt=""
      />
    </div>
  );
}

export default AboutDecoration;
