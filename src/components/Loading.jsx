import React from "react";
import loading from "../loading_symbol.gif"
export const Loading = () => {
    return (

    <div style={{width:"100%",height:"0",paddingBottom:"80%",position:"relative", margin:"auto", PaddingTop:"250px",backgroundColor:"black"}}>
    <img src={loading} Width="80px" style={{marginTop:"80px"}}/>
    </div>

    )
}