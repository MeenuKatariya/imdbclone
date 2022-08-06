import React from 'react'
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';


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
                zIndex: '100'
            }}
            onClick={onClick} >
            <KeyboardArrowLeftRoundedIcon sx={{ color: 'white', fontSize: '50px', fontWeight: '900', "&:hover": { color: '#fbc02d ' } }} />
        </div>
    );
}





const Sponsor = styled.div`
    // display:${props => props.dispayPorp};
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
`;

const Title = styled.p`
    color: white; 
    fontWeight: 500;
    width:360px;
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

const FeaturedTodayBanner = (props) => {
    const {dispayPorp,widthprop,slidetoshow} = props;
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: props.slidetoshow,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
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

    
    const [data, setData] = React.useState([
        {
            id: 'item1',
            title: 'Upcoming Superhero Movies and Series: "The Sandman" and More',
            image: 'https://m.media-amazon.com/images/M/MV5BMTliMmM0YzAtNTdmOS00YmJmLTkxNjMtMWE4ZTZjZGI1YzBjXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX760_CR0,0,760,428_.jpg'
        },
        {
            id: 'item2',
            title: 'These Stars Are on the Rise',
            image: 'https://m.media-amazon.com/images/M/MV5BMmY0OWE4YTctNWNhOS00OWJlLThmYzktMWM5MTY0YTExYjg0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX760_CR0,0,760,428_.jpg'
        },
        {
            id: 'item3',
            title: 'What TV Shows Are Renewed or Canceled?',
            image: 'https://m.media-amazon.com/images/M/MV5BMzJhNWVjNDYtMzNhOC00ZjRmLTgzYzUtY2RlZTYyZjgxNmI3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX760_CR0,0,760,428_.jpg'
        },
        {
            id: 'item4',
            title: 'How Well Does the ‘Shazam! 2’ Cast Know One Another?',
            image: 'https://m.media-amazon.com/images/M/MV5BYWRkZDRkNjYtNmMzNC00MWNkLTlkZWQtOWFlYzFkMDNlZTVkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX760_CR0,0,760,428_.jpg'
        },
        {
            id: 'item5',
            title: 'Photos We Love From San Diego Comic-Con 2022',
            image: 'https://m.media-amazon.com/images/M/MV5BZGU5NWJiZTUtOTcwNy00NGZlLTkzNTMtZDU5Mjk1OWIwZGM4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX760_CR0,0,760,428_.jpg'
        },
        {
            id: 'item6',
            title: 'Remembering Nichelle Nichols (1932-2022)',
            image: 'https://m.media-amazon.com/images/M/MV5BYThkYTlhODYtNTkxNS00ZTJkLWI1YzQtZDhiNzkyYWI4NGQ0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX760_CR0,72,760,428_.jpg'
        },
        {
            id: 'item7',
            title: 'What TV Shows Are Renewed or Canceled?',
            image: 'https://m.media-amazon.com/images/M/MV5BMjkxZmY1OGQtZTI3OS00YTVkLTk3ODUtMTAzMDM4YTUxMWMxXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_QL75_UX760_CR0,0,760,428_.jpg'
        },
        {
            id: 'item8',
            title: 'Photos We Love: The IMDboat Party at Comic-Con',
            image: 'https://m.media-amazon.com/images/M/MV5BZDc4NWEzNTYtZDM4My00MGFmLTkzMGUtYWNlMzBhNWU4ZDliXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX760_CR0,0,760,428_.jpg'
        },
        {
            id: 'item9',
            title: 'Double-Take: Celebrity Twins',
            image: 'https://m.media-amazon.com/images/M/MV5BMzdkYjEyNzQtOTJhMi00YmRjLTkwMTgtM2Y0Y2VmZDc3Y2I3XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX760_CR0,166,760,428_.jpg'
        },
        {
            id: 'item10',
            title: "'Black Panther: Wakanda Forever' and More Comic-Con Posters",
            image: 'https://m.media-amazon.com/images/M/MV5BZGEyNmY1ZjUtMDMxYS00ZDU1LThhYjUtOTkxMzI3YTRlNjIyXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX760_CR0,0,760,428_.jpg'
        },
        {
            id: 'item11',
            title: "Latest Stills: Keanu Reeves in 'John Wick 4'",
            image: 'https://m.media-amazon.com/images/M/MV5BMTA0MDlkMGYtMTEwYS00YTc2LTk2YzMtYWQzZmMxYmUxZmY1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX760_CR0,0,760,428_.jpg'
        }

    ])

    return (
        <div style={{ }}>
            
            <div style={{ display: 'flex',flexWrap:'wrap',justifyContent:'center',width:'100%',overflow:'hidden' }}>
                <div id='abc' style={{width:`${props.widthprop}`,marginRight:'70px',marginTop:'20px'}}>
                    <Slider {...settings}>
                   {
                        data.map((el) => (
                            <div key={el.id} style={{maxwidth:'410px',height:'260px',marginLeft:'20px'}}>
                                <Poster url={el.image}></Poster>
                                <Title>{el.title}</Title>
                            </div>
                        ))
                   }
                   </Slider>
                </div>
                <Sponsor style={{display:`${props.dispayPorp}`}}>

                </Sponsor>
            </div>
        </div>
    )
}

export default FeaturedTodayBanner