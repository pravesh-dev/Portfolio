import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      setMousePosition({ x: clientX, y: clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {

    gsap.to('.cursor_Circs', {
      duration: 0.1,
      x: mousePosition.x,
      y: mousePosition.y,
      ease: "power2.out",
    });
  }, [mousePosition]);

  return (
    <div className="pointer-events-none">
      <div
        className={`cursor_Circs w-1 h-1 rounded-full bg-[#fd563c0f] border-[0.5px] border-white/20 fixed -translate-x-1/2 -translate-y-1/2 duration-100`}></div>
      <div
        className={`cursor_Circs w-8 h-8 rounded-full  border-[0.5px] border-white/20 fixed -translate-x-1/2 -translate-y-1/2 duration-100`}></div>
      {/* <div className={`cursor_Circs w-[27rem] h-[27rem] rounded-full bg-[#ff30101a] filter blur-2xl fixed -translate-x-1/2 -translate-y-1/2 duration-100`}></div> */}
    </div>
  );
}

export default CursorFollower;
