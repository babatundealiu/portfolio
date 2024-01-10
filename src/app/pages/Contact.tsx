import React from 'react'
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";
const Contact = () => {
  return (
    <div>
      <div className="font-extrabold text-center mt-10 text-[25px] text-white">
        Contact <span className='text-secondary text-[25px]'>Me</span>
      </div>
      <div className="flex gap-5 justify-center ">
        <div className="h-9 gap-3 py-2 flex px-4 mt-3 w-[250px] rounded text-center justify-center bg shadow-2xl bg-white">
        {<CgMail className='mt-1 ' />} bab.jamiu@gmail.com
        </div>
        <div className="h-9 gap-3 py-2 flex px-4 mt-3 w-[250px] rounded text-center justify-center bg-green-300 shadow-2xl ">
        {<FaPhone className='mt-1 ' />} +2347037486311
        </div>
      </div>
    </div>
  )
}

export default Contact
