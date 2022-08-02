import { Box, Divider, Link, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import {
  errorPopularMovie,
  getPopularMovie,
  loadingPopularMovie,
} from "../../store/moviedetails/action";
import { Heading } from "./Headings";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ListRoundedIcon from "@mui/icons-material/ListRounded";
import PlayCircleOutlineRoundedIcon from "@mui/icons-material/PlayCircleOutlineRounded";
import FilterRoundedIcon from "@mui/icons-material/FilterRounded";
import { useDispatch, useSelector } from "react-redux";

export const RightPanel = () => {
  const { loading, error, movies } = useSelector((state) => state.movieDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadingPopularMovie());
    axios({
      method: "get",
      url: "http://localhost:8080/popularMovies",
    })
      .then((res) => {
        dispatch(getPopularMovie(res.data));
      })
      .then((err) => dispatch(errorPopularMovie()));
  }, [dispatch]);

  return (
    <Box variant="div">
      <Heading headingString={"More To explore"} />
      <Typography
        variant="h4"
        sx={{
          textAlign: "left",
          fontSize: "25px",
          fontWeight: "600",
          marginTop: "30px",
        }}
      >
        Most anticipated Indian movies and shows
      </Typography>
      <Typography variant="div" sx={{ color: "rgb(117,117,130)" }}></Typography>
      <div
        style={{
          textAlign: "left",
          color: "rgb(117,117,130)",
          letterSpacing: "1px",
          marginTop: "10px",
        }}
      >
        Rating shows IMDb rating.
      </div>
      {movies.length === 0 ? (
        <div>loading....</div>
      ) : (
        <Box sx={{}}>
          {movies.map((el) => (
            <div key={el.id}>
              <Divider
                sx={{ borderColor: "rgb(224,224,224)", margin: "15px 0px" }}
              />
              <Box
                variant="div"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box sx={{ display: "flex", width: "80%" }}>
                  <div
                    style={{
                      width: "11%",
                      textAlign: "left",
                      color: "rgb(33,33,33)",
                      fontWeight: "700",
                    }}
                  >
                    {el.rank}
                  </div>
                  <Typography variant="div" sx={{ color: "rgb(33,33,33)" }}>
                    {el.title}
                  </Typography>
                </Box>

                <Box>
                  <Typography
                    variant="div"
                    sx={{ color: "rgb(117,117,130)", marginRight: "20px" }}
                  >
                    {el.imDbRating}
                  </Typography>
                  <ArrowForwardIosRoundedIcon
                    sx={{ color: "rgb(33,33,33)", fontSize: "15px" }}
                  />
                </Box>
              </Box>
            </div>
          ))}
        </Box>
      )}
      <Divider sx={{ borderColor: "rgb(224,224,224)", margin: "15px 0px" }} />

      <Box
        variant="div"
        alt="most popular movie"
        sx={{
          position: "relative",
          marginTop: "80px",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        <img src="https://m.media-amazon.com/images/M/MV5BYjAzMDBlMmMtMGNlYy00OTUxLThlMjYtZjAwZmVlNjI2ZmZhXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX380_CR0,36,380,214_.jpg%22" />
        <div
          style={{
            color: "rgb(33,33,33)",
            textAlign: "left",
            marginTop: "15px",
            letterSpacing: "1.5px",
            marginBottom: "10px",
          }}
        >
          The Best Movies and Shows to Watch in August
        </div>
        <Box
          variant="div"
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            bottom: "85px",
            left: "10px",
            cursor: "pointer",
          }}
        >
          <ListRoundedIcon
            sx={{
              color: "white",
              fontSize: "35px",
              "&:hover": {
                color: "rgb(245,197,24)",
              },
            }}
          />
          <div
            style={{
              color: "#ffffff",
              textAlign: "left",
              letterSpacing: "1.5px",
              fontSize: "18px",
            }}
          >
            List
          </div>
        </Box>
        <Link
          sx={{
            textDecoration: "none",
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          See the full list
        </Link>
      </Box>
      <Box
        variant="div"
        alt="mcu movies"
        sx={{
          position: "relative",
          marginTop: "50px",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        <img
          width="100%"
          height="240px"
          src="https://m.media-amazon.com/images/M/MV5BYTZhOTEzYjgtNzljMy00M2IyLThkZmMtNjdiN2Y5MDEwMWE5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX760_CR0,71,760,428_.jpg"
        />
        <div
          style={{
            color: "rgb(33,33,33)",
            textAlign: "left",
            marginTop: "15px",
            letterSpacing: "1.5px",
            marginBottom: "10px",
          }}
        >
          All About the MCU Phase 5
        </div>
        <Box
          variant="div"
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            bottom: "75px",
            left: "10px",
            cursor: "pointer",
          }}
        >
          <PlayCircleOutlineRoundedIcon
            sx={{
              color: "white",
              fontSize: "35px",
              "&:hover": {
                color: "rgb(245,197,24)",
              },
            }}
          />
          <div
            style={{
              color: "#ffffff",
              textAlign: "left",
              letterSpacing: "1.5px",
              fontSize: "18px",
            }}
          >
            1:55
          </div>
        </Box>
        <Link
          sx={{
            textDecoration: "none",
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Watch the video
        </Link>
      </Box>

      <Box
        variant="div"
        alt="mcu movies"
        sx={{
          position: "relative",
          marginTop: "50px",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        <img
          width="100%"
          height="210px"
          src="https://m.media-amazon.com/images/M/MV5BMTA0MDlkMGYtMTEwYS00YTc2LTk2YzMtYWQzZmMxYmUxZmY1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX760_CR0,71,760,428_.jpg"
        />
        <div
          style={{
            color: "rgb(33,33,33)",
            textAlign: "left",
            marginTop: "15px",
            letterSpacing: "1.5px",
            marginBottom: "10px",
          }}
        >
          Double Take: Celebrity Twins
        </div>
        <Box
          variant="div"
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            bottom: "75px",
            left: "10px",
            cursor: "pointer",
          }}
        >
          <FilterRoundedIcon
            sx={{
              color: "white",
              fontSize: "30px",
              "&:hover": {
                color: "rgb(245,197,24)",
              },
            }}
          />
          <div
            style={{
              color: "#ffffff",
              textAlign: "left",
              letterSpacing: "1.5px",
              fontSize: "15px",
            }}
          >
            Photos
          </div>
        </Box>
        <Link
          sx={{
            textDecoration: "none",
            cursor: "pointer",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          See the full list
        </Link>
      </Box>
    </Box>
  );
};
