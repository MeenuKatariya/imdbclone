import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  errorPopularMovie,
  getFilteredData,
  getMovieDetails,
  loadingPopularMovie,
} from "../../store/moviedetails/action";
import { Loading } from "../Loading";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
export const PhotoGallary = () => {
  const { loading, error, movieDetails } = useSelector(
    (state) => state.movieDetails
  );
  const data = movieDetails[0];
  let poster;
  if (movieDetails.length != 0) {
    poster = movieDetails[0].posters.posters[0].link;
  }
  const id  ="tt8426926";
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(loadingPopularMovie());
    axios({
      method: "get",
      url: `http://localhost:8080/movieDetails?id=${id}`,
    })
      .then((res) => {
        dispatch(getMovieDetails(res.data));
      })
      .then((err) => dispatch(errorPopularMovie()));
  }, [dispatch]);

  return (
    <Box variant="div" className="photo-gallary">
      <Box
        variant="div"
        sx={{ maxWidth: "750px", margin: "auto", backgroundColor: "white" }}
      >
        <img
          src="https://m.media-amazon.com/images/I/71id-Plo6eL.jpg"
          width="95%"
        />

        {movieDetails.length === 0 ? (
          <Loading />
        ) : (
          <Box variant="div">
            <Box sx={{ border: "1px solid rgb(232,232,232)", margin: "20px" }}>
              <Box
                sx={{
                  textAlign: "left",
                  padding: "15px 10px",
                  display: "flex",
                }}
              >
                <img src={poster} width="80" style={{ cursor: "pointer" }} />
                <Box sx={{ paddingLeft: "15px" }}>
                  <Typography
                    variant="div"
                    sx={{
                      fontSize: "18px",
                      color: "rgb(19,108,178)",
                      cursor: "pointer",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    {movieDetails[0].fullTitle}
                  </Typography>
                  <Typography variant="h5" sx={{ fontSize: "30px" }}>
                    Photo Gallary
                  </Typography>
                </Box>
              </Box>
              <ImageList
                sx={{
                  maxWidth: "450px",
                  padding: "5px 10px",
                  "&::-webkit-scrollbar": { display: "none" },
                }}
                cols={5}
              >
                {movieDetails[0].images.items.map((el) => (
                  <ImageListItem
                    key={el.image}
                    sx={{
                      maxWidth: "90px",
                      height: "130px",
                      cursor: "pointer",
                    }}
                  >
                    <img
                      width="100%"
                      style={{ height: "100px" }}
                      src={el.image}
                      srcSet={el.image}
                      alt={el.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};