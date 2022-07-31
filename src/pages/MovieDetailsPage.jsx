import { Box, Link, Typography, Button, Divider } from "@mui/material";

import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  errorMovieDetails,
  getMovieDetails,
  loadingMovieDetails,
} from "../store/moviedetails/action";
import { MovieCard } from "../components/moviedetails/MovieCard";
import { MoviesRating } from "../components/moviedetails/MoviesRating";
import { MovieTopLinks } from "../components/moviedetails/MovieTopLinks";
import { MovieTitle } from "../components/moviedetails/MovieTitle";
import { MovieGenres } from "../components/moviedetails/MovieGenres";
export const MovieDetailsPage = () => {
  const movieData = useSelector((state) => state.movieDetails.movieDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingMovieDetails());
    axios({
      method: "get",
      url: "http://localhost:8080/movieDetails",
    })
      .then((res) => {
        dispatch(getMovieDetails(res.data));
      })
      .then((error) => dispatch(errorMovieDetails()));
  }, []);
  return (
    <div style={{width:"80%", margin:"auto"}}>
      {(movieData.length==0) ? (
        <div style={{ color: "white" }}>loading.....</div>
      ) :  (
        <div>
         <MovieTopLinks />

          <Box variant="div" sx={{display:"flex",position:"relative",alignItems:"center",flexFlow:"column-wrap",alignContent:"space-between"}}>
          
          <MovieTitle movieData={movieData[0]}/>
          
          <MoviesRating movieData={movieData[0]}/>
          
          </Box>
          
          <MovieCard movieData={movieData[0]}/>
          <MovieGenres/>
        </div>
      )}{" "}
    </div>
  );
};
