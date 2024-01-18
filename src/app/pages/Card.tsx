import React from 'react'

interface Iprops {
    icon: any,
    title: string,
    content: string
}
const Card:React.FC<Iprops> = ({icon, title, content}) => {
  return (
    <div className='shadow-4xl bg-primary  h-[400px] w-[360px] md:h-[300px] md:w-[230px] sm:w-[368px]'>
        <div className="absolute h-[25px] w-[200px] border-s-[3px] border-t-[3px]  border-secondary">
        </div>
        <img
        src={icon}
        className="h-[200px] bg-[#f1f1f1] sm:w-[368px] object-cover w-[368px] md:h-[170px]  "
        alt=''
        />
        <div className="text-secondary text-left ml-2 text-[12px] font-extrabold mt-2 md:text-[10px] md:font-bold">
            {title}
        </div>
        <div className="text-white mb-0 m-2 relative text-[14px] md:text-[11px] text-justify ">
            {content}
        </div>
        <div className="absolute md:hidden h-[19px] w-[200px] ml-[160px] lg:hidden xs:hidden sm:hidden border-r-[3px] border-b-[3px] border-secondary">
        </div>
        
        {/* <div className="sm:h-[150px] sm:ml-6  sm:w-[250px] sm:pb-5 sm:shadow-lg 
                        ms:h-[150px] ms:ml-12  ms:w-[250px] ms:pb-5 ms:shadow-lg
                        mm:h-[170px] mm:ml-12  mm:w-[300px] mm:pb-5 mm:shadow-lg
                        md:h-[170px] md:ml-10  md:w-[300px] md:pb-5 md:shadow-lg
                        lg:h-[170px] lg:ml-2  lg:w-[230px] lg:pb-5 lg:shadow-lg
                        xl:h-[180px] xl:ml-2  xl:w-[260px] xl:pb-5 xl:shadow-lg 
                        ">
            <div className="flex flex-col sm:items-center sm:justify-center ms:items-center ms:justify-center mm:items-center mm:justify-center md:items-center md:justify-center lg:ml-[87px] lg:justify-center lg:gap-2 xl:justify-center xl:gap-2 xl:ml-[100px] xl:mt-">
            <div className="flex sm:h-[50px] sm:w-[50px] items-center sm:mt-7 border rounded-full bg-[rgb(0,150,255)] ms:h-[50px] ms:w-[50px] ms:mt-7 mm:h-[50px] mm:w-[50px] mm:mt-8 md:h-[50px] md:w-[50px] md:mt-8 lg:h-[50px] lg:w-[50px] lg:mt-8 xl:h-[50px] xl:w-[50px] xl:mt-8">
                <div className="sm:h-[20px] sm:w-[30px] sm:ml-4 ms:h-[20px] ms:w-[30px] ms:ml-4 mm:h-[20px] mm:w-[30px] mm:ml-4 md:h-[20px] md:w-[30px] md:ml-4 lg:h-[20px] lg:w-[30px] lg:ml-4 xl:h-[20px] xl:w-[30px] xl:ml-4">
                {icon}
                </div>
            </div>
            <div className="sm:text-[12px] sm:font-semibold ms:text-[15px] ms:mt-4 ms:font-semibold text-slate-800 mm:text-[15px] mm:mt-4 mm:font-semibold ">
                {name}
            </div>
            <div className="sm:text-[14px] sm:font-semibold mm:text-[14px] mm:font-semibold ">
                {total}
            </div>

            </div>

        </div> */}
    </div>
  )
}

export default Card