import { Box, Typography } from "@mui/material";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import React from "react";

export const Heading = ({headingString,arrow}) => {

  return (
    <Box
      variant="div"
      sx={{
        width: "100%",
        display: "flex",
        borderLeft: "4px solid rgb(245,197,24)",
        alignItems: "center",
        marginTop: "20px",
        cursor: "pointer",
        color: "rgb(33,33,33)",
      }}
    >
      <Typography variant="h4" sx={{ fontSize:"30px",fontWeight: "700", paddingLeft: "5px" }}>
        {headingString}
      </Typography>
      {
        arrow?<ArrowForwardIosRoundedIcon
        sx={{
          fontSize: "30px",
          marginLeft: "10px",
          "&:hover": {
            color: "rgb(245,197,24)",
          },
        }}
      />:null
      }
      
    </Box>
  );
};
