import React, { useState } from "react";
import bar from "../assets/images/icon/bar.svg";

function Header() {
  const [activeNav, setActiveNav] = useState(false)
  const handleNav = ()=>{
    setActiveNav(!activeNav)
  }
  return (
    <>
    <div className="w-full py-5  flex items-center justify-between px-7 fixed top-0 left-0 z-[99]">
      <h2 className="font-yellowTail text-white text-xl">Pravesh</h2>
      <img src={bar} onClick={handleNav} className="cursor-pointer" alt="" />
    </div>
      <div className={`w-[80%] h-screen bg-red-500 fixed z-[100] ${activeNav ? "block" : "hidden"}`}></div>
    </>
  );
}

export default Header;
