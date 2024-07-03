import React from 'react'
import line from  '../assets/images/footerLine.svg';
import { IoIosCall, IoIosPin, IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaSquareInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className='w-full h-52 flex flex-col justify-center gap-4 px-2 bg-[#161616]'>
      <div className='w-full flex text-white flex-col gap-2'>
        <h2 className='text-white text-[0.9rem]'>Developed By <span className='text-primary font-bold tracking-wider'>Pravesh</span></h2>
        <a href="tel:+91 9991831473" className='text-[0.8rem] flex items-center gap-1'><span className='text-primary text-[1.2rem]'><IoIosCall/></span> +91 9991831473</a>
        <h3 className='text-[0.8rem] flex items-center gap-1'><span className='text-primary text-[1.2rem]'><IoIosPin/></span> 84/3 Niwaz Nagar, Narnaul, Haryana</h3>
        <div className='flex gap-1'>
          <a className='text-[1rem]' href="#"><FaLinkedin/></a>
          <a className='text-[1rem]' href="#"><FaGithub /></a>
          <a className='text-[1rem]' href="#"><FaSquareInstagram /></a>
          <a className='text-[1rem]' href="#"><IoMdMail /></a>
        </div>
      </div>
      <img src={line} className='w-full' alt="" />
      <div className='w-full h-5 text-white text-xs flex items-center justify-center uppercase'>© <span className='text-primary mx-1 font-bold'>Pravesh</span> 2024. ALL rIGHTS rESERVED</div>
    </div>
  )
}

export default Footer
