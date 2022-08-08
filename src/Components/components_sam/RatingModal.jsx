import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Rating } from "@mui/material";
import styled from "styled-components";
import axios from "axios";
import { RatingContext } from "./RatingContext";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "rgb(87,153,239)",
  },
  "& .MuiRating-iconEmpty": {
    color: "rgb(170,170,170)",
  },
  "& .MuiRating-iconHover": {
    color: "rgb(87,153,239)",
  },
});

export const RatingModal = ({ setOpen, open, movieData}) => {
  const [value, setValue] = React.useState(0);
  const {title, id}=movieData;
  const {handleRating, handleUpdateRating}=  React.useContext(RatingContext)

  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          "&:hover": {
            border: "2px solid black",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 550,
            height: 200,
            bgcolor: "rgb(31,31,31)",

            color: "white",
            textAlign: "center",
            paddingTop: "60px",
            "&:hover": {
              // border:"2px solid white"
            },
          }}
        >
          <StarRateRoundedIcon
            sx={{
              position: "absolute",
              left: "39%",
              top: "-27%",
              fontSize: "130px",
              color: "rgb(87,153,239)",
            }}
          >
            <Typography sx={{ fontSize: "20px", color: "black" }}>8</Typography>
          </StarRateRoundedIcon>

          <Typography
            id="modal-modal-title"
            variant="h7"
            component="h7"
            sx={{
              fontSize: "13px",
              fontWeight: "600",
              color: "rgb(201,162,25)",
            }}
          >
            RATE THIS
          </Typography>
          <Typography
            id="modal-modal-title"
            variant="h6"
            sx={{ fontWeight: "700", marginTop: "15px", letterSpacing: "1px" }}
          >
            {title}
          </Typography>

          <StyledRating
            name="simple-controlled"
            value={value}
            max={10}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{ fontSize: "30px", marginTop: "10px" }}
          />
          <br />
          <Button
            disabled={value === 0}
            variant="contained"
            onClick={()=>{handleUpdateRating({id,value})
                    setOpen(false)}}
            sx={{
              color: "rgb(170,170,170)",
              textTransform: "none",
              width: "55%",
              marginTop: "15px",
              backgroundColor: "rgb(87,87,87)",
              fontWeight: "700",
              letterSpacing: "1px",
              "&:hover": {
                backgroundColor: "#6d6d6d",
              },
              "&:disabled":{
                backgroundColor:"#454545",
                color:"#969696"
              }
            }}
          >
            {" "}
            Rate
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
