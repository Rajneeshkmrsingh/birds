import React, { useState } from "react";
import ChooseFile from "../component/ChooseFile";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import { chooseFiledata } from "../data/chooseFileData";

export default function Main() {
  const[tab,setTab] = useState({kyc:true, membership:false});
  const[type,setType] = useState({basic:true, advance:false})
  const act = tab.act?"green":"#fff"
  return (
    <>
      <Header />
      <div className="wrapper">
        <Navbar />
        <div className="content">
          <div className="tab">
            <div className={tab.kyc?"kyc activeTab":"kyc"} onClick={()=>{setTab({kyc:true, membership:false})}}>
              <div className="kyc-tab">
                <span>KYC</span>
                <img src="./images/Combined-Shape.png" alt="" className="tabImg" />
                {/* <i class="fa-solid fa-check-double"></i> */}
                {/* <i clasName="fa-regular fa-check-double" /> */}
                <i className={ tab.kyc==true?"fa-solid fa-check-double gree":"fa-solid fa-check-double whit"}  style={{marginLeft:"5px"}}/>
                <hr className={tab.kyc?"activeHr":""} />
              </div>
              <p>
                Your information is collected for legal and security purposes
                only
              </p>
            </div>
            <div className={tab.membership?"membership activeTab":"membership"} onClick={()=>setTab({kyc:false, membership:true})}>
              <div className="membership-tab">
                <span>Membership</span>
                <img src="./images/member.png" alt="..." className="tabImg" />
                <hr className={tab.membership?"activeHr":""} />
              </div>
              <p>Please chose your membership</p>
            </div>
          </div>
         

          {tab.kyc && <div className="kyc-content">
          <div className="info">
            <p>
              <span>Note:</span> Upload only .jpg/jpeg or .png extension image
              file !!
            </p>
          </div>
            <div className="row1">
              {
                chooseFiledata.map((item,index)=>{
                  return (
                    <>
                    <ChooseFile item={item} key={index.toString()}/>
                    </>
                  )
                })
              }
              
             
            </div>
            <div style={{width:"100%"}}>
            <button style={{cursor:"pointer"}}>Submit</button>
            </div>
          </div>}

          {tab.membership && <div className="membership-content">
            <p>You have applied for Basic membership</p>
            <div className="membership-btn">
              <button onClick={()=>setType({basic:true,advance:false})}>Basic <img src={type.basic?"./images/star.svg":"./images/star.png"} alt="" /></button>
              <button onClick={()=>setType({basic:false,advance:true})}>Advance <img src={type.advance?"./images/star.svg":"./images/star.png"} alt="" /></button>
            </div>
            <div className="information-box">
              <div className="price">
                <p><img src="./images/info.png" alt="" style={{width:"28px", height:"28px",  position:"relative",top:"5px"}} /> You need to pay</p>
                <p>&#x20B9;{type.basic?250:660} to subscribe this membership</p>
              </div>
              <button>Pay Now</button>
            </div>
          </div>}
        </div>
      </div>
    </>
  );
}
