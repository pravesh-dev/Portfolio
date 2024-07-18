import React from 'react'
import line from  '../assets/images/footerLine.svg';
import { IoIosCall, IoIosPin, IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub, FaSquareInstagram } from "react-icons/fa6";

function Footer() {
  return (
    <div className='w-full h-52 flex flex-col justify-center gap-4 px-2 bg-[#161616] md:h-32 lg:h-40'>
      <div className='w-full flex text-white flex-col gap-2 md:flex-row md:justify-between md:mt-6 lg:px-14 xl:px-32'>
        <h2 className='text-white text-[0.9rem] font-yellowTail lg:text-2xl lg:tracking-widest'>Developed By <span className='text-primary font-bold tracking-widest font-yellowTail'>Pravesh</span></h2>
        <a href="tel:+91 9991831473" className='text-[0.8rem] flex items-center gap-1 lg:text-[0.9rem] lg:tracking-wider'><span className='text-primary text-[1.2rem] lg:text-3xl'><IoIosCall/></span> +91 9991831473</a>
        <h3 className='text-[0.8rem] flex items-center gap-1 lg:text-[0.9rem] lg:tracking-wider'><span className='text-primary text-[1.2rem] lg:text-3xl'><IoIosPin/></span> 84/3 Niwaz Nagar, Narnaul, Haryana</h3>
        <div className='flex gap-1 lg:gap-2'>
          <a href="https://www.linkedin.com/in/pravesh-saini-b7ab39280/" target="_blank" rel="noopener noreferrer" className='text-[1rem] lg:text-xl'><FaLinkedin/></a>
          <a href="https://github.com/pravesh-dev" target="_blank" rel="noopener noreferrer" className='text-[1rem] lg:text-xl'><FaGithub /></a>
          <a href="https://www.instagram.com/dev_pravesh/" target="_blank" rel="noopener noreferrer" className='text-[1rem] lg:text-xl'><FaSquareInstagram /></a>
          <a href="mailto:praveshsaini.dev@gmail.com" className='text-[1rem] lg:text-xl'><IoMdMail /></a>
        </div>
      </div>
      <img src={line} className='w-full lg:w-[95%] lg:mx-auto' alt="" />
      <div className='w-full h-5 text-white text-xs flex items-center justify-center uppercase lg:text-sm lg:tracking-widest'>© <span className='text-primary mx-1 font-bold'>Pravesh</span> 2024. ALL rIGHTS rESERVED</div>
    </div>
  )
}

export default Footer
