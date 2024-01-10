import React from 'react'
import Button from '../pages/Button'
import Card2 from './Card2'
import pic from '../../assets/Screenshot 2024-01-07 220441.png'
import pic2 from '../../assets/Screenshot 2024-01-07 222444.png'
import pic3 from '../../assets/Screenshot 2024-01-07 224346.png'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Portfolios:React.FC = () => {
  return (
    <div>
      <div className="text-white text-center font-extrabold text-[25px] mb-5">
      My Creative <span className='text-secondary'>Portfolio</span> Section
      </div>
      <div className="flex justify-center gap-3">
        {/* <Button title='All' /> */}
        <Button title='React' />
        <Button title='Javascript'/>
        <Button title='NodeJs' />
        <Button title='MongoDB' />
      </div>
      <div className="justify-center mt-10 gap-5 flex   animate-loop-scroll group-hover:paused animate-fade-up animate-once animate-duration-[10000ms]  animate-ease-out animate-normal animate-fill-both">
          
        <Card2 image={pic} title='Hotelfinder Web App' content='A platform for hotel accomodation'  linkIcon={<FaExternalLinkAlt/>} Git={<FaGithub size='17px' />}/>
        <Card2 image={pic3} title='Hotelfinder Web App' content='A platform for hotel accomodation' linkIcon={<FaExternalLinkAlt/>} Git={<FaGithub size='17px' />}/>
        <Card2 image={pic3} title='Hotelfinder Web App' content='A platform for hotel accomodation' linkIcon={<FaExternalLinkAlt/>} Git={<FaGithub size='17px' />}/>

      </div>
    </div>
  )
}

export default Portfolios
 