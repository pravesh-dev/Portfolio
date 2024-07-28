import React from "react";
import './ScrollMouse.css'

function ScrollMouse(props) {
  return (
    <div className="w-full absolute bottom-3  flex flex-col justify-center items-center lg:bottom-1">
      <img
        loading="lazy"
        className="mouseImage w-[0.6rem] lg:w-[0.9rem]"
        src={props.mouse}
        alt="mouse image"
      />
      <p className="scroll text-center text-white/50 font-thin text-[0.6rem] tracking-widest lg:text-[0.8rem]">
        Scroll Down
      </p>
    </div>
  );
}

export default ScrollMouse;
