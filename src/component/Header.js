import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import { navbarStatus } from "../redux/reducer";
// import { useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"

export default function Header() {
  const dispatch = useDispatch()
   const {navStatus} = useSelector((store)=>store.navbarStatus);
   const navigate =useNavigate()
  
  return (
    <>
    <header>
    <div className="header">
        <div className="banner" onClick={(()=>navigate("/"))} style={{cursor:"pointer"}}>
        <img src="./images/logo.svg" alt="logoo" className='logo' />
        <h1 className='logo-name'>Ramaera industries </h1>
        </div>
        <div className="header-right">

        <img src="./images/bell.png" alt="bell" className='bell' />
        <p style={{cursor:"pointer"}}>English (UK)</p>
        <img src="./images/polygon.png" alt="polygon" className='polygon' />
        {/* <i class="fa-solid fa-bars-staggered"/> */}
       {!navStatus ? <i className="fa-solid fa-bars" style={{color:" #fff", fontSize:"24px", marginLeft:"5px", position:"relative", top:"0px"}} onClick={()=>dispatch(navbarStatus())}></i>:<i className="fa-solid fa-times" style={{color:" #fff", fontSize:"24px", marginLeft:"5px", position:"relative", top:"0px"}} onClick={()=>dispatch(navbarStatus())}></i>}

        </div>

        
    </div>
    <hr />
    </header>
    </>
  )
}
