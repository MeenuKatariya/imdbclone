import React from 'react'
import TextField from '@mui/material/TextField';
import { Input } from '@mui/material';
import "./Sign.css"

export const Sign=()=> {
  return (
    <div   style={{ marginBottom:10}}>
    <div  >
    <div className='imageAllBoxes'>
    <div className='imdbImage'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png" alt="" />
     </div>
    <div className='signBigDiv'>
     
    
       <div className='inputBoxes'>
       <div className='createAccount'> <p>Create account</p></div>
       <p className='signLabel'>Your name</p>
        <input type="text" className='SigninputBox' />
        <p className='signLabel'>Email</p>
        <input type="password" className='SigninputBox' />
        <p className='signLabel'>Password</p>
       
        <input type="text" className='SigninputBox' placeholder='at least 8 characters' />
        <p style={{marginTop:4,textAlign:"left" ,paddingLeft:5 ,fontSize:12, fontFamily:"Amazon Ember,Arial,sans-serif"}}> Passwords must be at least 8 characters.</p>
        <p className='signLabel'>Re-enter password</p>
        <input type="password" className='SigninputBox' />
        <div className='createButton'>
        <button   >Create your IMDb account</button>
        </div>
       
      

       </div>
       <div style={{display:"flex" ,marginLeft:40,fontSize:14,fontFamily:"Amazon Ember,Arial,sans-serif", width:210,justifyContent:"space-between"}} className="alreadyAccount">
        <p>Already have an account?</p>
        <p className='signInLine' style={{color:"#0066c0"}}>Sign-In</p>
       </div>


    </div>

    </div>
    </div>
    <div className='help' style={{}}>
        <p>Help</p>
        <p>Conditions of Use</p>
        <p>Privacy Notice</p>
    </div>
    <p className='copyright'>
    © 1996-2022,Amazon.com, Inc. or its affiliates
    </p>
</div>
  )
}
