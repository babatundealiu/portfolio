import React from 'react'
import { Link } from 'react-router-dom'


interface DropDown {
    props:any
}
const DropDown:React.FC<DropDown> = () => {
  return (
    <div className='radio:h-[50vh]  radio:w-[100%] tablet:w-[200px] top-[45px] tablet:top-[80px] phone:h-[60vh] phone:w-[50%] absolute bg-secondary left-0 right-0 bottom-'>
        <div className='flex flex-col radio:ml-7 mt-5 tablet:ml-7 mobile:ml-5 phone:ml-5 phone:text-sm phone:mb-0'>
            <Link to="/home">
            <div className='radio:p-0 radio:text-[11px] radio:mb-2 phone:mb-2 radio:h-3 mobile:mb-3 '>HOME</div>
           </Link>
           <Link to='about'>
           <div className=' h-9 radio:mb-2 radio:p-0 radio:text-[11px] radio:h-3 '>ABOUT</div>
            </Link>       
           <Link to= "/skills">
           <div className=' h-9  radio:mb-2 radio:p-0 radio:text-[11px] radio:h-3 '>SKILLS</div>
           </Link>
           <Link to="/work">
           <div className='  h-9 radio:mb-2 radio:p-0 radio:text-[11px] radio:h-3 '>WORK</div>
         </Link>
           <Link to="/contact">
           <div className=' mt-1 h-9 radio:mb-2 radio:p-0 radio:text-[11px] radio:h-3'>CONTACT</div>
          </Link>
         </div>
    </div>
  )
}

export default DropDown