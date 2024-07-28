import React, { useEffect, useState } from 'react'

function CursorFollower() {
  const [cursorPosition, setCursorPosition] = useState({top: 200, left: 100})

  useEffect(() => {
    const handleMouseMove = (e)=>{
      setCursorPosition({top: e.clientY, left: e.clientX});
    }
  
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [])
  
  return (
    <div data-scroll-section className='pointer-events-none'>
      <div className={`w-1 h-1 rounded-full bg-[#fd563c0f] border-[0.5px] border-white/20 fixed -translate-x-1/2 -translate-y-1/2 duration-100`} style={{ top: `${cursorPosition.top}px`, left: `${cursorPosition.left}px` }}></div>
      <div className={`w-8 h-8 rounded-full  border-[0.5px] border-white/20 fixed -translate-x-1/2 -translate-y-1/2 duration-100`} style={{ top: `${cursorPosition.top}px`, left: `${cursorPosition.left}px` }}></div>
      {/* <div className={`w-[27rem] h-[27rem] rounded-full bg-[#ff30101a] filter blur-2xl fixed -translate-x-1/2 -translate-y-1/2 duration-100`} style={{ top: `${cursorPosition.top}px`, left: `${cursorPosition.left}px` }}></div> */}
    </div>
  )
}

export default CursorFollower
