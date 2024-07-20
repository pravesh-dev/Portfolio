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
    <div className='pointer-events-none'>
      <div className={`w-5 h-5 rounded-full bg-[#fd563c1c] shadow-[0_0_12px_#ff7337] fixed -translate-x-1/2 -translate-y-1/2 duration-100`} style={{ top: `${cursorPosition.top}px`, left: `${cursorPosition.left}px` }}></div>
      {/* <div className={`w-20 h-20 rounded-full bg-[#fd563c1c] shadow-[0_0_15px_#ff7337] fixed -translate-x-1/2 -translate-y-1/2 duration-100 delay-[0.01s]`} style={{ top: `${cursorPosition.top}px`, left: `${cursorPosition.left}px` }}></div> */}
    </div>
  )
}

export default CursorFollower
