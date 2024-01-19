import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub} from "react-icons/fa";
import pics from "../../assets/myPic.jpg"
import Reactlogo from "../../assets/react.svg"
import mongo from "../../assets/mongo.png"
import js from "../../assets/js.png"
import ts from "../../assets/ts.png"
import node from "../../assets/nodeexpress.png"
import cv from '../../assets/myCv.pdf'
// import { TECarousel, TECarouselItem } from "tw-elements-react";


const Hero:React.FC = () => {
  return (
    <div className=' h-[530px] sm:h-[850px] flex sm:flex-col xs:h-[850px] xs:flex-col  w-full    mt-[100px]   '>
        <div className=" space-y-5 animate-loop-scroll group-hover:paused animate-jump-in animate-once animate-duration-[5000ms] animate-ease-out animate-normal animate-fill-both">

        <div className="bg-white sm:h-[120px] sm:w-[91%] xs:h-[120px] xs:w-[91%] h-[80px] w-[175px] ml-32 flex sm:mx-auto xs:mx-auto md:ml-10 rounded-3xl">
        <div className="flex-col  ml-10 mt-2">
            <div className="text-[#8f8f8e] sm:text-[25px] xs:text-[25px] font-medium  text-center text-[12px]">Hello I am</div>
            <div className="text-secondary sm:text-[50px] sm:leading-[3rem] text-[30px] font-bold">Jamiu</div>
        </div>
      </div>
      <div className="bg-white h-[70px] sm:text-[20px] sm:h-[120px] sm:w-[91%] xs:text-[20px] xs:h-[120px] xs:w-[91%] text-center sm:mx-auto xs:mx-auto font-medium  w-[175px] ml-32 text-[12px] md:ml-10 pt-3 space-y-2 text-[#8f8f8e] rounded-3xl">
        <div className="sm:mt-3 xs:mt-3">WEB DEVELOPER</div>
        <div className="">SOFTWARE ENGINEER</div>
      </div>
      <div className="flex ml-[149px] gap-4  sm:ml-12 xs:ml-12 md:ml-10">
        <a href="https://x.com/spicyfistjay/status/1747134465036398605?s=46">
        <div className='h-9 w-9 rounded-full mt-5 border-[3px] anim border-secondary text-secondary overflow-hidden'>
            <div className="justify-center flex align-middle text-center mt-2 animate-pulse"><FaXTwitter size='14px' /></div>
        </div>
        </a>
        <a href="https://www.linkedin.com/in/aliu-babatunde-jamiu-9a700119a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_apputm_source=share&utm_medium=member_ios">
        <div className='h-9 w-9 rounded-full mt-12 border-[3px] border-secondary text-secondary overflow-hidden'>
            <div className="justify-center flex align-middle text-center mt-2 animate-pulse"><FaLinkedinIn size='14px' /></div>
        </div>
        </a>
        <a href="https://github.com/babatundealiu">
        <div className='h-9 w-9 rounded-full mt-5 border-[3px] border-secondary text-secondary overflow-hidden'>
            <div className="justify-center flex align-middle text-center mt-2 animate-pulse "><FaGithub size='14px' /></div>
        </div>
        </a>
      </div>
      <div className="ml-40 sm:ml-16 xs:ml-14">
      <a href={cv}
        download=''
        className=" text-white px-8 w-20 py-3 xs:px-4 xs:py-2 rounded-full border hover:text-secondary hover:font-extrabold text-[12px] ">View <span className='font- text-[15px]'>CV</span>
      </a>

      </div>

     
        </div>
        <div className="xl:w-[33%] xl:mx-auto xl:ml-28 h-[450px]  sm:h-[300px] xs:h-[300px] md:ml-12 md:w-[300px] md:h-[400px] sm:w-[90%] sm:mx-auto  sm:justify-center xs:w-[90%] xs:mx-auto  xs:justify-center ml-40 w-[350px] mt-3 rounded-b-none rounded-full overflow-hidden animate-duration-[3000ms] animate-delay-300 animate-fade-down animate-ease-out animate-normal group-hover:paused animate-fill-both animate-once">
            <img src={pics} className='w-full h-full object-cover  ' alt="" />
        </div>animate
        <div className="lg:flex-col md:ml-5 xl:mr-28  sm:flex sm:ml-8 sm:space-x-5 sm:mx-auto sm:w-[90%] sm:mt-10 sm:space-y-0 xs:flex xs:mx-auto xs:w-[90%] xs:space-x-6 xs:mt-10 xs:space-y-0 mt-2 ml-14 space-y-7 animate-once animate-pulse animate-ease-out">
        <div className="h-16 w-16 rounded-full md:hidden  overflow-hidden bg-white xs:h-10 xs:w-20">
            <img 
            src={Reactlogo}
            alt=""
            className='flex mt justify-center  h-10 w-14 xs:h-4 xs:mx-auto xs:text-center   xs:w-full ml-1 align-middle text-center mt-3' />
        </div>
        <div className="h-[75px] w-[75px] rounded-full ml-10 overflow-hidden bg-white xs:h-10 xs:w-20">
            <img 
            src={ts}
            alt=""
            className='flex mt justify-center sm:mt-4 sm:ml-4 h-10  w-10 ml-4  xs:h-4 xs:w-5 xs:ml-2 xs:mb-1 align-middle text-center mt-4' />
        </div>
        <div className="h-[85px] w-[85px] rounded-full overflow-hidden ml-20 bg-white xs:h-10 xs:w-20 ">
            <img 
            src={js}
            alt=""
            className='flex mt justify-center sm:mt-4 sm:ml-4 h-10  w-10 ml-6  xs:h-4 xs:w-5 xs:ml-2 xs:mb-1 align-middle text-center mt-5' />
        </div>
        <div className=" rounded-full h-[75px] w-[75px] overflow-hidden ml-10 bg-white xs:h-10 xs:w-20">
            <img 
            src={node}
            alt=""
            className='flex mt justify-center  h-10 w-14 xs:h-5 xs:mx-auto xs:text-center  xs:w-full ml-1 align-middle text-center mt-3' />
        </div>
        <div className="h-16 w-16 rounded-full md:hidden overflow-hidden bg-white sm:hidden xs:h-10 xs:w-20">
            <img 
            src={mongo}
            alt=""
            className='flex mt justify-center h-10 w-10 ml-3 align-middle text-center mt-3 xs:h-10 xs:w-20' />
        </div>
        </div>
        
      
    </div>
  )
}

export default Hero
