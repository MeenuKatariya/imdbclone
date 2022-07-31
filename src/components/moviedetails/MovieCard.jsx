import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CollectionsIcon from "@mui/icons-material/Collections";
import BookmarkAddSharpIcon from '@mui/icons-material/BookmarkAddSharp';

export const MovieCard = ({ movieData }) => {
  const { image, trailer, images } = movieData;
  return (
    <Box variant="div" sx={{ display: "flex",marginTop:"10px",marginBottom:"25px" }}>
      <Card sx={{ maxWidth: 270, position:"relative" }}>
        <CardMedia
          component="img"
          height="100%"
          image={image}
          alt="green iguana"
        />
        <BookmarkAddSharpIcon sx={{position:"absolute",fontSize:"50px",left:"-12px",top:"-7px", color:"#92929275",cursor:"pointer","&:hover":{
            color:"#585858c5"
        }}}/>
      </Card>
      <Card sx={{ width: "60%", marginLeft: "5px" }}>
        <CardMedia
          component="iframe"
          width="100%"
          height="100%"
          src={`${trailer}?autoplay=1&mute=1&amp;rel=0`}
          allow="autoplay"
          //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </Card>

      <Box variant="div" sx={{ width: "16%", marginLeft: "5px" }}>
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 200,
            cursor: "pointer",
            backgroundColor: "rgb(49,49,49)",
            "&:hover": {
              backgroundColor: "rgb(64,64,64)",
            },
          }}
        >
          <CardContent sx={{}}>
            <VideoLibraryIcon sx={{ color: "white", fontSize: "30px" }} />
            <br />
            <Typography
              variant="div"
              sx={{
                fontSize: "13px",
                fontWeight: "700",
                color: "white",
                letterSpacing: "2px",
                marginTop: "5px",
                cursor: "pointer",
              }}
            >
              1 VIDEOS
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 200,
            backgroundColor: "rgb(49,49,49)",
            marginTop: "5px",

            "&:hover": {
              backgroundColor: "rgb(64,64,64)",
            },
          }}
        >
          <CardContent sx={{}}>
            <CollectionsIcon sx={{ color: "white", fontSize: "30px" }} />
            <br />
            <Typography
              variant="div"
              sx={{
                fontSize: "13px",
                fontWeight: "700",
                color: "white",
                letterSpacing: "2px",
                marginTop: "5px",
              }}
            >
              {images.length} PHOTOS
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/UHYUeZ8JszQ"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>;