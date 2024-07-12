import React from "react";
import triangle from "../assets/images/icon/triangle.svg";
import curveTop from '../assets/images/Resume/curveTop.svg'
import curveBottom from '../assets/images/Resume/curveBottom.svg'
import curveRight from '../assets/images/Resume/curveRight.svg'

function ResumeDecoration() {
  return (
    <div className="w-full h-full absolute overflow-hidden top-0 z-10 pointer-events-none">
      {/* Small Circles */}
      

      {/* Large Circles */}

      {/* Triangles */}

      {/* curves */}
      <img src={curveTop} className="w-24 absolute top-0 left-0 sm:w-40" alt="curve" />
      <img src={curveRight} className="w-36 absolute top-0 right-0 sm:w-56" alt="curve" />
      <img src={curveBottom} className="w-28 absolute bottom-0 left-0 sm:w-32" alt="curve" />
    </div>
  );
}

export default ResumeDecoration;
