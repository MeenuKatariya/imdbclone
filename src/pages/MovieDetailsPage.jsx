import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  errorMovieDetails,
  getMovieDetails,
  loadingMovieDetails,
} from "../Redux/MovieDetails/action"
import { MovieCard } from "../Components/components_sam/MovieCard";
import { MoviesRating } from "../Components/components_sam/MoviesRating";
import { MovieTopLinks } from "../Components/components_sam/MovieTopLinks";
import { MovieTitle } from "../Components/components_sam/MovieTitle";
import { MovieGenres } from "../Components/components_sam/MovieGenres";
import { MovieInfo } from "../Components/components_sam/MovieInfo";
import { Heading } from "../Components/components_sam/Heading";
import { Cast } from "../Components/components_sam/Cast";
import { Details } from "../Components/components_sam/Details";
import { BoxOffice } from "../Components/components_sam/BoxOffice";
import { RightPanel } from "../Components/components_sam/RightPanel";
import { ImageSlider } from "../Components/components_sam/ImageSlider";
import { Loading } from "../Components/components_sam/Loading";
import { MovieSlider } from "../Components/components_sam/MovieSlider";
import {Navbar} from "../Components/components_meenu/Navbar"
import {Footer} from "../Components/components_meenu/Footer"
import { useParams } from "react-router-dom";
import { RatingModal } from "../Components/components_sam/RatingModal";


export const MovieDetailsPage = () => {
  const { loading, error, movieDetails } = useSelector(
    (state) => state.movieDetails
  );
  const [open, setOpen] = useState(false);

  const movieData = movieDetails[0];
  const dispatch = useDispatch();

  let {id} = useParams();
  

  useEffect(() => {
    dispatch(loadingMovieDetails());
    axios({
      method: "get",
      url: `http://localhost:8080/movieDetails?id=${id}`,
    })
      .then((res) => {
        dispatch(getMovieDetails(res.data));
      })
      .catch((err) => dispatch(errorMovieDetails()));
  }, []);
  return (
    <>
    <Navbar/>

   
    <div style={{ width: "100%", margin: "auto" }}>
      <Box variant="div" sx={{ backgroundColor: "black", padding: "10px 0px",paddingTop:"70px",width:"100%"}}>
        <img
          src="https://m.media-amazon.com/images/I/51IfG+VoQ8L.jpg"
          alt="google ads"
          style={{margin:"auto",marginLeft:"20%"}}
        />
      </Box>
      {movieDetails.length === 0 ? (
        <Loading />
      ) : (
        <div style={{ width: "100%", backgroundColor: "rgb(31,31,31)" }}>
           {open && <RatingModal setOpen={setOpen} open={open} title={movieData.title}/>}
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
              <MovieTitle movieData={movieData} />

              <MoviesRating movieData={movieData} setOpen={setOpen} />
            </Box>

            <MovieCard movieData={movieData} />

            <Box variant="div" sx={{}}>
              <Box
                variant="div"
                sx={{ textAlign: "left", display: "flex", gap: "10px" }}
              >
                {movieData.genres.split(", ").map((ele) => (
                  <MovieGenres genres={ele} key={ele} />
                ))}
              </Box>

              <Box variant="div">
                <MovieInfo movieData={movieData} />
              </Box>
            </Box>
          </Box>

          <Box
            variant="div"
            sx={{
              backgroundColor: "white",
              width: "100%",
              paddingBottom: "50px",
            }}
          >
            <Box
              variant="div"
              sx={{
                width: "90%",
                margin: "auto",
                paddingTop: "20px",
                display: "flex",
              }}
            >
              <Box variant="div" sx={{ width: "62%" }}>
                <Heading headingString={"Photos"} arrow={true} />

                <ImageSlider images={movieData.images.items} />
                <Box variant="div" sx={{ width: "100%" }}>
                  <Heading headingString={"Top Cast"} arrow={true} />

                  <Cast actorList={movieData.actorList} />
                </Box>

                <Box variant="div" sx={{width:"100%", marginTop:"50px"}}>
                <Heading headingString={"More like this"} arrow={false}/>
                <MovieSlider data={movieData.similars}/>

                </Box>
                <Box
                  variant="div"
                  sx={{ width: "100%", margin: "auto", paddingTop: "20px" }}
                >
                  <Heading headingString={"Details"} arrow={false} />

                  <Details movieData={movieData} />
                </Box>
                <Box
                  variant="div"
                  sx={{ width: "100%", margin: "auto", paddingTop: "20px" }}
                >
                  <Heading headingString={"Box Office"} arrow={false} />

                  <BoxOffice movieData={movieData} />
                </Box>

                
              </Box >

              <Box variant="div" sx={{ width: "28%", padding: "0px 40px" }}>
                <RightPanel />
              </Box>
            </Box>
          </Box>
        </div>
      )}{" "}
    </div>
    <Footer/>
    </>
  );
};

