import React from 'react'
import line from  '../assets/images/footerLine.svg'
function Footer() {
  return (
    <div className='w-full h-32 border flex flex-col justify-center gap-1'>
      <div className='w-full h-10 bg-red-800'>
        <h2 className='text-white'>Developed By <span className='text-primary'>Pravesh</span></h2>
      </div>
      <img src={line} className='w-full' alt="" />
      <div className='w-full h-5 bg-blue-600'></div>
    </div>
  )
}

export default Footer
