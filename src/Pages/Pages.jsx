import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./TempHome";
import { Watchlist } from "../Pages/Watchlist";

export const Pages = () => {

    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/watchlist" element={<Watchlist/>}/>
        </Routes>
        </>
    )
}
