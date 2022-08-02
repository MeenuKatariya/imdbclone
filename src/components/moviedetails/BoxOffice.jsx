import { Box, Typography } from "@mui/material";
import React from "react";

export const BoxOffice = ({ movieData }) => {
  const boxOffice=movieData.boxOffice;
  return (
    <Box variant='div' sx={{width:"70%",display:"flex",justifyContent:"left", textAlign:"left", marginTop:"20px",gap:"200px"}}>
        <Box variant="div">
        <Typography variant="div" sx={{fontWeight: "600",lineHeight:"30px"}}>
        Budget
      </Typography>
      <br />
      <Typography variant="div" sx={{ color: "rgb(32,32,32)",paddingTop:"15px" }}>
        {boxOffice.budget}
      </Typography>

        </Box>

        <Box variant="div">
        <Typography variant="div" sx={{ lineHeight: "30px", fontWeight: "600"}}>
        Gross worldWide
      </Typography>
      <br />
      <Typography variant="div" sx={{ color: "rgb(32,32,32)",paddingTop:"15px" }}>
        {boxOffice.cumulativeWorldwideGross}
      </Typography>

        </Box>
      
    </Box>
  );
};
