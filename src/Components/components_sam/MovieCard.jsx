import React from "react";
import { Box} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CollectionsIcon from "@mui/icons-material/Collections";
import BookmarkAddSharpIcon from '@mui/icons-material/BookmarkAddSharp';
import {Link} from 'react-router-dom';

export const MovieCard = ({ movieData }) => {
  const { posters, trailer, images,id } = movieData;
  const poster=posters.posters[0].link;
  const image=images.items;
  return (
    <Box variant="div" sx={{ display: "flex",marginTop:"10px",marginBottom:"25px" }}>
      <Card sx={{ maxWidth: 280, position:"relative" }}>
        <CardMedia
          component="img"
          height="100%"
          image={poster}
          alt="green iguana"
        />
        <BookmarkAddSharpIcon sx={{position:"absolute",fontSize:"50px",left:"-12px",top:"-7px", color:"#92929275",cursor:"pointer","&:hover":{
            color:"#585858c5"
        }}}/>
      </Card>
      <Card sx={{ width: "61%",maxWidth:"835px", marginLeft: "5px" }}>
        <iframe
          title={trailer.fullTitle}
          component="iframe"
          width="100%"
          height="100%"
          src={`${trailer.linkEmbed}?autoplay=false&mute=true&width=832`}
          // src="https://www.imdb.com/video/vi315343385"
          allow="autoplay"
          frameBorder="none"
          allowFullScreen={true}
          scrolling="false"
          //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </Card>

      <Box variant="div" sx={{ width: "18%",maxWidth:"250px", marginLeft: "5px" }}>
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: 215,
            cursor: "pointer",
            backgroundColor: "rgb(49,49,49)",
            "&:hover": {
              backgroundColor: "rgb(64,64,64)",
            },
          }}
        >
          <Link to={`/trailer/${id}`} style={{textDecoration:"none"}}>
          <CardContent sx={{textAlign:"center"}}>
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
          </Link>
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
            cursor:"pointer",
            "&:hover": {
              backgroundColor: "rgb(64,64,64)",
            },
          }}
        ><Link to={`/photogallery/${id}`} style={{textDecoration:"none"}}>
          <CardContent sx={{textAlign:"center"}}>
            
            <CollectionsIcon sx={{ color: "white", fontSize: "30px"}} />
            <br />
            <Typography
              variant="div"
              sx={{
                fontSize: "13px",
                fontWeight: "700",
                color: "white",
                letterSpacing: "2px",
                marginTop: "5px",
                cursor:"pointer"
              }}
            >
              {image.length} PHOTOS
            </Typography>
            
          </CardContent>
          </Link>
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
