import React from 'react'


interface Iprops {
    title: string
}
const Button:React.FC<Iprops>= ({title}) => {

  return (
    <center className=''>
      <div className="rounded bg-slate-50">
        <div className="font-semibold py-1 px-2 hover:text-white text-[14px] hover:rounded hover:bg-secondary">{title}</div>
      </div>
    </center>
  )
}

export default Button
