import React from 'react'

import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa6";
const Contact:React.FC = () => {
  return (
    <div>
      <div id='contact' className="font-extrabold text-center sm:w-[100%] mt-20 sm:mx-auto mt-10 text-[25px] text-white">
        Contact <span className='text-secondary text-[25px]'>Me</span>
      </div>
      <div className="flex gap-5 xs:mx-auto xs:w-[80%] sm:mx-auto justify-center mb-0 ">
        <a href="mailto:bab.jamiu@gmail.com" >
        <div className="h-9 gap-3 py-2 flex px-4 mt-3 w-[250px] xs:text-[13px] xs:w-[150px] sm:text-[15px] sm:w-[170px] sm:gap-1 rounded text-center justify-center bg shadow-2xl bg-white">
        {<CgMail className='mt-1 ' />} bab.jamiu@gmail.com
        </div>
        </a>
        <a href="https://wa.link/2c7v01">
        <div className="h-9 gap-3 py-2 flex px-4 mt-3 w-[250px] sm:text-[15px] xs:w-[150px] xs:text-[13px] sm:w-[170px] rounded text-center justify-center bg-green-300 shadow-2xl ">
        {<FaPhone className='mt-1 ' />} +2347037486311
        </div>
        
        </a>
      </div>
      {/* <div id="contact" className='bg-[#181a1e]  text-white h-[90vh] sm:px-9 px-[6rem]'>

        <div className=" w-[1000px] md:w-[600px] sm:w-[400px] md:mx-auto bg-[#181a1e] pt-[30px] flex flex-col mx-auto">
          <form className="space-y-3">
            <div className="">
              <input type="text" className="h-[50px] w-full rounded-sm outline-none bg-[#212529] p-2" placeholder="Your Name" />
            </div>
            <div className="">
              <input type="email" className="h-[50px] w-full rounded-sm bg-[#212529] outline-none p-2" placeholder="Email" />
            </div>
            <div className="">
              <input type="text" className="h-[50px] w-full rounded-sm bg-[#212529] p-2 border-none outline-none" placeholder="Subject" />
            </div>
            <div className="">
              <textarea className="h-[180px] w-full rounded-sm focus:bg-[#212529] bg-[#212529] border-none outline-none p-2" placeholder="Your Message" />
            </div>
            <button className=" text-white bg-[#E99343] rounded px-4 py-2 border-none font-semibold">Submit</button>
          </form>
        </div>
    </div> */}
    </div>
  )
}

export default Contact
