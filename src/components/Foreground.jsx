import React, {useRef} from 'react'
import Card from './Card'

function Foreground() {
    const ref = useRef(null);
    const data = [
        {
            desc: "Hello my name is Umesh Choudhary ...",
            filesize:".3mb",
            close: true,
            tag:{isOpen:true, tagTitle:"Download Now", tagColor:"green"},
        },
        {
            desc: "This is another entry with some description...",
            filesize:"1.2mb",
            close: false,
            tag:{isOpen:true, tagTitle:"View Details", tagColor:"blue"},
        },
        {
            desc: "Sample entry for data...",
            filesize:"0.8mb",
            close: true,
            tag:{isOpen:false, tagTitle:"Preview", tagColor:"blue"},
        },
        {
            desc: "Yet another data entry...",
            filesize:"0.6mb",
            close: false,
            tag:{isOpen:true, tagTitle:"Download File", tagColor:"green"},
        }
    ];
    
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
        {data.map((item,index)=>(
    <Card data={item} reference={ref}/>)
    )}
    </div>
  )
}

export default Foreground