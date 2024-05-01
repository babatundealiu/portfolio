import React from 'react'

interface Iprops {
    image: any,
    title: string,
    content: string,
    linkIcon: any,
    Git: any
}

const Card3:React.FC<Iprops> = ({image, title, content, linkIcon, Git}) => {
  return (
    <div>
      <div className="transform  duration-700 hover:scale-110 shadow transition-ease-out text-primary  bg-[#201e21] h-[350px] md:h-[280px] w-[300px]  md:w-[200px] rounded">
        <a href="">
        <img 
            className="h-[230px] md:h-[130px] object-fit rounded rounded-b-none "
            src={image}
            alt="" />
        </a>

            <div className="text-slate-300 mt-4 font-mono text-[16px] text-center justify-center flex">
                {title}
            </div>
            <div className="text-slate-300 font-mono mt-1 text-[13px] text-pretty justify-center flex">
                {content}
            </div>
            <div className="flex justify-center gap-10 mt-3">
              <a href="https://admirable-monstera-0ad7cd.netlify.app/">
              <div className="h-5 w-20 text-[12px] text-secondary flex justify-center gap-1">
                {linkIcon}
                <a className="text-[12px] font-mono xs:text-[10px] sm:text-[10px] md:text-[10px]">view more</a>
            </div>
              </a>
            <div className="h-5 w-5 text-secondary overflow-hidden flex justify-center">
                {Git}
            </div>
            </div>
            
      </div>
    </div>
  )
}

export default Card3
