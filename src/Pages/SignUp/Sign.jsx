import React from 'react'
import TextField from '@mui/material/TextField';
import { Input } from '@mui/material';
import "./Sign.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {authLoading} from "../../Redux/Auth/Action"
import {authError} from  "../../Redux/Auth/Action"
import { Alert, Button } from '@mui/material';




export const Sign=()=> {
  const[name,setName]=React.useState("")
  const[email,setEmail]=React.useState("")
  const[password,setPassword]=React.useState("")
  const[reenterPassword,setReEnterPassword]=React.useState("")
  const[success,setSuccess]=React.useState(true)
  const [checkPass, setCheckPass]=React.useState(false);
  const [passwordAlert,setPasswordAlert]=React.useState(false)
  const [value,setValue]=React.useState(false)
  const [siginAlert,setSiginAlert]=React.useState(false)
  const navigate=useNavigate();
  const dispatch=useDispatch()

  const postData=async()=>{
    let data={
      name:name,
      email:email,
      password:password,
      login:true,
      watchlist : [],
      my_list: [],
      recently_viewed: []
      

    }
    try{
      dispatch(authLoading())
      let res=await fetch(`http://localhost:8080/user_profile`,{
        method:"POST",
        body:JSON.stringify(data),
        headers:{"Content-Type":"application/json"}
      })
        

       console.log(res)
       setSiginAlert(true)
       setTimeout(()=>{
         setSiginAlert(false)
       },3000)
      // alert("Account is Created")
      navigate("/login")
     
    
  }catch(error){
    dispatch(authError())
    console.log(error)
  }
  }






  
  
  const handleSignIn=()=>{
        if(name && email && password && reenterPassword){
          if(!(password.length >= 8)){
          setCheckPass(true)
          // alert("Password must be 8 characters")
          setTimeout(()=>{
            setCheckPass(false)
          },3000)
          // setSuccess(false)
          // success ? <Alert onClose={() => {setSuccess(false)}}>Password must be 8 characters </Alert> : null
          return;

          }
          if(password !== reenterPassword){
           setPasswordAlert(true)
          setTimeout(()=>{
            setPasswordAlert(false)
          },3000)
            // alert("Please Enter Correct Password");
            return;
          }
          postData()
        }
        else{
          setValue(true)
          setTimeout(()=>{
            setValue(false)
          },3000)
          // alert("Fill all input fields")
        }

  }

  const handleLogin=()=>{
    navigate("/login")
  }
  


  return (

    <div   style={{ marginBottom:10, marginTop:70}}>
      {/* {success?<Alert onClose={()=>{setSuccess(false)}}>THis</Alert>:null} */}
      {checkPass?<Alert  style={{width:500, marginLeft:500}}   severity='error' onClose={()=>{setCheckPass(false)}}>Password must be 8 charactes</Alert>:null}
      {passwordAlert?<Alert  style={{width:500, marginLeft:500}}   severity='error' onClose={()=>{setPasswordAlert(false)}}>Please Enter Correct Password</Alert>:null}
      {value?<Alert  style={{width:500, marginLeft:500}}   severity='error' onClose={()=>{setValue(false)}}>Please Fill All Details</Alert>:null}
      {siginAlert?<Alert  style={{width:500, marginLeft:500}}   severity='success' onClose={()=>{setValue(false)}}>Account Created</Alert>:null}
    <div  >
    <div className='imageAllBoxes'>
    <div className='imdbImageFirst'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png" alt="" />
     </div>
    <div className='signBigDiv'>
     
    
       <div className='inputBoxes'>
       <div className='createAccount'> <p>Create account</p></div>
       <p className='signLabel'>Your name</p>
        <input type="text"  value={name} onChange={(e)=>setName(e.target.value)} className='SigninputBox' />
        <p className='signLabel'>Email</p>
        <input type="email"   value={email} onChange={(e)=>setEmail(e.target.value)}  className='SigninputBox' />
        <p className='signLabel'>Password</p>
       
        <input type="password"  className='SigninputBox'  value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='at least 8 characters' />
        <p style={{marginTop:4,textAlign:"left",marginLeft:10 ,paddingLeft:5 ,fontSize:12, fontFamily:"Amazon Ember,Arial,sans-serif"}}> Passwords must be at least 8 characters.</p>
        <p className='signLabel'>Re-enter password</p>
        <input type="password"   value={reenterPassword} onChange={(e)=>setReEnterPassword(e.target.value)} className='SigninputBox' />
        <div className='createButton'>
        <button  onClick={handleSignIn}  >Create your IMDb account</button>
        </div>
       
      

       </div>
       <div style={{display:"flex" ,marginLeft:40,fontSize:14,fontFamily:"Amazon Ember,Arial,sans-serif", width:215,justifyContent:"space-between"}} className="alreadyAccount">
        <p style={{fontSize:14,  marginLeft:4,fontFamily:"Amazon Ember,Arial,sans-serif"}}>Already have an account?</p>
        <p className='signInLine'  onClick={handleLogin} style={{color:"#0066c0", cursor:"pointer"}}>Sign-In</p>
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
