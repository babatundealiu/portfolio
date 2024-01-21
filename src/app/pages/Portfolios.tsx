import React from 'react'
import Button from '../pages/Button'
import Card2 from './Card2'
import Card3 from './Card3'
import Card1 from './Card1'
// import pic from '../../assets/img (125).jpg'
import pic from '../../assets/Screenshot 2024-01-18 162351.png'
import pic3 from '../../assets/img (124).jpg'
import pic2 from '../../assets/img3.png'

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Portfolios:React.FC = () => {
  return (
    <div>
      <div id='work' className="text-white text-center w-full xs:text-[18px] sm:text-[20px] sm:w-[80%] sm:mx-auto font-extrabold text-[25px] mb-5">
      My Creative <span className='text-secondary'>Portfolio</span> Section
      </div>
      <div  className="animate-loop-scroll group-hover:paused animate-fade-up animate-once animate-duration-[10000ms]  animate-ease-out animate-normal animate-fill-both flex w-full xs:w-[70%] xs:flex-wrap xs:mx-auto sm:w-[100%]  sm:mx-auto justify-center gap-3 ">
        <Button title='React' />
        <Button title='Javascript'/>
        <Button title='NodeJs' />
        <Button title='MongoDB' />
      </div>
      <div  className=" justify-center mt-10 gap-5 flex md:gap-7 xs:flex-col xs:mx-auto xs:w-[90%] xs:ml-9 sm:flex-col sm:mx-[61px] sm:w-[75%] w-full animate-loop-scroll group-hover:paused animate-fade-up animate-once animate-duration-[10000ms]  animate-ease-out animate-normal animate-fill-both">
          
        <Card1 image={pic2} title='Hotelfinder Web App' content='A platform for hotel accomodation'  linkIcon={<FaExternalLinkAlt/>} Git={<FaGithub size='17px' />}/>
        <Card2 image={pic} title='Mr.Bara' content='An eCommerce platform for shopping' linkIcon={<FaExternalLinkAlt/>} Git={<FaGithub size='17px' />}/>
        <Card3 image={pic3} title='Hotelfinder Web App' content='A platform for hotel accomodation' linkIcon={<FaExternalLinkAlt/>} Git={<FaGithub size='17px' />}/>

      </div>
    </div>
  )
}

export default Portfolios
 