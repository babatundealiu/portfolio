import React from 'react'

interface Iprops {
    image: any,
    title: string,
    content: string,
    linkIcon: any,
    Git: any
}

const Card2:React.FC<Iprops> = ({image, title, content, linkIcon, Git}) => {
  return (
    <div>
      <div className="transform  duration-700 hover:scale-110 shadow transition-ease-out text-primary p-3 bg-[#201e21] h-[350px] md:h-[280px] w-[300px]  md:w-[200px] rounded">
        <img 
            className="h-[230px] md:h-[130px] rounded "
            src={image}
            alt="" />
            <div className="text-slate-300 mt-4 font-extrabold text-[16px] text-center justify-center flex">
                {title}
            </div>
            <div className="text-slate-300 font-bold mt-1 text-[13px] text-pretty justify-center flex">
                {content}
            </div>
            <div className="flex justify-center gap-10 mt-3">
            <div className="h-5 w-5 text-secondary overflow-hidden flex justify-center">
                {linkIcon}
            </div>
            <div className="h-5 w-5 text-secondary overflow-hidden flex justify-center">
                {Git}
            </div>
            </div>
            
      </div>
    </div>
  )
}

export default Card2
