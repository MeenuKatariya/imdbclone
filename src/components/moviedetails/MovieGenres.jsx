import { Typography } from "@mui/material";
import React from "react";
export const MovieGenres = ({genres}) => {
  
  return (
    <Typography
      variant="div"
      sx={{
        color: "white",
        borderRadius: "20px",
        border: "2px solid white",
        padding: "5px 20px",
        fontWeight: "500",
        cursor:"pointer",
        marginLeft:"10px",
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
