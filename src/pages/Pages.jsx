import React from 'react';
import { Route, Routes } from "react-router-dom";
import { ImageShow } from '../components/moviedetails/ImageShow';
import { TrailerShow } from '../components/moviedetails/TrailerShow';
import { PhotoGallary } from '../components/moviedetails/PhotoGallary';
import { MovieDetailsPage } from './MovieDetailsPage';

export const Pages=()=>{

    return(<div>
        <Routes>
            <Route path='/trailer/:id' element={<TrailerShow/>}></Route>
            <Route path='/photogallary/:id' element={<PhotoGallary/>}></Route>
            <Route path='/image/:id' element={<ImageShow/>}></Route>
            <Route path="/" element={<MovieDetailsPage />} />
        </Routes>
    </div>)
}