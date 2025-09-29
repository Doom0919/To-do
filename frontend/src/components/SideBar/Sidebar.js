import Menu from '../../Icons/menu.png'
import './Sidebar.css'
import SideItem from '../SideItem/SideItem';
import { useState } from 'react'
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaCodeBranch } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { CiStar } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BiTask } from "react-icons/bi";
import {useRef} from 'react';
import { LiaNotesMedicalSolid } from "react-icons/lia";
import { CiFileOn } from "react-icons/ci";
import { IoDuplicateOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegFolderOpen } from "react-icons/fa";

export default function Sidebar() {
    const [clicked, setClicked] = useState('');
    const [hidden, setHidden] = useState(false);
    const [sideItems,setSideItems] = useState([]);
    const [menuPosition, setMenuPosition] = useState(null);
    const [lists,setlists] = useState([]);
    const [folders,setFolders] = useState([]);
    const inputRef = useRef();


    const addList = () => {
    if(inputRef.current.value){
      const txt = ()=>{
        if(lists.includes(inputRef.current.value)){
          return inputRef.current.value + '(1)'
      }
      return inputRef.current.value
    }
      const item = {
      icon: CiFileOn,
      text: txt(),
      idP : lists.length,
      id : sideItems.length,
      isFolder : false
      };

      setlists([...lists, item]);
      setSideItems([...sideItems, item]);
    inputRef.current.value = "";
    }
     };


     const handleClick = () => {
       setMenuPosition(null); 
      };

    const addFolder = () => {
      if(inputRef.current.value){
        const item = {
        icon: CiFileOn,
        text: inputRef.current.value,
        idP : folders.length,
        id : sideItems.length,
        isFolder : true
        };
        setFolders([...folders, item]);
        setSideItems([...sideItems, item]);
      inputRef.current.value = "";
      }
    }
     const handleContextMenu = (e) => {
        e.preventDefault(); 
        setMenuPosition({ x: e.pageX, y: e.pageY }); 
     };


      const deleteList = () => {
        if(clicked >= 0){
         let items = [];
         for(let item of sideItems){
          if(item.id !== clicked){
               items.push(item)
          }
         }
         setSideItems(items)
         handleClick();
        }
      }
      const duplicate = () => {
        if(clicked >= 0){
          setSideItems([...sideItems, sideItems[clicked]]);
        }
      }
 
    return <div className =  {hidden ? 'hidden' : 'height'}>
        <aside>
            <div className={hidden ? '' : 'img'}> <img src={Menu} alt="Menu" className = 'fixed' onClick = {() => setHidden(!hidden)}/></div>
            {hidden ? '' :  
            <nav className = 'menu'>  
                   <div className='menuItems'>
                     <div onClick = {() => setClicked('my')}>   <SideItem icon={GoSun} text="My day" isActive = {clicked === 'my'}/>   </div>
                     <div onClick = {() => setClicked('im')}>   <SideItem icon={CiStar} text="Important" isActive = {clicked === 'im'}/></div>
                     <div onClick = {() => setClicked('pl')}>   <SideItem icon={IoCalendarOutline} text="Planned" isActive = {clicked === 'pl'}/></div>
                     <div onClick = {() => setClicked('as')}>   <SideItem icon={CgProfile} text="Assigned to me" isActive = {clicked === 'as'}/></div>
                     <div onClick = {() => setClicked('ta')}>   <SideItem icon={BiTask} text="Tasks" isActive = {clicked === 'ta'}/></div>
                        <hr class="line"></hr>
                     { sideItems.length > 0 && sideItems.map((item) => (
                         <div onClick = {() => {
                            setClicked(item.id)
                            handleClick()
                         }}   onContextMenu={ (e) => {
                          handleContextMenu(e)
                          setClicked(item.id)
                           }} >   <SideItem icon={item.isFolder ? FaRegFolderOpen : CiFileOn} text={item.text} isActive = {clicked === item.id}/></div>
                     ))}
                    { menuPosition && (
                        <ul className='handle-menu' 
                           style={{position: "absolute",
                                   zIndex: 1000,
                                   top: menuPosition.y,
                                   left: menuPosition.x,
                                   background: "white",
                                   boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
                                   listStyle: "none",
                                   height : '100px',
                                   width:'200px',
                                   padding: "0 0",
                                   margin: 0}}>
                          <li style={{ padding: "5px 15px", cursor: "pointer" }} onClick={() => duplicate()}><IoDuplicateOutline size={18} /> <div>Duplicate</div></li>
                          <li style={{ padding: "5px 15px", cursor: "pointer" }} onClick={() => deleteList()} ><MdDeleteOutline color='red' size={18} /> <div>Delete</div></li>
                        </ul>
                     )}
                    
                     <div  className='addlist'> 
                        <div className='btn'><IoAddSharp size={30} color=' #0AA6FF'  onClick ={() => addList()}/></div> 
                        <input type='text' ref={inputRef} placeholder='New list' onKeyDown={(e) => {
                          if(e.key === 'Enter'){
                            addList()
                          }
                        }}/> 

                        <div className='btn'><LiaNotesMedicalSolid size={30} color=' #0AA6FF' onClick ={() => addFolder()} /></div></div>
                    </div>
                   <div className='link'>
                    <a className='link-me' href='https://www.facebook.com/buyka.buyka.31105674' target="_blank" rel="noopener noreferrer">   <FaFacebook size={24} color="inherit" /> </a>
                    <a className='link-me' href='https://github.com/Doom0919' target="_blank" rel="noopener noreferrer">   <FaGithub size={24} color="inherit"/></a>
                    <a className='link-me' href='mailto:boldoobuyka25@gmail.com.com'target="_blank" rel="noopener noreferrer">   <SiGmail size={24} color="inherit"/></a>
                    <a className='link-me' href='https://github.com/Doom0919/To-do.git' target="_blank" rel="noopener noreferrer">   <FaCodeBranch size={24} color="inherit" /></a>
                   </div>
            </nav>}
        </aside>
    </div>
}