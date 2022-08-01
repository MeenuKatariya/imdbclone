import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";

export const Cast = ({ actorList }) => {

  return (
    <div style={{width:"70%"}}>
        <Grid container spacing={2} sx={{gap:"30px",margin:"25px 5px"}}>
        {actorList.map((el) => (
        <Grid xs={3} md={5} sx={{display:"flex", alignItems:"center", justifyContent:"left"}}>
          <Avatar
            alt={el.name}
            src={el.image}
            sx={{
              width: "100px",
              height: "100px",
              ".MuiAvatar-img": {
                margin: "10px",
              },
            }}
          />

          <Box variant="div" sx={{textAlign:"left",marginLeft:"10px", color:"rgb(33,33,33)"}}>
            <Typography variant="div" sx={{lineHeight:"10px",fontWeight:"600"}}>{el.name}</Typography><br/>
            <Typography variant="div" sx={{color:"rgb(117,117,130)"}}>{el.asCharacter}</Typography>

          </Box>


        </Grid>
      ))}

        </Grid>
      
    </div>
  );
};
