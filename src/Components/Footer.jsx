import React from "react"
import {RiFacebookBoxLine} from "react-icons/ri"
import {AiOutlineInstagram} from "react-icons/ai"
import {FiTwitter} from "react-icons/fi"
import {FiYoutube} from "react-icons/fi"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import "./Footer.css"
export const Footer=()=> {
  return (
    <div style={{backgroundColor:"#000000",height:300,marginTop:200}}>
        <div style={{display:"flex", paddingTop:30,margin:'auto' ,width:300,justifyContent:"space-around",fontSize:30}}>
         <RiFacebookBoxLine  style={{color:"#ffffff"}}/>
         <AiOutlineInstagram style={{color:"#ffffff"}}/>
         <FiTwitter style={{color:"#ffffff"}}/>
         <FiYoutube style={{color:"#ffffff"}}/>
        </div>
        <div  className="para" style={{display:"flex",justifyContent:"space-between" ,width:650,margin:"auto", fontFamily:"12px Roboto,Helvetica,Arial,sans-serif",color:"#FFFFFFF"}}>
            <p style={{color:"#ffffff",fontFamily:"12px Roboto,Helvetica,Arial,sans-serif"}}>Get the IMDb App </p>
            <p style={{color:"#ffffff",fontFamily:"12px Roboto,Helvetica,Arial,sans-serif"}}>Help</p>
            <p style={{color:"#ffffff",fontFamily:"12px Roboto,Helvetica,Arial,sans-serif"}}>Site Index</p>
            <p style={{color:"#ffffff",fontFamily:"12px Roboto,Helvetica,Arial,sans-serif"}}>IMDbPro</p>
            <p style={{color:"#ffffff",fontFamily:"12px Roboto,Helvetica,Arial,sans-serif"}}>Box office Mojo</p>
            <p style={{color:"#ffffff",fontFamily:"12px Roboto,Helvetica,Arial,sans-serif"}}>IMDb Developer</p>

        </div>
        <div  className="para" style={{display:"flex",justifyContent:"space-between" ,width:700,marginLeft:"430px" ,color:"#FFFFFFF"}} >
        <p style={{color:"#ffffff",fontFamily:"12px Roboto,Helvetica,Arial,sans-serif"}}>Press Room</p>
            <p style={{color:"#ffffff",fontFamily:"12px Roboto,Helvetica,Arial,sans-serif"}}>Advertising</p>
            <p style={{color:"#ffffff",fontFamily:"12px Roboto,Helvetica,Arial,sans-serif"}}>Jobs</p>
            <p style={{color:"#ffffff",fontFamily:"12px Roboto,Helvetica,Arial,sans-serif"}}>Conditions of Use</p>
            <p style={{color:"#ffffff",fontFamily:"12px Roboto,Helvetica,Arial,sans-serif"}}>Privacy Policy</p>
            <p style={{color:"#ffffff",fontFamily:"12px Roboto,Helvetica,Arial,sans-serif"}}>Interest-Based Ads</p>
        </div>
        <div>
           <p style={{color:"#ffffff",fontFamily:"12px Roboto,Helvetica,Arial,sans-serif"}}>an amazon company</p> 
        </div>
        <div>
            <p style={{color:"#ffffffB3",fontFamily:"12px Roboto,Helvetica,Arial,sans-serif"}}>
            ©1990-2022 by IMDb.com, Inc.
            </p>

        </div>
    </div>
  )
}
