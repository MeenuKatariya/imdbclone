import React from 'react'
import { Box, Link, Typography, Button, Divider } from "@mui/material";
export const MovieTitle =({movieData})=>{
    const {title,year,runtimeStr}=movieData;

    return (
        <Box variant="div" sx={{ color: "white", textAlign: "left"}}>
            <Typography variant="h3">{title}</Typography>

            <Box variant="div" sx={{color:"rgb(183,181,183)",fontWeight:"500"}}>
              <Typography variant="span">{year}</Typography>
              <Typography variant="span" sx={{ textAlign: "center" }}>
                {" "}
                .{" "}
              </Typography>
              <Typography variant="span">{runtimeStr}</Typography>
            </Box>
          </Box>
    )
}