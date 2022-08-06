import { Box, Divider, Link, Typography } from '@mui/material';
import React from 'react';
export const Details=({movieData})=>{
    const {releaseDate,countries,languages,companies}=movieData;
    return(<Box variant="div" sx={{width:"100%",textAlign:"left"}}>
         <Divider sx={{ borderColor: "rgb(224,224,224)", margin: "15px 0px" }} />
         <Typography variant="span" sx={{color:"rgb(33,33,33)",fontSize:"17px",fontWeight:"600"}}>Release date</Typography>
         <Link sx={{marginLeft:"20px",cursor:"pointer", textDecoration:"none","&:hover":{textDecoration:"underline"}}}>{`${releaseDate} (${countries})`}</Link>
         <Divider sx={{ borderColor: "rgb(224,224,224)", margin: "15px 0px" }} />
         <Typography variant="span" sx={{color:"rgb(33,33,33)",fontSize:"17px",fontWeight:"600"}}>Country of origin</Typography>
         <Link sx={{marginLeft:"20px",cursor:"pointer", textDecoration:"none","&:hover":{textDecoration:"underline"}}}>{`${countries}`}</Link>
         <Divider sx={{ borderColor: "rgb(224,224,224)", margin: "15px 0px" }} />
         <Typography variant="span" sx={{color:"rgb(33,33,33)",fontSize:"17px",fontWeight:"600"}}>Language</Typography>
         <Link sx={{marginLeft:"20px",cursor:"pointer", textDecoration:"none","&:hover":{textDecoration:"underline"}}}>{`${languages}`}</Link>
         <Divider sx={{ borderColor: "rgb(224,224,224)", margin: "15px 0px" }} />
         <Typography variant="span" sx={{color:"rgb(33,33,33)",fontSize:"17px",fontWeight:"600"}}>Production company</Typography>
         <Link sx={{marginLeft:"20px",cursor:"pointer", textDecoration:"none","&:hover":{textDecoration:"underline"}}}>{`${companies}`}</Link>
         <Divider sx={{ borderColor: "rgb(224,224,224)", margin: "15px 0px" }} />
         <Typography variant="span" sx={{color:"rgb(33,33,33)",fontSize:"17px",fontWeight:"600"}}>See more company credits at IMDbPro</Typography>

    </Box>)
}