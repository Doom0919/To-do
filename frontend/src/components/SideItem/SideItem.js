import './SideItem.css'
import { useState } from 'react'

export default function SideItem({icon: Icon,text,isActive}){
  
    return <div className='sideItem' >
            {isActive && <div className='clicked'></div>}
             <div className='icon'> <Icon size = {20}/> </div>
             <div>{text}</div>
           </div>
};