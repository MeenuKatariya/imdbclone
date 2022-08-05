import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import TheatersIcon from "@mui/icons-material/Theaters";
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export const MovieInfo = ({ movieData }) => {
  const { plot, directors, writers, stars } = movieData;
  const writer = writers.split(", ");
  const star = stars.split(", ");
  return (
    <Box
      variant="div"
      sx={{
        fontSize: "17.5px",
        width: "100%",
        marginTop: "20px",
        textAlign: "left",
        color: "rgb(255,255,226)",
        letterSpacing: "1px",
        fontWeight: "500",
        display: "flex",
      }}
    >
      <Box variant="div" sx={{ width: "70%" }}>
        <Box
          variant="div"
          sx={{
            letterSpacing: "0.5px",
            lineHeight: "23px",
            textAlign: "justify",
          }}
        >
          {plot}
        </Box>
        <Divider sx={{ borderColor: "rgb(76,76,76)", margin: "15px 0px" }} />
        <Box variant="div">
          <Typography variant="span" sx={{ fontWeight: "700" }}>
            Director
          </Typography>
          <Typography
            variant="span"
            sx={{ color: "rgb(87,153,239)", marginLeft: "20px" }}
          >
            {directors}
          </Typography>
        </Box>
        <Divider sx={{ borderColor: "rgb(76,76,76)", margin: "15px 0px" }} />
        <Box variant="div">
          <Typography variant="span" sx={{ fontWeight: "700" }}>
            Writers
          </Typography>{" "}
          {writer.map((el) => (
            <Typography
            key={el}
              variant="span"
              sx={{ color: "rgb(87,153,239)", marginLeft: "20px" }}
            >
              {el}
            </Typography>
          ))}
        </Box>
        <Divider sx={{ borderColor: "rgb(76,76,76)", margin: "15px 0px" }} />
        <Box variant="div">
          <Typography variant="span" sx={{ fontWeight: "700" }}>
            Stars
          </Typography>
          {star.map((el) => (
            <Typography key={el}
              variant="span"
              sx={{ color: "rgb(87,153,239)", marginLeft: "20px" }}
            >
              {el}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box variant="div" sx={{ width: "50%", textAlign: "right" }}>
        <Button
          startIcon={<TheatersIcon />}
          sx={{
            padding: "11px 10px",
            fontSize: "15px",
            justifyContent: "left",
            color: "black",
            fontWeight: "700",
            textTransform: "none",
            width: "80%",
            maxWidth:"460px",
            backgroundColor: "rgb(245,197,24)",
            "&:hover": {
                backgroundColor: "#b8971f"
              },
          }}
        >
          See Showtimes
        </Button>
        <Box variant="div" sx={{display:"flex",justifyContent:"right",marginTop:"10px"}}>
        <Button
          variant="outlined"
          startIcon={<AddIcon />}
          sx={{
            padding: "11px 10px",
            fontSize: "15px",
            justifyContent: "left",
            fontWeight: "700",
            textTransform: "none",
            color: "white",
            width: "68%",
            maxWidth:"410px",
            borderColor: "rgb(49,49,49)",
            backgroundColor:"rgb(49,49,49)",
            "&:hover": {
              backgroundColor: "#4a4a4a",
              borderColor: "#424141",
            },
          }}
        >
          Add to Watchlist
        </Button>
        <Button
          variant="outlined"
          sx={{
            padding: "11px 10px",
            fontSize: "15px",
            fontWeight: "700",
            textTransform: "none",
            color: "white",
            flex:"right",
            marginLeft:"4px",
            borderColor: "rgb(49,49,49)",
            backgroundColor:"rgb(49,49,49)",
            "&:hover": {
              backgroundColor: "#4a4a4a",
              borderColor: "#424141",
            },
          }}
        >
         <KeyboardArrowDownIcon/>
        </Button>

        </Box>
        <Box variant="div" sx={{display:"flex",justifyContent:"left",marginTop:"20px",color: "rgb(87,153,239)",marginLeft:"20%"}}>
         <Typography sx={{fontWeight:"700", marginRight:"5px"}}>631</Typography><Typography>User reviews</Typography>
         <Typography sx={{fontWeight:"700", margin:"0px 6px"}}>15</Typography><Typography>Critics reviews</Typography>
        </Box>
      </Box>
    </Box>
  );
};
