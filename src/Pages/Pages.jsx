import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { Sign } from './SignUp/Sign' 
import {Login} from "./Login/Login"
import { CreateAccount } from './SignUp/CreateAccount'
export const Pages=() =>{
  return (
    <div>
   <Routes>
   <Route  path="/" element={<CreateAccount/>} ></Route>
    <Route  path="/sign" element={<Sign/>} ></Route>
    <Route  path="/login" element={<Login/>} ></Route>
   </Routes>
    </div>
  )
}
