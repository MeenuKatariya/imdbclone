import React from 'react'
import { Route,Routes } from 'react-router-dom'
import { Sign } from './SignUp/Sign' 
import {Login} from "./Login/Login"
import {Home} from "./Home"
import {Menu} from "./Menu"
import { CreateAccount } from './SignUp/CreateAccount'
export const Pages=() =>{
  return (
    <div>
   <Routes>
   <Route  path="/" element={<Home/>} ></Route>
   <Route path="/createaccount" element={<CreateAccount/>}></Route>
    <Route  path="/sign" element={<Sign/>} ></Route>
    <Route  path="/login" element={<Login/>} ></Route>
    <Route path="/menu" element={<Menu/>}></Route>
   </Routes>
    </div>
  )
}
