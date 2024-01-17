import React from 'react'
import { Link } from 'react-router-dom'


interface DropDown {
    props:any
}
const DropDown:React.FC<DropDown> = () => {
  return (
    <div className='sm:h-[30vh]  sm:w-[100%] bg-slate-200 mt-10 sm:text-primary md:text-primary md:w-[200px] top-[45px] md:top-[80px] absolute left-0 right-0 bottom-'>
        <div className='text-center flex-col text-[#8f8f8e] text-[20px]  sm:ml-4 mt-5 md:ml-7'>
            <Link to="/home">
            <div className='sm:p-0 sm:mb-2'>HOME</div>
           </Link>
           <Link to='/about'>
           <div className='sm:p-0 sm:mb-2'>ABOUT</div>
            </Link>       
           <Link to= "/skills">
           <div className=' sm:p-0 sm:mb-2'>SKILLS</div>
           </Link>
           <Link to="/work">
           <div className='sm:p-0 sm:mb-2'>WORK</div>
         </Link>
           <Link to="/contact">
           <div className='sm:p-0 sm:mb-2 '>CONTACT</div>
          </Link>
         </div>
    </div>
  )
}

export default DropDown