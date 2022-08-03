import Slider from "react-slick";
import React, { useEffect } from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { errorPopularMovie, getMovieDetails, loadingPopularMovie } from "../../store/moviedetails/action";
import axios from "axios";
import { Loading } from "../Loading";
import { Button } from "@mui/material";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import ShareIcon from "@mui/icons-material/Share";
import {useParams} from 'react-router-dom';

function SampleNextArrow(props) {
  const { className, style, onClick, currentSlide, slideCount } = props;
  return (
    <div
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      style={{
        width: "48px",
        height: "65px",
        border: "1px solid white",
        borderRadius: "4px",
        backgroundColor: "#00000049",
        paddingTop: "7px",
        boxSizing: "border-box",
        cursor: "pointer",
        right: "20px",
        top:"50%"
      }}
      onClick={onClick}
    >
      <KeyboardArrowRightRoundedIcon
        sx={{
          color: "white",
          fontSize: "50px",
          fontWeight: "900",
          "&:hover": { color: "#fbc02d " },
        }}
      />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick, currentSlide } = props;
  return (
    <div
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-disabled={currentSlide === 0 ? true : false}
      style={{
        width: "48px",
        height: "65px",
        border: "1px solid white",
        borderRadius: "4px",
        backgroundColor: "#00000049",
        paddingTop: "7px",
        boxSizing: "border-box",
        cursor: "pointer",
        zIndex: "1",
        top:"50%",
        left:"20px"
      }}
      onClick={onClick}
    >
      <KeyboardArrowLeftRoundedIcon
        sx={{
          textAlign: "center",
          color: "white",
          fontSize: "50px",
          fontWeight: "900",
          "&:hover": { color: "#fbc02d " },
        }}
      />
    </div>
  );
}


export const ImageShow = () => {

  const { loading, error, movieDetails } = useSelector(
    (state) => state.movieDetails
  );
  const data = movieDetails[0];
  let images;
  if (movieDetails.length != 0) {
    images = movieDetails[0].images.items;
  }
  const dispatch = useDispatch();
  const id="tt8426926";
  useEffect(() => {
    dispatch(loadingPopularMovie());
    axios({
      method: "get",
      url: `http://localhost:8080/movieDetails?id=${id}`,
    })
      .then((res) => {
        dispatch(getMovieDetails(res.data));
      })
      .then((err) => dispatch(errorPopularMovie()));
  }, [dispatch]);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
   
  };

  return (
    <div style={{backgroundColor:"black",width:"100%"}}>
      <div style={{width:"80%",height:"60px",paddingTop:"10px 0px",margin:"auto",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
      <Button
          variant="outlined"
          startIcon={<CloseRoundedIcon sx={{color:"rgb(137,137,137)",fontSize:"40px","&:hover":{
            color:"white"
          }}} />}
          sx={{
            textTransform: "none",
            color: "white",
            fontSize:"15px",
            borderColor: "#000000",
            fontWeight:"700",
            letterSpacing:"1px",
            "&:hover": {
              backgroundColor: "rgb(48,48,48)",
              borderColor: "rgb(76,76,76)",
              color:"white"
            },
          }}
        >
          Close
        </Button>

        <img
          src="https://m.media-amazon.com/images/I/51IfG+VoQ8L.jpg"
          alt="google ads"
          Width="500px"
          height="60px"

          style={{marginTop:"10px",objectFit: "fill"}}

        />

<ShareIcon
          sx={{
            padding: "10px",
            borderRadius: "50px",
            color:"white",
            cursor:"pointer",
            marginLeft:"60px",
            "&:hover": {
              backgroundColor: "rgb(48,48,48)",
            },
          }}
        />

      </div>
       {
      movieDetails.length===0?<Loading/>:<div
      style={{
        width: "100%",
        height: "550px",
        marginTop: "20px",
        position: "relative",
        textAlign:"center",
        justifyContent:"center"
      }}
    >
      <Slider {...settings}>
        {images.map((el) => (
          <div key={el.image}>
            <img
              src={el.image}
              width="auto"
              height="550px"
              style={{ margin: "auto",objectFit:"cover" }}
            />
          </div>
        ))}
      </Slider>
    </div>
    }

    </div>

   
    
  );
};
