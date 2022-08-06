import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  errorPopularMovie,
  getMovieDetails,
  loadingPopularMovie,
} from "../../store/moviedetails/action";
import axios from "axios";
import { Loading } from "../Loading";
import { Box, Button, Card, Divider, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useParams } from "react-router-dom";
import { Navbar } from "../Components/components_meenu/Navbar";
import { Footer } from "../Components/components_meenu/Footer";
import ShareIcon from "@mui/icons-material/Share";

export const TrailerShow = () => {
  const { loading, error, movieDetails } = useSelector(
    (state) => state.movieDetails
  );
  const data = movieDetails[0];
  let trailer;
  if (movieDetails.length != 0) {
    trailer = movieDetails[0].trailer;
  }
  const dispatch = useDispatch();
  const { id } = useParams();
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
    <>
      <Navbar />
      <div style={{ backgroundColor: "black", width: "100%" }}>
        <div
          style={{
            width: "80%",
            height: "60px",
            padding: "5px 0px",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="outlined"
            startIcon={
              <CloseRoundedIcon
                sx={{
                  color: "rgb(137,137,137)",
                  fontSize: "40px",
                  "&:hover": {
                    color: "white",
                  },
                }}
              />
            }
            sx={{
              textTransform: "none",
              color: "white",
              fontSize: "15px",
              borderColor: "#000000",
              fontWeight: "700",
              letterSpacing: "1px",
              "&:hover": {
                backgroundColor: "rgb(48,48,48)",
                borderColor: "rgb(76,76,76)",
                color: "white",
              },
            }}
          >
            Close
          </Button>

          <ShareIcon
            sx={{
              padding: "10px",
              borderRadius: "50px",
              color: "white",
              cursor: "pointer",
              marginLeft: "60px",
              "&:hover": {
                backgroundColor: "rgb(48,48,48)",
              },
            }}
          />
        </div>
        {movieDetails.length === 0 ? (
          <Loading />
        ) : (
          <div
            style={{
              width: "80%",
              display: "flex",
              margin: "auto",
              justifyContent: "space-between",
              paddingBottom: "150px",
            }}
          >
            <Card
              sx={{ maxWidth: "800px", height: "500px", marginLeft: "5px" }}
            >
              <iframe
                title={trailer.fullTitle}
                component="iframe"
                width="800px"
                height="500px"
                src={`${trailer.linkEmbed}?autoplay=false&mute=true&width=800`}
                // src="https://www.imdb.com/video/vi315343385"
                allow="autoplay"
                frameBorder="none"
                allowFullScreen={true}
                scrolling="false"
                //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </Card>

            <div
              style={{
                width: "30%",
                backgroundColor: "rgb(18,18,18)",
                padding: "20px",
                textAlign: "left",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <Box sx={{ position: "relative", overflow: "hidden" }}>
                    <img
                      src={movieDetails[0].posters.posters[0].link}
                      width="100px"
                      style={{
                        height: "130px",
                        cursor: "pointer",
                        objectFit: "cover",
                      }}
                    />
                    <BookmarkAddIcon
                      sx={{
                        position: "absolute",
                        color: "white",
                        left: "-11px",
                        top: "-8px",
                        fontSize: "50px",
                        color: "#6d6c6cac",
                        cursor: "pointer",
                        "&:hover": {
                          color: "#585858c5",
                        },
                      }}
                    />
                  </Box>
                  <Box sx={{ paddingLeft: "15px", textAlign: "left" }}>
                    <Typography
                      variant="div"
                      sx={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#e3e3e3",
                        cursor: "pointer",
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {movieDetails[0].fullTitle}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        marginTop: "5px",
                        fontSize: "14px",
                        color: "rgb(137,137,137)",
                      }}
                    >
                      {movieDetails[0].genres}
                    </Typography>

                    <Button
                      variant="outlined"
                      sx={{
                        textTransform: "none",
                        color: "rgb(82,141,219)",
                        fontSize: "14px",
                        borderColor: "rgb(37,37,37)",
                        backgroundColor: "rgb(37,37,37)",
                        fontWeight: "600",
                        padding: "5px 10px",
                        marginTop: "15px",
                        "&:hover": {
                          backgroundColor: "rgb(48,48,48)",
                          borderColor: "rgb(48,48,48)",
                        },
                      }}
                    >
                      Watch options
                    </Button>
                  </Box>
                </div>

                <ChevronRightRoundedIcon
                  sx={{
                    padding: "10px",
                    borderRadius: "50px",
                    color: "white",
                    cursor: "pointer",

                    "&:hover": {
                      backgroundColor: "rgb(48,48,48)",
                    },
                    right: "0px",
                  }}
                />
              </div>

              <Divider
                sx={{ borderColor: "rgb(65,65,65)", margin: "15px 0px" }}
              />
              <Typography
                variant="div"
                sx={{
                  fontSize: "25px",
                  fontWeight: "600",
                  color: "#e3e3e3",
                  lineHeight: "50px",
                }}
              >
                {movieDetails[0].trailer.videoTitle}
              </Typography>
              <br />
              <Typography
                variant="div"
                sx={{
                  fontSize: "15px",
                  letterSpacing: "1px",
                  fontWeight: "500",
                  color: "#e3e3e3",
                  marginTop: "20px",
                }}
              >
                {movieDetails[0].plot}
              </Typography>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
