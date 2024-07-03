import React from 'react'
import line from  '../assets/images/footerLine.svg';
import { IoIosCall, IoIosPin, IoMdMail } from "react-icons/io";
import { FaLinkedin, FaRegCopyright } from "react-icons/fa";
import { FaGithub, FaSquareInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className='w-full h-32 border flex flex-col justify-center gap-1'>
      <div className='w-full h-10 bg-red-800'>
        <h2 className='text-white'>Developed By <span className='text-primary'>Pravesh</span></h2>
        <a href="tel:+91 9991831473">+91 9991831473</a>
      </div>
      <img src={line} className='w-full' alt="" />
      <div className='w-full h-5 bg-blue-600'></div>
    </div>
  )
}

export default Footer
