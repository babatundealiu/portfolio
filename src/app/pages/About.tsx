import React from 'react'
import Card from '../pages/Card'
import pic from "../../assets/fd.jpg"
import backend from "../../assets/bd.jpg"
import js from "../../assets/wd.jpg"
import mern from "../../assets/mern.jpg"
// import mongo from "../../assets/mongo.png"

const About:React.FC = () => {
  return (
    <div  id='about'>
      <div className="text-white text-[27px]  xs:text-[17px]  xs:w-[90%] xs:mx-auto sm:text-[16px] justify-center sm:mb-10 sm:mx-auto sm:w-[100%] text-center font-extrabold ">
        Effective <span className='text-secondary'>Software Development</span> Process <br />Make the <span className='text-secondary'>Complex </span>Appear to be <span className='text-secondary'>Simple</span>.
      </div>
      <div className="flex flex-wrap gap-7 xs:w-[90%] xs:mx-auto sm:flex-col lg:gap-3 lg:m-5  sm:mx-auto sm:w-[86%] mt-7 md:gap-3 justify-center">
        <Card icon={js} title='WEB DEVELOPMENT' content='As a skilled web developer, I excel in crafting stunning and intuitive websites that seamlessly blend cutting-edge design with robust functionality, ensuring an exceptional user experience. My passion for web development drives me to deliver impactful solutions that exceed client expectations and elevate online presence.' />
        <Card icon={pic} title='FRONTEND DEVELOPMENT' content='I am enthusiastic about the opportunity to bring my frontEnd development expertise on board and contribute to the creation of cutting-edge web applications that provide seamless user experiences. I am excited to contribute and engage in projects that continue to shape the future of web development' />
        <Card icon={backend} title='BACKEND DEVELOPMENT' content='My work revolves around architecting the backbone of web applications, focusing on performance, reliability, and scalability. I have a deep understanding of database design and management, allowing me to optimize data storage and retrieval for maximum efficiency. I am dedicated to ensuring the security of user data ' />
        <Card icon={mern} title='MERN STACK' content='Highly skilled software development engineer, well-versed in JavaScript, Typescript, Express, MongoDb, React and NodeJs. My ability to work on both sides of web development allows me to lead or collaborate with cross-functional teams effectively, offering advanced knowledge of in-demand programming languages' />

      </div>
      {/* <div className="mt-10 justify-center sm:ml-12 md:mt-28 flex">
      <Card icon={mern} title='BACKEND DEVELOPMENT' content='As a skilled web developer, I excel in crafting stunning and intuitive websites that seamlessly blend cutting-edge design with robust functionality, ensuring an exceptional user experience. My passion for web development drives me to deliver impactful solutions that exceed client expectations and elevate online presence.' />
      </div> */}

    </div>
  )
}

export default About
