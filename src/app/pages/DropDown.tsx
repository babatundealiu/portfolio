import React from 'react'
import { Link } from 'react-scroll'


interface IdropDown {
    props:boolean
    setShow : React.Dispatch<React.SetStateAction<boolean>>
}
const DropDown:React.FC<IdropDown> = ({props, setShow}) => {

  function remove() {
    setShow(false)
  }

  return (
    <div className='sm:h-[50vh]  sm:top-[30px]  bg-primary mt-10 xs:h-[50vh] xs:top-[30px] w-[100%]    sm:text-primary md:text-primary md:w-[200px] top-[45px] md:top-[80px] absolute left-0 right-0 bottom-'>
      {
        props 
     && (
      <div className='ml-5 flex-col  text-[#8f8f8e] text-[20px] mt-10 md:ml-7'>
        <Link offset={-70}
            duration={1000}
            activeClass="active"
            smooth={true}  
            to="home">
        <div onClick={remove} className='sm:p-0 sm:mb-4 xs:p-0 xs:mb-4'>HOME</div>
       </Link>
       <Link offset={-70}
            duration={1000}
            activeClass=""
            smooth={true}
            to="about">
       <div onClick={remove} className='sm:p-0 sm:mb-4 xs:p-0 xs:mb-4'>ABOUT</div>
        </Link>       
       <Link offset={-70}
            duration={1000}
            activeClass="active"
            smooth={true}
            to="skills">
       <div onClick={remove} className=' sm:p-0 sm:mb-4 xs:p-0 xs:mb-4'>SKILLS</div>
       </Link>
       <Link offset={-70}
            duration={1000}
            activeClass="active"
            smooth={true}
            to="work">
       <div onClick={remove} className='sm:p-0 sm:mb-4 xs:p-0 xs:mb-4'>WORK</div>
     </Link>
       <Link offset={-70}
            duration={1000}
            activeClass="active"
            smooth={true}
            to="contact">
       <div onClick={remove} className='sm:p-0 sm:mb-2 xs:p-0 xs:mb-4 '>CONTACT</div>
      </Link>
     </div>
     )
      }
    </div>
  )
}

export default DropDown