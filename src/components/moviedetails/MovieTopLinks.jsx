import React from 'react';
import ShareIcon from "@mui/icons-material/Share";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { Box, Link, Button, Divider } from "@mui/material";

export const MovieTopLinks =()=>{
    return (
        <Box
        component="div"
        sx={{
          display: "flex",
          gap: "5px",
          color: "white",
          justifyContent: "right",
          alignItems: "center",
        }}
      >
        <Link underline="hover" sx={{ color: "white" }}>
          Cast & crew
        </Link>
        {"."}
        <Link underline="hover" sx={{ color: "white" }}>
          User reviews
        </Link>
        {"."}
        <Link underline="hover" sx={{ color: "white" }}>
          Trivia
        </Link>
        <Divider
          orientation="vertical"
          sx={{ backgroundColor: "rgb(76,76,76)" }}
          flexItem
        />
        <Link underline="hover" sx={{ color: "white" }}>
          IMDBPro
        </Link>
        <Divider
          orientation="vertical"
          sx={{ backgroundColor: "rgb(76,76,76)" }}
          flexItem
        />
        <Button
          variant="outlined"
          startIcon={<WidgetsIcon />}
          sx={{
            textTransform: "none",
            color: "white",
            borderColor: "rgb(31,31,31)",
            "&:hover": {
              backgroundColor: "rgb(48,48,48)",
              borderColor: "rgb(76,76,76)",
            },
          }}
        >
          All topics
        </Button>
        <Divider
          orientation="vertical"
          sx={{ backgroundColor: "rgb(76,76,76)" }}
          flexItem
        />
        <ShareIcon
          sx={{
            padding: "10px",
            borderRadius: "50px",
            "&:hover": {
              backgroundColor: "rgb(48,48,48)",
            },
          }}
        />
      </Box>
    )
}