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
    <div>
      <div className={`w-16 h-16 rounded-full border border-neutral-400 shadow-[0_0_7px_white] fixed -translate-x-1/2 -translate-y-1/2 `} style={{ top: `${cursorPosition.top}px`, left: `${cursorPosition.left}px` }}></div>
      <div className={`w-28 h-28 rounded-full border border-neutral-400 shadow-[0_0_7px_white] fixed -translate-x-1/2 -translate-y-1/2 `} style={{ top: `${cursorPosition.top}px`, left: `${cursorPosition.left}px` }}></div>
    </div>
  )
}

export default CursorFollower
