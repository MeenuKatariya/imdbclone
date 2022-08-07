import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { RatingModal } from "./RatingModal";
import axios from "axios";

export const MoviesRating = ({ movieData,setOpen }) => {
  let { imDbRating,ratings,id } = movieData;
  // const [rating,setRating]=useState(ratings)
  // useEffect(()=>{

  //   axios({
  //     method: "get",
  //     url: `https://imdb-clone-database.herokuapp.com/movieDetails?id=${id}`,
  //   }).then((res) => setRating(res.data.ratings)).catch((err) => console.log(err));

  // },[rating])

  return (
    <Box
      varient="div"
      sx={{ display: "flex", gap: "20px", position: "absolute", right: "20px" }}
    >
      <Box variant="div">
        <Typography
          variant="div"
          sx={{
            color: "rgb(188,188,178)",
            fontSize: "13px",
            letterSpacing: "1px",
            fontWeight: "800",
          }}
        >
          IMDb RATING
        </Typography>
        <Box
          variant="outlined"
          onClick={()=>(setOpen(true))}
          startIcon={<StarIcon />}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            gap: "2px",
            padding: "5px 0px",
            textTransform: "none",
            color: "rgb(245,197,24)",
            borderColor: "rgb(31,31,31)",
            cursor: "pointer",
            borderRadius: "5px",
            marginTop: "5px",
            "&:hover": {
              backgroundColor: "rgb(48,48,48)",
              borderColor: "rgb(76,76,76)",
            },
          }}
        >
          <StarIcon />
          <Typography
            variant="span"
            sx={{
              color: "white",
              fontSize: "20px",
              fontWeight: "600",
              letterSpacing: "2px",
            }}
          >
            {imDbRating}
            <Typography
              variant="span"
              sx={{ color: "rgb(128,128,128)", fontWeight: "400" }}
            >
              /10
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Box variant="div">
        <Typography
          variant="div"
          sx={{
            color: "rgb(188,188,178)",
            fontSize: "13px",
            letterSpacing: "1px",
            fontWeight: "800",
          }}
        >
          YOUR RATING
        </Typography>
        {
          ratings===null?  <Box
          variant="outlined"
          onClick={()=>setOpen(true)}
          startIcon={<StarIcon />}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            gap: "2px",
            padding: "5px 0px",
            textTransform: "none",
            color: "rgb(87,153,239)",
            borderColor: "rgb(31,31,31)",
            cursor: "pointer",
            borderRadius: "5px",
            marginTop: "5px",
            "&:hover": {
              backgroundColor: "rgb(48,48,48)",
              borderColor: "rgb(76,76,76)",
            },
          }}
        >
          <StarBorderIcon />
          <Typography
            variant="span"
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              letterSpacing: "2px",
            }}
          >
            Rate
          </Typography>
        </Box>: <Box
          variant="outlined"
          onClick={()=>(setOpen(true))}
          startIcon={<StarIcon />}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            gap: "2px",
            padding: "5px 0px",
            textTransform: "none",
            color: "rgb(87,153,239)",
            borderColor: "rgb(31,31,31)",
            cursor: "pointer",
            borderRadius: "5px",
            marginTop: "5px",
            "&:hover": {
              backgroundColor: "rgb(48,48,48)",
              borderColor: "rgb(76,76,76)",
            },
          }}
        >
          <StarIcon />
          <Typography
            variant="span"
            sx={{
              color: "white",
              fontSize: "20px",
              fontWeight: "600",
              letterSpacing: "2px",
            }}
          >
            {ratings}
            <Typography
              variant="span"
              sx={{ color: "rgb(128,128,128)", fontWeight: "400" }}
            >
              /10
            </Typography>
          </Typography>
        </Box>
        }
      
      </Box>

      <Box variant="div">
        <Typography
          variant="div"
          sx={{
            color: "rgb(188,188,178)",
            fontSize: "13px",
            letterSpacing: "1px",
            fontWeight: "800",
          }}
        >
          POPULARITY
        </Typography>
        <Box
          variant="outlined"
          startIcon={<StarIcon />}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            gap: "2px",
            padding: "5px 2px",
            textTransform: "none",
            color: "rgb(103,173,75)",
            borderColor: "rgb(31,31,31)",
            cursor: "pointer",
            borderRadius: "5px",
            marginTop: "5px",
            "&:hover": {
              backgroundColor: "rgb(48,48,48)",
              borderColor: "rgb(76,76,76)",
            },
          }}
        >
          <TrendingUpIcon
            sx={{
              border: "2px solid rgb(103,173,75)",
              borderRadius: "50px",
            }}
          />
          <Typography
            variant="span"
            sx={{
              color: "white",
              fontSize: "20px",
              fontWeight: "600",
              letterSpacing: "2px",
              marginLeft: "5px",
            }}
          >
            60
          </Typography>
          <Typography
            variant="div"
            sx={{
              color: "rgb(128,128,128)",
              fontWeight: "400",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ArrowDropUpIcon />
            3,289
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
