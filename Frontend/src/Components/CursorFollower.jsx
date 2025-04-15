import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

// Function component for CursorFollower
function CursorFollower() {
  // State to store mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Effect to handle mouse movement and update state
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Extract clientX and clientY from the event to get mouse position
      const { clientX, clientY } = e;
      // Update state with the new mouse position
      setMousePosition({ x: clientX, y: clientY });
    };

    // Add event listener for mouse movement
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Effect to animate cursor circles based on mouse position
  useEffect(() => {
    // Use GSAP to animate elements with class 'cursor_Circs'
    gsap.to('.cursor_Circs', {
      duration: 0.1, // Animation duration
      x: mousePosition.x, // Target x position
      y: mousePosition.y, // Target y position
      ease: "power2.out", // Easing function for animation
    });
  }, [mousePosition]);

  // JSX for rendering cursor circles
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
