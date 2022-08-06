import { Typography } from "@mui/material";
import React from "react";
export const MovieGenres = ({genres}) => {
  
  return (
    <Typography
      variant="div"
      sx={{
        color: "rgb(255,255,226)",
        fontSize:"15px",
        borderRadius: "20px",
        border: "2px solid rgb(174,174,174)",
        padding: "5px 20px",
        fontWeight: "500",
        cursor:"pointer",
        "&:hover": {
          backgroundColor: "rgb(48,48,48)",
          borderColor: "#ffffff",
        },
      }}
    >
      {genres}
    </Typography>
  );
};
