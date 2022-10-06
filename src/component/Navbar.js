import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector} from "react-redux";


export default function Navbar() {
  const {navStatus} = useSelector((store)=>store.navbarStatus);
  // console.log(navStatus,"navStatus")
  const[project,setProject] =useState(false)
 
  return (
    <>
    <div className={navStatus?'navbar navActive':'navbar navInActive' }>
      <NavLink to="/" className='anchor'> <img src="./images/profile.png" alt="..."  /> Profile</NavLink>
      <button className='navButton' onClick={()=>setProject(!project)}> <img src="./images/edit.png" alt="..." className='navImg' /> Projects <img src="./images/vector.svg" alt="..." className='drop'  /></button>
     {project && (
     
     <><NavLink to="/" className='anchor1'> <img src="./images/profile.png" alt="..."  /> Unknown</NavLink>
      <NavLink to="/" className='anchor1'> <img src="./images/profile.png" alt="..."  /> Unknown</NavLink></>)}
      <button className='navButton'> <img src="./images/finance.png" alt="..." className='navImg' /> Finance <img src="./images/vector.svg" alt="..." className='drop' /></button>
      <button className='navButton'> <img src="./images/support.png" alt="..." className='navImg' /> Support <img src="./images/vector.svg" alt="..." className='drop' /></button>

 
      <hr />
    </div>
    </>
  )
}
