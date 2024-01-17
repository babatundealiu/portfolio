import React from 'react';

const ScrollToTop:React.FC = () => {
  const handleClick =()=>  {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="ml-16 mb-10 mt-5">
            <button onClick={handleClick} className=' rounded-full font-semibold text-[10px]  h-10 w-10 text-gray-200 bg-secondary'>
      Scroll <br />to  top
    </button>
    </div>

  );
}

export default ScrollToTop;
