import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";



export const Cast = ({ actorList }) => {

  return (
    <div style={{width:"100%", margin:"20px 0px"}}>
        <Grid container rowSpacing={2}  columnSpacing={{ xs: 5, sm: 5, md: 5 }} sx={{justifyContent:"space-between", gap:"20px",paddingRight:"10%"}}>
        {actorList.map((el) => (
        <Grid key={el.id} item xs={5}  sx={{display:"flex", alignItems:"center", justifyContent:"left"}}>

        
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
