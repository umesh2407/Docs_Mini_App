import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

function Card() {
  return (
    <div className='relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm leading-tight mt-5 font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
      
       {/* Footer */}
        <div className='footer absolute bottom-0 w-full left-0'>
<div className='flex items-center justify-between mb-3 py-3 px-8'>
    <h5>.8mb</h5>
    <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
    <MdOutlineFileDownload size=".8rem" color='#fff'/>
    </span>
</div>

<div className='tag w-full py-4 bg-green-500 flex items-center justify-center'>
    <h3 className='text-sm font-semibold'>Download Now</h3>
    </div>
        </div>
    </div>
  )
}

export default Card