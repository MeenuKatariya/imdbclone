import React from 'react'
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import { grey } from '@mui/material/colors';

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
                height: '65px',
                border: '1px solid white',
                borderRadius: '4px',
                backgroundColor: '#00000049',
                paddingTop: '7px',
                boxSizing: 'border-box',
                cursor: 'pointer'
            }}
            onClick={onClick} >
            <KeyboardArrowRightRoundedIcon sx={{ color: 'white', fontSize: '50px', fontWeight: '900', "&:hover": { color: '#fbc02d ' } }} />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick, currentSlide } = props;
    return (
        <div
            className={"slick-prev slick-arrow" +
                (currentSlide === 0 ? " slick-disabled" : "")}
            aria-disabled={currentSlide === 0 ? true : false}
            style={{
                width: "48px",
                height: '65px',
                border: '1px solid white',
                borderRadius: '4px',
                backgroundColor: '#00000049',
                paddingTop: '7px',
                boxSizing: 'border-box',
                cursor: 'pointer',
                zIndex: '2'
            }}
            onClick={onClick} >
            <KeyboardArrowLeftRoundedIcon sx={{ color: 'white', fontSize: '50px', fontWeight: '900', "&:hover": { color: '#fbc02d ' } }} />
        </div>
    );
}

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};



const Sponsor = styled.div`
    width:320px;
    height:270px;
    // border:1px solid white;
    background:url('https://images-na.ssl-images-amazon.com/images/G/02/shazam/SPA-102519-WK-Generic300x250--1--18e78ee6-ee0d-45fa-b673-c49e5a113346.jpg')
`;

const Poster = styled.div`
    max-width:410px;
    height:220px;
    // border:1px solid green;
    background: linear-gradient(to bottom, transparent, black 150%), url("${props => props.url}");
    background-size: cover;
    position:relative;
`;

const Title = styled.p`
    color: white; 
    fontWeight: 500;
    width:360px;
    font-size:'20px';
    margin-top:10px;
    marging-bottom:0px;
    &:hover{
        text-decoration: underline
    }
    cursor:pointer;
`;

const BOX = styled.div`
    width:860pxpx;
    marginRight:70px;
    marginTop:20px;
    @media (max-width: 850px) {
        overflow:hidden;
        width:100%;
    }
   `;

const IMDBOriginals = () => {

    const [data, setData] = React.useState([
        {
            id: 'item1',
            title: 'All About the Marvel Cinematic Universe: Phase 5',
            duration:'1:55',
            image: 'https://m.media-amazon.com/images/M/MV5BZmIzMmUwZDQtMjhhZi00ZGZlLTlhOWQtYWEzMWJjZmZhOWEwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX760_CR0,0,760,428_.jpg'
        },
        {
            id: 'item2',
            title: '"Pretty Little Liars: Original Sin" Cast Answer Burning Qs',
            duration:'2:57',
            image: 'https://m.media-amazon.com/images/M/MV5BZjcwZWM1NzEtZjI2ZS00M2NmLWExNDQtNzNhYmRkMDU3MDIzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX760_CR0,0,760,428_.jpg'
        },
        {
            id: 'item3',
            title: "Jordan Peele Reveals the True Meaning of 'Nope'",
            duration:'3:32',
            image: 'https://m.media-amazon.com/images/M/MV5BN2M3YWNmNjUtNjMwYS00NjBiLTg4OGUtNWUxNTdmNzFiN2JjXkEyXkFqcGdeQWFsZWxvZw@@._V1_QL75_UX760_CR0,0,760,428_.jpg'
        },
        {
            id: 'item4',
            title: " 'The Gray Man' 'Cast Answer Burning Questions'",
            duration:'3:55',
            image: 'https://m.media-amazon.com/images/M/MV5BZWRkOTQwMDEtNmJjOS00NDY3LWJjMGMtMGNhMmEwNjdlY2ZmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX760_CR0,0,760,428_.jpg'
        },
        {
            id: 'item5',
            title: `A Highly Illogical "Star Trek: Strange New Worlds" Interview`,
            duration:'3:18',
            image: 'https://m.media-amazon.com/images/M/MV5BOGVmN2I1YzYtNzdiNC00NzZiLThiZjItNTZlY2E4Nzk4ZWI1XkEyXkFqcGdeQWpoZWZ0bGVy._V1_QL75_UX760_CR0,0,760,428_.jpg'
        }

    ])

    return (
        <div >
            <div style={{ display: 'flex',flexWrap:'wrap',width:'100%' }}>
                <div id='abc' style={{width:'100%',marginRight:'70px',marginTop:'20px'}}>
                    <Slider {...settings}>
                   {
                        data.map((el) => (
                            <div key={el.id} style={{maxwidth:'410px',height:'260px',marginLeft:'20px'}}>
                                <Poster url={el.image}>
                                <div style={{display:'flex',alignItems:'center',position:'absolute',bottom:'0'}}>
                                <PlayCircleOutlinedIcon sx={{ color: grey[50], fontSize: '40px', "&:hover": { color: '#fbc02d' },margin:'5px' }} />
                                <span style={{color:'white'}}>{el.duration}</span>
                                </div>
                                </Poster>
                                <Title>{el.title}</Title>
                            </div>
                        ))
                   }
                   </Slider>
                </div>
            </div>
        </div>
    )
}

export default IMDBOriginals