import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./TempHome";
import { Watchlist } from "../Pages/Watchlist";
import { EditWatchlist } from "../Pages/EditWatchlist";

export const Pages = () => {

    return (
        <>
        <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/watchlist" element={<Watchlist/>}/>
            <Route path="/edit_watchlist" element={<EditWatchlist/>}/>
        </Routes>
        </>
    )
}
