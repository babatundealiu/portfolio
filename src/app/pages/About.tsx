import React from 'react'
import Card from '../pages/Card'
import pic from "../../assets/fd.jpg"
import backend from "../../assets/bd.jpg"
import js from "../../assets/wd.jpg"
import mern from "../../assets/mern.jpg"
// import mongo from "../../assets/mongo.png"

const About:React.FC = () => {
  return (
    <div >
      <div className="text-white text-[27px] justify-center text-center font-extrabold ">
        Effective <span className='text-secondary'>Software Development</span> Process <br />Make the <span className='text-secondary'>Complex </span>Appear to be <span className='text-secondary'>Simple</span>.
      </div>
      <div className="flex gap-7 mt-7 justify-center">
        <Card icon={js} title='WEB DEVELOPMENT' content='As a skilled web developer, I excel in crafting stunning and intuitive websites that seamlessly blend cutting-edge design with robust functionality, ensuring an exceptional user experience. My passion for web development drives me to deliver impactful solutions that exceed client expectations and elevate online presence.' />
        <Card icon={pic} title='FRONTEND DEVELOPMENT' content='As a skilled web developer, I excel in crafting stunning and intuitive websites that seamlessly blend cutting-edge design with robust functionality, ensuring an exceptional user experience. My passion for web development drives me to deliver impactful solutions that exceed client expectations and elevate online presence.' />
        <Card icon={backend} title='BACKEND DEVELOPMENT' content='As a skilled web developer, I excel in crafting stunning and intuitive websites that seamlessly blend cutting-edge design with robust functionality, ensuring an exceptional user experience. My passion for web development drives me to deliver impactful solutions that exceed client expectations and elevate online presence.' />
      </div>
      <div className="mt-10 justify-center flex">
      <Card icon={mern} title='BACKEND DEVELOPMENT' content='As a skilled web developer, I excel in crafting stunning and intuitive websites that seamlessly blend cutting-edge design with robust functionality, ensuring an exceptional user experience. My passion for web development drives me to deliver impactful solutions that exceed client expectations and elevate online presence.' />
      </div>

    </div>
  )
}

export default About
