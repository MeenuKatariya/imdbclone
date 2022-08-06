import { border, borderRadius } from '@mui/system'
import React from 'react'
import "./IMDbPro.css"
export const IMDbProImage=({prop}) =>{
   
  return (
    <>
    
     {prop?<>
     <div  className="bigDiv" style={{border:'1px solid white' ,borderRadius:'10' ,width:660, height:"230", zIndex:10 ,top:65,left:300,position:"absolute"}} >
            <div style={{display:"flex",margin:20 ,width:600,justifyContent:"space-between"}}>
        <div style={{width:"160px",height:"130px", borderRadius:7}}>
            <img   src="https://image.scoopwhoop.com/q30/s3.scoopwhoop.com/anj2/614037c38a373a1f92942c76/0d2e3604-6f35-42e5-9e49-2041e0b07d26.jpg" style={{height:"100%",borderRadius:7, width:"100%"}} alt="" />
        </div>
        <div style={{marginTop:0}}>
            <h3 style={{fontSize:16, marginTop:0 ,color:"#ffffff", height:20}} >The essential resource for entertainment professionals</h3>
             <div  style={{ textAlign:"left",paddingLeft:0}}>
             <ul style={{marginTop:0,marginLeft:0, fontSize:14 ,color:"#ffffff"}} >
                <li>
                    Find industry contacts & talent representation
                </li>
                <li>Access in-developent titles not available on IMDb</li>
                <li>Get the latest news from leading industry trades</li>
                <li>Claim your page and control your brand across IMDb & Amazon</li>

            </ul>
             </div >
            < div style={{width:200,height:34,borderRadius:10, marginLeft:10 ,marginTop:10,backgroundColor:"#f0c14b"}}>

      
                <button  style={{width:"100%",borderRadius:5 ,height:"100%",border:"none", backgroundColor:'#f0c14b', fontFamily:"Amazon,Ember,Arial,sans-serif",boxShadow: "rgba(99, 99, 99, 0.2) 0 2 8 0", outline:"0.2 solid #a88734"}}>
                    <p  style={{marginTop:8,lineHeightStep:'2', fontSize:14 ,fontFamily:"14px Verdana,Arial,sans-serif",fontWeight:400}} >Try IMDbPro Free</p>
                    </button></div>
        </div>
    </div>
     </div>
    </>:<></>}
    </>
  )
}
