import React from 'react'
import { useState } from 'react'
import './card.css'

export default function Card({item,image_base_url}) {

    
  const [hovering,setHovering] = useState(false)

    const handlemouseddown = ()=>{
        setHovering(true)
      }
    
      const handlemouseup = ()=>{
        setHovering(false)
      }
  return (
    <div className=" mt-4 ms-5 row-sub1" onMouseEnter={handlemouseddown} onMouseLeave={handlemouseup}>
      <img className='movies '  src={`${image_base_url}${item?.poster_path}`} width={'95%'}  style={{borderRadius:'20px',marginLeft:'5px',marginTop:'6px'}} alt="" />
      
    </div>
  )
}
