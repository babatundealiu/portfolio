import React from 'react'
import { SiHey } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub} from "react-icons/fa";
import pics from "../../assets/myPic.jpg"
import Reactlogo from "../../assets/react.svg"
import mongo from "../../assets/mongo.png"
import js from "../../assets/js.png"
import ts from "../../assets/ts.png"
import node from "../../assets/nodeexpress.png"

const Hero = () => {
  return (
    <div className=' h-[530px] w-full flex   mt-[100px]   '>
        <div className="space-y-5 animate-loop-scroll group-hover:paused animate-fade-up animate-once animate-duration-[10000ms] animate-ease-out animate-normal animate-fill-both">
        <div className="bg-white h-[80px] w-[175px] ml-32 flex  rounded-3xl">
        <div className="text-yellow-300 mt-5 ml-5 "><SiHey size='30px'/></div>

        <div className="flex-col  ml-5 mt-2">
            <div className="text-[#8f8f8e] mr-5 text-[12px]">Hello I am</div>
            <div className="text-secondary text-[30px] font-bold">Jamiu</div>
        </div>
      </div>
      <div className="bg-white h-[70px] font-semibold  w-[175px] ml-32 text-[12px] pt-3 space-y-2 text-[#8f8f8e] rounded-3xl">
        <div className="">WEB DEVELOPER</div>
        <div className="">SOFTWARE ENGINEER</div>
      </div>
      <div className="flex ml-[149px] gap-4 ">
        <div className='h-7 w-7 rounded-full mt-5 border-2 anim border-secondary text-secondary overflow-hidden'>
            <div className="justify-center flex align-middle text-center mt-2"><FaXTwitter size='9px' /></div>
        </div>
        <div className='h-9 w-9 rounded-full mt-12 border-[3px] border-secondary text-secondary overflow-hidden'>
            
            <div className="justify-center flex align-middle text-center mt-2"><FaLinkedinIn size='12px' /></div>
        </div>
        <div className='h-7 w-7 rounded-full mt-5 border-[3px] border-secondary text-secondary overflow-hidden'>
            <div className="justify-center flex align-middle text-center mt-2"><FaGithub size='9px' /></div>
        </div>
      </div>
        </div>
        <div className="h-[450px] ml-40 w-[350px] mt-3 rounded-b-none rounded-full overflow-hidden animate-loop-scroll group-hover:paused animate-fill-both  animate-pulse animate-once">
            <img src={pics} className='w-full h-full object-fit' alt="" />
        </div>
        <div className="flex-col mt-2 ml-14 space-y-7 animate-once animate-pulse animate-ease-out">
        <div className="h-16 w-16 rounded-full overflow-hidden bg-white">
            <img 
            src={Reactlogo}
            alt=""
            className='flex mt justify-center h-10 w-14 ml-1 align-middle text-center mt-3' />
        </div>
        <div className="h-[75px] w-[75px] rounded-full ml-10 overflow-hidden bg-white">
            <img 
            src={ts}
            alt=""
            className='flex mt justify-center h-10  w-10 ml-3 align-middle text-center mt-3' />
        </div>
        <div className="h-[85px] w-[85px] rounded-full overflow-hidden ml-20 bg-white">
            <img 
            src={js}
            alt=""
            className='flex mt justify-center h-10 w-10 ml-3 align-middle text-center mt-3' />
        </div>
        <div className=" rounded-full h-[75px] w-[75px] overflow-hidden ml-10 bg-white">
            <img 
            src={node}
            alt=""
            className='flex mt justify-center h-10 w-14 ml-1 align-middle text-center mt-3' />
        </div>
        <div className="h-16 w-16 rounded-full overflow-hidden bg-white">
            <img 
            src={mongo}
            alt=""
            className='flex mt justify-center h-10 w-10 ml-3 align-middle text-center mt-3' />
        </div>
        </div>
        
      
    </div>
  )
}

export default Hero
