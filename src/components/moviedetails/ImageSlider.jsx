import Slider from "react-slick";
import React from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import styled from "styled-components";

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
        right: "4px",
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

const BOX = styled.div`
  width: 860pxpx;
  marginright: 70px;
  margintop: 20px;
  @media (max-width: 850px) {
    overflow: hidden;
    width: 100%;
  }
`;

export const ImageSlider = ({ images }) => {
  var settings = {
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
          slidesToShow: 5,
          slidesToScroll: 5,
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

  return (
    <div
      style={{
        width: "100%",
        height: "190px",
        marginTop: "20px",
        position: "relative",
      }}
    >
      <Slider {...settings}>
        {images.map((el) => (
          <div key={el.image} style={{ margin: "5px" }}>
            <img
              src={el.image}
              

              width="185px"
              height="185px"
              style={{ margin: "5px",objectFit:"cover" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
