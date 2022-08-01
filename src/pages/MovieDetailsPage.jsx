import { Box } from "@mui/material";
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
import { MovieInfo } from "../components/moviedetails/MovieInfo";
import { Heading } from "../components/moviedetails/Headings";
import { Cast } from "../components/moviedetails/Cast";
import { Details } from "../components/moviedetails/Detaisl";
import { BoxOffice } from "../components/moviedetails/BoxOffice";
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
  }, [dispatch]);
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Box variant="div" sx={{ backgroundColor: "black", padding: "10px 0px" }}>
        <img
          src="https://m.media-amazon.com/images/I/51IfG+VoQ8L.jpg"
          alt="google ads"
        />
      </Box>
      {movieData.length === 0 ? (
        <div style={{ color: "white" }}>loading.....</div>
      ) : (
        <div style={{ width: "100%" }}>
          <Box
            variant="div"
            sx={{ width: "90%", margin: "auto", marginBottom: "50px" }}
          >
            <MovieTopLinks />
            <Box
              variant="div"
              sx={{
                display: "flex",
                position: "relative",
                alignItems: "center",
                flexFlow: "column-wrap",
                alignContent: "space-between",
              }}
            >
              <MovieTitle movieData={movieData[0]} />

              <MoviesRating movieData={movieData[0]} />
            </Box>

            <MovieCard movieData={movieData[0]} />

            <Box variant="div" sx={{}}>
              <Box
                variant="div"
                sx={{ textAlign: "left", display: "flex", gap: "10px" }}
              >
                {movieData[0].genres.split(", ").map((ele) => (
                  <MovieGenres genres={ele} />
                ))}
              </Box>

              <Box variant="div">
                <MovieInfo movieData={movieData[0]} />
              </Box>
            </Box>
          </Box>

          <Box variant="div" sx={{ backgroundColor: "white", width: "100%",paddingBottom:"50px" }}>
            <Box
              variant="div"
              sx={{ width: "90%", margin: "auto", paddingTop: "20px" }}
            >
              <Heading headingString={"Top Cast"} arrow={true} />

              <Cast actorList={movieData[0].actorList} />
            </Box>
            <Box
              variant="div"
              sx={{ width: "90%", margin: "auto", paddingTop: "20px" }}
            >
              <Heading headingString={"Details"} arrow={false} />

              <Details movieData={movieData[0]}/>
            </Box>
            <Box
              variant="div"
              sx={{ width: "90%", margin: "auto", paddingTop: "20px" }}
            >
              <Heading headingString={"Box Office"} arrow={false} />

              <BoxOffice movieData={movieData[0]}/>
            </Box>
          </Box>
        </div>
      )}{" "}
    </div>
  );
};
