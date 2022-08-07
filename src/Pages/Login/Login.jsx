import React from "react";
import TextField from "@mui/material/TextField";
import { Input } from "@mui/material";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { authData, authError, authLoading } from "../../Redux/Auth/Action";
import { Alert, Button } from '@mui/material'
import { useNavigate } from "react-router-dom";


export const Login = () => {
  const[email,setEmail]=React.useState("")
  const[password,setPassword]=React.useState("")
  const [alertEmail,setAlertEmail]=React.useState(false)
  const [userAlert,setUserAlert]=React.useState(false)
  const dispatch=useDispatch();
 const navigate=useNavigate();

 
 
 
 const fetchUserData=async()=>{
  try{
    dispatch(authLoading())
   let res=await fetch(`https://imdb-clone-database.herokuapp.com/user_profile`)
   let output=await res.json()
  //  console.log(output)
   let userExist=false;
   output.forEach((element,i) => {
    if(element.password==password && element.email==email)
    {
      dispatch(authData(element))
      // alert("Login Successful")
      navigate("/")
      setAlertEmail(true)
      setTimeout(()=>{
        setAlertEmail(false)
      },3000)
      userExist=true
      return;
    }
   
  });
  if(!userExist){
    setUserAlert(true)
    setTimeout(()=>{
      setUserAlert(false)
    },3000)
    userExist=true
    // alert("user doesnot exist")
  }
 

  

  }catch(error){
    dispatch(authError())
   console.log(error)
  }
}




 


const handleLogin=()=>{
   fetchUserData()

  }





  return (
    <div style={{ marginBottom: 10,marginTop:120 }}>
       {alertEmail?<Alert  style={{width:500, marginLeft:500}}   severity='success' onClose={()=>{setAlertEmail(false)}}>Login Succesfully</Alert>:null}
       {userAlert?<Alert  style={{width:500, marginLeft:500}}   severity='error' onClose={()=>{setUserAlert(false)}}>Invalid Credentials</Alert>:null}
      <div>
        <div className="imageAllBoxes">
          <div className="imdbImage">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
              alt=""
            />
          </div>
          <div className="signBigDi">
            <div className="inputBoxes">
              <div className="createAccount">
                
                <p>Login</p>
              </div>

              <p className="signLabel">Email</p>
              <input type="email" className="SigninputBox"    value={email} onChange={(e)=>setEmail(e.target.value)}  />
              <p className="signLabel">Password</p>

              <input type="password" className="SigninputBox"  value={password} onChange={(e)=>setPassword(e.target.value)}  />

              <div className="createButton">
                <button onClick={handleLogin}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="help" >
        <p>Help</p>
        <p>Conditions of Use</p>
        <p>Privacy Notice</p>
      </div>
      <p className="copyright" style={{marginLeft:650}}>
        © 1996-2022,Amazon.com, Inc. or its affiliates
      </p>
    </div>
  );
};
