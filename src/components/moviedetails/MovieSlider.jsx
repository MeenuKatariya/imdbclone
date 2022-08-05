import React from "react";
import styled from "styled-components";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { fontWeight } from "@mui/system";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { Card, CardMedia } from "@mui/material";

const CardContent = styled.div`
  width: 183px;
  // border:1px solid green;
  padding: 10px 6px;
  box-sizing: border-box;
  border-radius: 0px 0px 5px 5px;
`;

const WatchButton = styled.button`
  background-color: rgb(235, 235, 235);
  color: #5799ef;
  font-size: 14px;
  font-weight: 700;
  width: 100%;
  padding: 10px 8px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
  margin-left: 10px;
  &:hover {
    background-color: #c8c8c8;
  }
`;

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
        right: "-2px",
        top: "140px",
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
        zIndex: "2",
        top: "140px",
        left: "-9px",
      }}
      onClick={onClick}
    >
      <KeyboardArrowLeftRoundedIcon
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

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 830,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        infinite: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
  ],
};

const P = styled.p`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const MovieSlider = ({ data }) => {
  return (
    <div style={{ marginTop: "25px" }}>
      <div style={{ width: "100%"}}>
        <Slider {...settings} >
          {data.map((el) => (
            <Card
              key={el.id}
              sx={{ maxWidth: "190px", marging: "5px" }}
            >
              <CardMedia
                component="img"
                alt={el.title}
                height="270"
                image={el.image}
              />
              <CardContent sx={{ backgroundColor: "white" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "35px",
                  }}
                >
                  <StarRoundedIcon
                    sx={{
                      fontSize: "17px",
                      color: "#fbc02d",
                      marginRight: "3px",
                    }}
                  />
                  <span
                    style={{ color: "rgb(117,117,148)", fontWeight: "400" }}
                  >
                    {el.imDbRating}
                  </span>
                  <StarBorderRoundedIcon
                    sx={{
                      fontSize: "18px",
                      color: "#5799ef",
                      marginLeft: "25px",
                    }}
                  />
                </div>
                <div style={{ height: "40px" }}>
                  <P
                    style={{
                      color: "black",
                      fontWeight: "400",
                      fontSize: "17px",
                      marginTop: "2px",
                      textAlign: "left",
                    }}
                  >
                    {el.title}
                  </P>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <WatchButton>Watch options</WatchButton>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <IconButton
                    aria-label="info"
                    size="small"
                    sx={{
                      color: "rgb(115,115,115)",
                      marginTop:"7px"
                    }}
                  >
                    <InfoOutlinedIcon />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          ))}
        </Slider>
      </div>
    </div>
  );
};
