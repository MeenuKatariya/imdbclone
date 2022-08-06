import React from "react";
import { Route, Routes } from "react-router-dom";
import { Sign } from "./SignUp/Sign";
import { Login } from "./Login/Login";
import  Home  from "./Home";
import  {Menu } from "../Components/components_meenu/Menu";
import { MovieDetailsPage } from "./MovieDetailsPage";
import { EditWatchlist } from "./EditWatchlist";
import { Watchlist } from "./Watchlist";
import { CreateAccount } from "./SignUp/CreateAccount";
import {PhotoGallery} from "../Components/components_sam/PhotoGallery"
import { TrailerShow } from "../Components/components_sam/TrailerShow";
export const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/createaccount" element={<CreateAccount />}></Route>
        <Route path="/sign" element={<Sign />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/movieDetails/:id" element={<MovieDetailsPage />}></Route>
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/edit_watchlist" element={<EditWatchlist />} />
        <Route path="/photogallery/:id" element={<PhotoGallery/>}/>
        <Route path="/trailer/:id" element={<TrailerShow/>}/>
      </Routes>
    </div>
  );
};
