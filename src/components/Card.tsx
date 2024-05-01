import React from 'react'

interface Iprops {
    icon: string,
    title: string,
    content: string
}
const Card:React.FC<Iprops> = ({icon, title, content}) => {
  return (
    <div className='shadow-4xl bg-primary  h-[400px] w-[360px] md:h-[300px] md:w-[230px] sm:w-[368px]'>
        <div className="absolute h-[25px] w-[200px] border-s-[3px] border-t-[3px]  border-secondary">
        </div>
        <div className="relative">
          <img
        src={icon}
        className="h-[200px] bg-[#f1f1f1]  sm:w-[368px] object-cover w-[368px] md:h-[170px]  "
        alt=''
        />
        </div>
        <div className="text-secondary text-left ml-2 text-[12px] font-extrabold mt-2 md:text-[10px] md:font-bold">
            {title}
        </div>
        <div className="text-white mb-0 m-2 xs:mx-0 sm:mx-0  relative text-[14px] md:text-[11px] text-justify ">
            {content}
        </div>
        <div className="absolute md:hidden h-[19px] w-[200px] ml-[160px] lg:hidden xs:hidden sm:hidden border-r-[3px] border-b-[3px] border-secondary">
        </div>
        

    </div>
  )
}

export default Card