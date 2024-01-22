import React from 'react'
import ht from '../../assets/html.svg'
import css from '../../assets/css.svg'
import jss from '../../assets/javascript.svg'
import react2 from '../../assets/react2.svg'
import ts from '../../assets/typescript.svg'
import redux from '../../assets/redux.svg'
import git from '../../assets/git.svg'
import node from '../../assets/node (1).svg'
import express from '../../assets/expressj.svg'
import tailwind from '../../assets/tailwindcss.svg'

const Skills:React.FC = () => {
  return (
    <div id='skills' className='mt-10 text-center font-montserrat mb-10 md:mt-20'>
        <div className="justify-center text-[25px] xs:mx-auto xs:w-[90%]  sm:mx-auto sm:mr-[1.5rem] mb-4 text-white font-extrabold">Skills & <span className='text-secondary'>Experience</span></div>
    <div className="flex md:flex-col xs:flex-col sm:flex-col">
    <div className="flex-col ">
    <div className="text-left pl-16 text-white font-bold text-[23px] mb-7 mt-5">Skills</div>
    <div className="animate-loop-scroll group-hover:paused animate-fade-up animate-once animate-duration-[10000ms]  animate-ease-out animate-normal animate-fill-both flex-wrap flex w-[480px] xs:w-[300px] xs:mx-auto xs:pl-5 sm:w-[400px] sm:pl-14 pl-[120px] gap-16">
     <div className="flex-col animate-fade-up animate-once animate-duration-[2000ms] animate-ease-out animate-normal animate-fill-both">
        <img src={ht} className='h-10' alt="" />
        <div className="text-left text-white font-semibold text-[11px] mt-1">HTML</div>
      </div>
      <div className="flex-col animate-fade-up animate-once animate-duration-[2000ms]  animate-ease-out animate-normal animate-fill-both">
        <img src={css} className='h-10' alt="" />
        <div className="text-left text-white font-semibold text-[11px] mt-1 ml-1">CSS</div>
      </div>
      <div className="flex-col animate-fade-up animate-once animate-duration-[2000ms] animate-ease-out animate-normal animate-fill-both">
        <img src={jss} className='h-10' alt="" />
        <div className="text-left text-white font-semibold text-[11px] mt-1">Jasacript</div>
      </div>
      <div className="flex-col animate-fade-up animate-once animate-duration-[2000ms]  animate-ease-out animate-normal animate-fill-both">
        <img src={react2} className='h-10' alt="" />
        <div className="text-left text-white font-semibold text-[11px] mt-1">React</div>
      </div>
      <div className="flex-col animate-fade-up animate-once animate-duration-[2000ms] animate-delay-[1000ms] animate-ease-out animate-normal animate-fill-both">
        <img src={ts} className='h-10' alt="" />
        <div className="text-left text-white font-semibold text-[11px] mt-1">Typescript</div>
      </div>
      <div className="flex-col animate-fade-up animate-once animate-duration-[2000ms] animate-delay-[1000ms] animate-ease-out animate-normal animate-fill-both">
        <img src={redux} className='h-10' alt="" />
        <div className="text-left text-white font-semibold text-[11px] mt-1">Redux</div>
      </div>
      <div className="flex-col animate-fade-up animate-once animate-duration-[2000ms] animate-delay-[1000ms] animate-ease-out animate-normal animate-fill-both">
        <img src={git} className='h-10 w-10' alt="" />
        <div className="text-left text-white font-semibold text-[11px] mt-1">Git</div>
      </div>
      <div className="flex-col animate-fade-up animate-once animate-duration-[3000ms] animate-delay-[1000ms] animate-ease-out animate-normal animate-fill-both">
        <img src={node} className='h-10' alt="" />
        <div className="text-left text-white font-semibold text-[11px] mt-1">NodeJs</div>
      </div>
      <div className="flex-col animate-fade-up animate-once animate-duration-[3000ms] animate-delay-[1000ms] animate-ease-out animate-normal animate-fill-both">
        <img src={express} className='h-10' alt="" />
        <div className="text-left text-white font-semibold text-[11px] mt-1">ExpressJs</div>
      </div>
      <div className="flex-col animate-fade-up animate-once animate-duration-[3000ms] animate-delay-[1000ms] animate-ease-out animate-normal animate-fill-both">
        <img src={tailwind} className='h-10' alt="" />
        <div className="text-left text-white font-semibold text-[11px] mt-1">Tailwindcss</div>
      </div>
     </div>
    </div>
    <div className="md:flex md:mt-10 flex xs:flex-col  sm:flex-col ">

    <div className="ml-20 xs:mx-auto xs:ml-7 sm:ml-14 font-montserrat">
      <div className="text-left text-white font-bold text-[22px] mb-4 mt-5 font-montserrat">Experience</div>

    <div className="space-y-4">
        <div className="flex gap-5 text-[#858484]">
        <div className="text-[12px] mt-1 font-medium">2023 - current</div>
        <div className="flex-col ">
            <div className="text-[14px]  font-semibold font-montserrat">Fullstack Engineering Intern</div>
            <div className="text-[12px] text-left">Kode10X</div>
        </div>
        
      </div>
      <div className="flex gap-5 text-[#858484]">
        <div className="text-[12px] mt-1 font-medium">2020 - 2021</div>
        <div className="flex-col ml-3 ">
            <div className="text-[14px]  font-semibold font-montserrat">IT Support</div>
            <div className="text-[12px] text-left">Opera Ads</div>
        </div>
        
      </div>
            
    </div>
      

      </div>
      <div className="ml-20 xs:mx-auto xs:w-[90%] sm:ml-14 font-montserrat">
      <div className="text-left text-white font-bold  xs:ml-2 text-[22px] mb-4 mt-5 ">Education</div>
      <div className="">
      <div className="flex gap-5 text-[#858484]">
        <div className="flex-col xs:ml-2 ">
            <div className="text-[12px] text-left">HND, Urban And Regional Planning</div>
            <div className="text-[14px]  font-semibold font-montserrat">Kwara State Polytechnic, Ilorin</div>
        </div>
        <div className="text-[12px] mt-1 font-medium">2014</div>

        
      </div>
      </div>

      <div className="text-left text-white font-bold xs:ml-2 text-[22px] mb-4 font-montserrat mt-5">Certification</div>
      <div className="flex-col xs:ml-2 space-y-3">
      <div className="flex gap-5 text-[#858484]">
        <div className="flex-col ml- ">
            <div className="text-[12px] text-left">AGSMEIS Training</div>
            <div className="text-[14px]  font-semibold font-montserrat"> Pan-Atlantic University</div>
        </div>
        <div className="text-[12px] mt-1 font-medium">2020 </div>

        
      </div>
      <div className="flex gap-5 text-[#858484]">
        <div className="flex-col ml- ">
            <div className="text-[12px] text-left">Fullstack Engineering</div>
            <div className="text-[14px]  font-semibold font-montserrat"> Kode10X Technology Solutions</div>
        </div>
        <div className="text-[12px] mt-1 font-medium">2023</div>

        
      </div>
      </div>

      </div>
    </div>


    </div>
    
    </div>
  )
}

export default Skills
