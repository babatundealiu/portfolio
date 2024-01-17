import React, {useState} from 'react'
// import { Link} from 'react-router-dom'
import DropDown from './DropDown'
import { AiOutlineMenu } from "react-icons/ai";
import {FaTimes} from "react-icons/fa"
import { Link } from 'react-scroll';



const Header:React.FC = () => {
  const [toggle, setToggle]= useState(false);
  const handleChange =()=> {
    setToggle(!toggle)
  }

  return (
    <div>
      <div className="bg-primary cursor-pointer   flex fixed z-10 justify-between top-0 sm:z-10 text-secondary h-[70px] w-full ">
        <div className="flex">
        <div className=" mt-5 pl-16 sm:mt-2 sm:pl-5  sm:font-extrabold xs:mt-3 xs:pl-5  xs:font-extrabold text-[20px]">Ba</div>
        <div className=" mt- font text-destructive font-bold text-[45px]">J</div>

        </div>
          <div className="flex space-x-8 md:mr-10 font-semibold mt-6 text-[15px] mr-20 sm:hidden xs:hidden">
            <Link   offset={-70}
                duration={1000}
                activeClass="active"
                smooth={true}
                to="home"
               >
            <div className="text-white  hover:text-secondary hover:font-extrabold">HOME</div>
            </Link>
            <Link   offset={-70}
                duration={1000}
                activeClass="active"
                smooth={true}
                to="about"
              >
            <div className="text-white hover:text-secondary hover:font-extrabold">ABOUT</div>
            </Link>
            <Link   offset={-70}
                duration={1000}
                activeClass="active"
                smooth={true}
                to="skills"
              >            
              <div className="text-white  hover:text-secondary hover:font-extrabold">SKILLS</div>
            </Link>
            <Link   offset={-70}
                duration={1000}
                activeClass="active"
                smooth={true}
                to="work"
              >            
              <div className="text-white  hover:text-secondary hover:font-extrabold">WORK</div>
            </Link>
            <Link   offset={-70}
                duration={1000}
                activeClass="active"
                smooth={true}
                to="contact"
              >            
              <div className="text-white  hover:text-secondary hover:font-extrabold">CONTACT</div>
            </Link>

        </div>

        <div className="text-white xl:hidden sm:mr-5 xs:mr-5 xs:mt-4 md:hidden mt-2  lg:hidden">
          <div className="sm:mt-2 md:mt-1  left-0 right-0 bottom-0">
          {toggle ? <FaTimes fontSize={"30px"} color="#fff" onClick={handleChange}/>:
                    <AiOutlineMenu fontSize={"30px"} color="#fff" onClick={handleChange}/>}
                    
                  {toggle ? <DropDown props={handleChange} />: null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
