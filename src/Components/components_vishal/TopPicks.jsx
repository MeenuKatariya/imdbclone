import React from 'react';
import styled from "styled-components";
import IconButton from '@mui/material/IconButton';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import BookmarkAddSharpIcon from '@mui/icons-material/BookmarkAddSharp';
import { Link } from 'react-router-dom';

const Card = styled.div`
    width:185px;
    height:475px;
    // border:1px solid white;
    // box-sizing: border-box;
    border-radius: 5px;
`;

const CardImage = styled.div`
    width:183px;
    height:274px;
    // border:1px solid green;
    background: url("${props => props.url}");
    background-size:183px 274px;
    cursor:pointer;
`;

const CardContent = styled.div`
    width:183px;
    height:200px;
    // border:1px solid green;
    background-color:#1a1a1a;
    padding:10px 6px;
    box-sizing: border-box;
    border-radius: 0px 0px 5px 5px ;
    
`;

const WatchButton = styled.button`
    background-color: #2c2c2c;
    color: #5799ef;
    font-size: 14px;
    font-weight:700;
    width:100%;
    padding: 8px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
    &:hover{
        background-color:#464646;
    }
`;

const TrailerButton = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    box-sizing:border-box;
    // padding: 5px 5px;
    height:35px;
    font-size: 15px;
    font-weight:700;
    cursor: pointer;
    border-radius: 5px;
    display:flex;
    align-items:center;
    &:hover {
        background-color: #464646;
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
    slidesToShow: 6,
    slidesToScroll: 6,
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
                dots: true
            }
        },
        {
            breakpoint: 1050,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 830,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 3,
                infinite: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                infinite: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
            }
        }
    ]
};

const P = styled.p`
    cursor:pointer;
    &:hover{
        text-decoration: underline
    }
`;

const TopPicks = ({ data, User, GetUser }) => {
    // console.log('data',data)

    const GetWatchlist = (ele) => {

        fetch(`https://imdb-clone-database.herokuapp.com/user_profile/1`, {
            method: 'PATCH',
            body: JSON.stringify({ watchlist: [...User[0].watchlist, ele] }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(() => GetUser())
            .catch((error) => console.log(error))

    }

    const GetRecentViews = (ele) => {
        fetch(`https://imdb-clone-database.herokuapp.com/user_profile/1`, {
            method: 'PATCH',
            body: JSON.stringify({ recently_viewed: [...User[0].recently_viewed, ele] }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(() => GetUser())
            .catch((error) => console.log(error))

    }
    return (
        <div style={{ marginTop: '25px' }}>
            <Link to={'/what-to-watch'} style={{ textDecoration: 'none' }}>
            <div style={{ marginTop: '25px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '5px', height: '30px', backgroundColor: '#f5c518', borderRadius: '3px' }}></div>
                    <div style={{ color: 'white', fontSize: '25px', fontWeight: '700', textAlign: 'center', marginLeft: '10px',cursor:'pointer' }}> Top Picks  </div>   
                    <KeyboardArrowRightRoundedIcon sx={{ fontSize: '40px', color: 'white', marginTop: '5px',"&:hover":{color:'#fbc02d'},cursor:'pointer' }} />
                </div>
                <span style={{ color: '#adadad', fontWeight: '500' }}>TV shows and movies just for you</span>
            </div></Link>

            <div style={{ width: '100%'}}>
                <Slider {...settings}>
                    {
                        data.map((el) => (
                            <Card key={el.id} onClick={() => GetRecentViews(el)}>
                                <Link to={`/movieDetails/${el.id}`}>
                                <CardImage url={el.image}>
                                    <BookmarkAddSharpIcon onClick={() => GetWatchlist(el)} sx={{ color: '#000000ad', cursor: 'pointer', fontSize: '70px', margin: '-10px 0px 0px -16px', "&:hover": { color: '#32323285' } }} />
                                </CardImage>
                                </Link>
                                <CardContent onClick={() => GetRecentViews(el)}>
                                    <div style={{ display: 'flex', alignItems: 'center', height: '35px' }}>
                                        <StarRoundedIcon sx={{ fontSize: '17px', color: '#fbc02d', marginRight: '3px' }} />
                                        <span style={{ color: 'white', fontWeight: '400' }}>{el.imDbRating}</span>
                                        <StarBorderRoundedIcon sx={{ fontSize: '18px', color: '#5799ef', marginLeft: '25px' }} />
                                    </div>
                                    <div style={{ height: '30px' }}><P style={{ color: 'white', fontWeight: '400', fontSize: '17px', marginTop: '2px',whiteSpace: 'nowrap' ,overflow:'hidden',textOverflow: 'ellipsis' }}>{el.title}</P></div>
                                    <div style={{ marginTop: '20px' }}>
                                        <WatchButton>Watch options</WatchButton>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems:'center',marginTop: '7px' }}>
                                        <TrailerButton><PlayArrowRoundedIcon sx={{ fontSize: '25px', marginRight: '4px' }} />Trailer &nbsp;</TrailerButton>
                                        <IconButton aria-label="info" size="large"
                                            sx={{
                                                color: 'white',
                                                "&:hover": { backgroundColor: '#464646' }
                                            }}>
                                            <InfoOutlinedIcon />
                                        </IconButton>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    }

                </Slider>



            </div>
        </div>
    )
}

export default TopPicks