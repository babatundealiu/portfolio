import React, {useState} from 'react'
import { Link} from 'react-router-dom'
import DropDown from './DropDown'
import { AiOutlineMenu } from "react-icons/ai";
import {FaTimes} from "react-icons/fa"



const Header = () => {
  const [toggle, setToggle]= useState(false);
  const handleChange =()=> {
    setToggle(!toggle)
  }
  return (
    <div>
      <div className="bg-primary radio:bg-secondary radio:h-[30px] mobile:h-12 flex fixed z-10 justify-between top-0  text-secondary h-[70px] w-full ">
        <div className="flex">
        <div className=" mt-5 pl-16 radio:mt-2 radio:pl-5 mobile:pl-5 radio:text-primary radio:font-extrabold font text-[20px]">Ba</div>
        <div className=" mt- font text-destructive font-bold text-[45px]">J</div>

        </div>
          <div className="flex space-x-8 font-semibold mt-6 text-[11px] mr-20 radio:hidden phone:hidden mobile:hidden">
            <Link to='/home'>
            <div className="text-white  hover:text-secondary hover:font-extrabold">HOME</div>
            </Link>
            <Link to='/about'>
            <div className="text-white hover:text-secondary hover:font-extrabold">ABOUT</div>
            </Link>
            <Link to='/skills'>
            <div className="text-white  hover:text-secondary hover:font-extrabold">SKILLS</div>
            </Link>
            <Link to='/work'>
            <div className="text-white  hover:text-secondary hover:font-extrabold">WORK</div>
            </Link>
            <Link to='/contact'>
            <div className="text-white  hover:text-secondary hover:font-extrabold">CONTACT</div>
            </Link>

        </div>

        <div className="text-white  radio:ml-28 radio:mt- mobile:ml-64 mobile:mt-1 phone:ml-52 phone:mt-2 tablet:ml-28 tablet:mt-2 xl:hidden  lg:hidden">
          <div className="radio:mt-10 phone:mt-3 mobile:mt-3 tablet:mr-10  tablet:mt-6 top- left-0 right-0 bottom-0">
          {toggle ? <FaTimes fontSize={"30px"} color="#e99343" onClick={handleChange}/>:
                    <AiOutlineMenu fontSize={"30px"} color="#4EB2E4" onClick={handleChange}/>}
                    
                  {toggle ? <DropDown props={handleChange} />: null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
