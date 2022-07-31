import React from 'react';
import {Link} from "react-router-dom"

export const Navbar = () => {
    return (
        <div style={{height:"48px" ,width:"100%", backgroundColor:'black' ,textAlign:"center", color: "white"}}>
         Temporary Navbar
         <br/>
         
         <Link to="/">Home</Link>
          <Link to="/watchlist">WatchList</Link>
        </div>
    );
}
