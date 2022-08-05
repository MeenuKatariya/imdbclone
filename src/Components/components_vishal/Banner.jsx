import React from 'react'
import styled from "styled-components"
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import BookmarkAddSharpIcon from '@mui/icons-material/BookmarkAddSharp';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import { grey } from '@mui/material/colors';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { keyframes } from 'styled-components';

const BannerDisplay = styled.div`
    width:100%;
    // border:1px solid white;
    display:flex;
    height:540px;
`;

const BannerDisplayLeft = styled.div`
    height:100%;
    // border:1px solid red;
    width:66%;
    position:relative;
    overflow:hidden;
    @media (max-width: 1000px) {
        width:100%;
        overflow:hidden;
    }
`;

const BannerDisplayRight = styled.div`
    height:100%;
    // border:1px solid green;
    width:34%;
    padding-left:10px;
    box-sizing:border-box;
    @media (max-width: 1000px) {
        display:none;
    }
`;



const Poster = styled.div`
    height:450px;
    width:100%;
    background: linear-gradient(to bottom, transparent, black 110%),
    url("${props => props.url}") no-repeat center;
    background-size: cover;
    cursor:pointer;
`;


const PosterImg = styled.img`
    height:480px;
    width:100%;
    
`;

const BannerImgDetails = styled.div`
    height: auto;
    width: 100%;
    // border: 1px solid blue;
    position:absolute;
    bottom:0px;
    padding:0px 0px 0px 15px;
    display:flex;
    cursor:pointer;
`;

const BannerImg = styled.div`
    height:250px;
    width:160px;
    background: url("${props => props.url}") no-repeat center;
    background-size: cover;
    // border:1px solid white;
    cursor:default
`;

const LeftArrow = styled.div`
    position:absolute;
    left:0;
    top:150px;
    width:48px;
    height:65px;
    border:1px solid white;
    border-radius:4px;
    background-color:#00000049;
    padding-top:7px;
    box-sizing:border-box;
    cursor:pointer
`;

const RightArrow = styled.div`
    position:absolute;
    width:48px;
    height:65px;
    border:1px solid white;
    border-radius:4px;
    right:0;
    top:150px;
    background-color:#00000049;
    padding-top:7px;
    box-sizing:border-box;
    cursor:pointer;
`;

const BrowseTrailers = styled.h3`
    color:white;
    margin-top:3px;
    font-size:20px;
    &:hover{color: #fbc02d }
`;

const UpNextBanner = styled.div`
    display:flex;
    height:125px;
    // border:1px solid white;
    padding:15px 15px 10px 15px;
`;

const NextImage = styled.div`
    width:90px;
    height:130px;
    // border:1px solid red;
    background:url("${props => props.url}");
    background-size: 100%;
    cursor:default
`;
const NextTitle = styled.div`
    margin-left:10px;
    cursor:pointer;
`;



const Banner = () => {

    const banner = [
        {
            id: 1,
            poster: "https://m.media-amazon.com/images/M/MV5BMzM1NGJiZDEtMWY0MC00MzVkLWJiNzItODY0OTgzZjJmOGI5XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._CR91,328,2113,1189_QL75_UX1000_CR0,0,1000,563_.jpg",
            banner: "https://m.media-amazon.com/images/M/MV5BNDk2YTA1MGYtMGNjMi00YTJlLWI1YjItMjBjOGJlZGIwZmYzXkEyXkFqcGdeQXVyODA0MjgyNzM@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            title: "Ana da Armas Transforms Into Marilyn Monroe",
            watch_time: "1:54",
            info: "Watch the New 'Blonde' Trailer"
        },
        {
            id: 2,
            poster: "https://m.media-amazon.com/images/M/MV5BOTFjNzIxZWYtZGMxYy00NDhhLTgwMzAtY2E5MTFiY2RlMDFlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._CR462,329,3085,1735_QL75_UY563_CR0,0,1000,563_.jpg",
            banner: "https://m.media-amazon.com/images/M/MV5BN2JjNjIwNDgtNTgxNy00OTViLTk0YWUtMTI0OWYwZWNmMDJmXkEyXkFqcGdeQXVyNDYzNjU3ODM@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            title: "'Ant-Man Quantumania' Stars Share Paul Rudd Secrets",
            watch_time: "2:25",
            info: "Surprising Facts About the MCU Star"
        },
        {
            id: 3,
            poster: "https://m.media-amazon.com/images/M/MV5BYTZmOTE2MGQtMzg5NC00OGUwLTgyYTctMDQ1YTM5YTU3YTdjXkEyXkFqcGdeQWRvb2xpbmhk._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg",
            banner: "https://m.media-amazon.com/images/M/MV5BNTBmNjQ5MTUtMzMxMi00NTk1LWExYjEtMzNkZGE4MTFjNzlkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            title: "The 'Shazam! Fury of the Gods' Trailer Is Here",
            watch_time: "2:25",
            info: "Featuring the Super Shazam Fam"
        },
        {
            id: 4,
            poster: "https://m.media-amazon.com/images/M/MV5BZGJkOTVkY2ItNDIzMS00ZjE4LThkMGQtMDg1OWMyYjQ3OTRiXkEyXkFqcGdeQWplZmZscA@@._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg",
            banner: "https://m.media-amazon.com/images/M/MV5BN2JjNjIwNDgtNTgxNy00OTViLTk0YWUtMTI0OWYwZWNmMDJmXkEyXkFqcGdeQXVyNDYzNjU3ODM@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            title: "'Guardians Vol. 3' Cast Talk Gamora and Spacedogs",
            watch_time: "1:58",
            info: "What's Next in the Galaxy?"
        },
        {
            id: 5,
            poster: "https://m.media-amazon.com/images/M/MV5BZDY5NTQ3NzgtNzNhZC00ZWY2LThjYWEtMzMwMmNmODA3YjQzXkEyXkFqcGdeQWFkcmllY2xh._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg",
            banner: "https://m.media-amazon.com/images/M/MV5BZDI2MjFjYzItODhlNC00NDkxLTljNGItYjU3NjE4ZGNmZmE1XkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            title: "A League of Their Own",
            watch_time: "1:46",
            info: "Watch the Trailer"
        },
        {
            id: 6,
            poster: "https://m.media-amazon.com/images/M/MV5BOTY1NWFlNmUtOWY3Ni00MTAxLTk1YjUtOTZjYTg5YTVlZmY2XkEyXkFqcGdeQXJoYW5uYWg@._V1_QL75_UX1000_CR0,0,1000,563_.jpg",
            banner: "https://m.media-amazon.com/images/M/MV5BMDA3MmM4MDEtM2YwYS00NzliLWFlNzctYTBmZGE1NjFiM2U1XkEyXkFqcGdeQXVyODQ4Mjc2NDM@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            title: "Pretty Little Liars: Original Sin Cast Answer Burning Questions",
            watch_time: "2:57",
            info: "Get Into the PLL Spin-Off Series"
        },
        {
            id: 7,
            poster: "https://m.media-amazon.com/images/M/MV5BOWEwNDRmMzQtYWQzZC00MGRjLWEyYzMtZGQwNWRkNTNmNTQ4XkEyXkFqcGdeQWRvb2xpbmhk._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg",
            banner: "https://m.media-amazon.com/images/M/MV5BOTI1MDA5OTEtNWExMi00NGYwLThmMjUtMDhmNDQ4YTg1NzZlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_QL75_UY414_CR16,0,280,414_.jpg",
            title: "'John Wick 4' Sneak Peek",
            watch_time: "1:06",
            info: "Watch the Comic-Con Trailer"
        },
        {
            id: 8,
            poster: "https://m.media-amazon.com/images/M/MV5BNmY1NjQ5YjUtNGNkMy00NmVlLWE1ZjEtMzU3ZTk5N2ZmMTcxXkEyXkFqcGdeQWFybm8@._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg",
            banner: "https://m.media-amazon.com/images/M/MV5BNjMxZmI4NzEtYWNjOS00M2MwLWE4YTctMjk1YWEzOTY1NjkwXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            title: "'Black Panther: Wakanda Forever'",
            watch_time: "2:19",
            info: "Watch the Comic-Con Trailer"
        },
        {
            id: 9,
            poster: "https://m.media-amazon.com/images/M/MV5BMzVjYjhjZDItOWMzZS00ZmJhLTlkNWYtNzRlODg5NDQ5MDI5XkEyXkFqcGdeQWFybm8@._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg",
            banner: "https://m.media-amazon.com/images/M/MV5BY2M2MjMxNjUtZWU2MS00NTIwLWE0ZDEtOTY3NzY5NGZmY2RmXkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            title: "Sylvester Stallone Is 'Samaritan'",
            watch_time: "2:26",
            info: "Watch the First Trailer"
        },
        {
            id: 10,
            poster: "https://m.media-amazon.com/images/M/MV5BNTAzYzk0MzktY2Y2MC00YWIwLTllODktYWYwNjI3ZjY3NGY5XkEyXkFqcGdeQWpnYW1i._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg",
            banner: "https://m.media-amazon.com/images/M/MV5BN2ZmYTlhNmMtODQ0OS00YWNiLWI1MmMtNzkwYWMzOGM4YWQxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            title: "'Black Adam' Meets the Justice Society of America",
            watch_time: "1:14",
            info: "Watch the Comic-Con Sneak Peek"
        },
        {
            id: 11,
            poster: "https://m.media-amazon.com/images/M/MV5BYTZhOTEzYjgtNzljMy00M2IyLThkZmMtNjdiN2Y5MDEwMWE5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg",
            banner: "https://m.media-amazon.com/images/M/MV5BN2I3NjgyNDUtYWY1Mi00YTJiLThlNmQtNGU3Y2MxOTNmYTY3XkEyXkFqcGdeQXVyNzY1ODU1OTk@._V1_QL75_UX280_CR0,0,280,414_.jpg",
            title: "All About the Marvel Cinematic Universe: Phase 5",
            watch_time: "1:55",
            info: "Sequels, Spin-Offs, New Series, and More"
        }
    ]

    const [PosterData, setPosterData] = React.useState([]);
    const [Count, setCount] = React.useState(0)
    const [temp1, setTemp1] = React.useState(1)
    const [temp2, setTemp2] = React.useState(2)
    const [temp3, setTemp3] = React.useState(3)

    const GetPoster = () => {
        fetch(`http://localhost:3001/banner`)
            .then((res) => res.json())
            .then((res) => setPosterData(res))
            .catch((error) => console.log(error))
    }

     React.useEffect(() => {
        GetPoster()
    }, [])

    // console.log(PosterData)

    const NextSlide = () => {
        setCount(Count === PosterData.length - 1 ? 0 : Count + 1)
        setTemp1(temp1 === PosterData.length - 1 ? 0 : temp1 + 1)
        setTemp2(temp2 === PosterData.length - 1 ? 0 : temp2 + 1)
        setTemp3(temp3 === PosterData.length - 1 ? 0 : temp3 + 1)
    }

    const PrevSlide = () => {
        setCount(Count === 0 ? PosterData.length - 1 : Count - 1)
        setTemp1(temp1 === 0 ? PosterData.length - 1 : temp1 - 1)
        setTemp2(temp2 === 0 ? PosterData.length - 1 : temp2 - 1)
        setTemp3(temp3 === 0 ? PosterData.length - 1 : temp3 - 1)
    }


    if (!Array.isArray(PosterData) || PosterData.length <= 0) {
        return null
    }

    console.log(Count)
    return (
        <BannerDisplay>
            <BannerDisplayLeft>
                <LeftArrow onClick={PrevSlide}><KeyboardArrowLeftRoundedIcon sx={{ color: 'white', fontSize: '50px', fontWeight: '900',"&:hover":{color: '#fbc02d '} }} /></LeftArrow>
                <RightArrow onClick={NextSlide}><KeyboardArrowRightRoundedIcon sx={{ color: 'white', fontSize: '50px', fontWeight: '900',"&:hover":{color: '#fbc02d '} }} /></RightArrow>
                {
                    PosterData.map((slide, index) => {
                        return (
                            <div key={slide.id} style={{}} >
                                {index === Count && (
                                    <>
                                        <Poster url={slide.poster}></Poster>
                                        <BannerImgDetails>
                                            <BannerImg url={slide.banner}>
                                                <BookmarkAddSharpIcon sx={{ color: '#000000ad', cursor: 'pointer', fontSize: '70px', margin: '-10px 0px 0px -16px', "&:hover": { color: '#32323285' } }} />
                                            </BannerImg>

                                            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                                                <div style={{ marginBottom: '30px', marginRight: '5px' }}><PlayCircleOutlinedIcon sx={{ color: grey[50], fontSize: '90px', "&:hover": { color: '#fbc02d' } }} /></div>
                                                <div style={{ color: 'white', textAlign: 'left', width: '515px' }}>
                                                    <p style={{ fontSize: '35px', wordSpacing: '-2px', lineHeight: '39px', marginBottom: '8px' }}>{slide.title}</p>
                                                    <p style={{ color: '#adadad', marginTop: '0px', fontSize: '21px', fontWeight: '500', marginBottom: '0px' }}>{slide.info}</p>
                                                </div>
                                                <div style={{ color: '#adadad', fontSize: '21px', fontWeight: '500', marginBottom: '22px' }}><p>{slide.watch_time}</p></div>
                                            </div>
                                        </BannerImgDetails>
                                    </>
                                )}
                            </div>
                        )
                    })
                }
            </BannerDisplayLeft>

            <BannerDisplayRight>

                <h3 style={{ color: '#fbc02d', marginTop: '3px', fontSize: '20px' }}>Up next</h3>
                <div style={{ width: '100%', marginTop: '0px' }}>
                    <UpNextBanner style={{ background: 'linear-gradient(to bottom, #2C3539 , black )' }}>
                        <NextImage url={PosterData[temp1].banner}></NextImage>
                        <NextTitle>
                            <div style={{ display: 'flex' }}><PlayCircleOutlinedIcon sx={{ color: grey[50], fontSize: '40px', "&:hover": { color: '#fbc02d' } }} />
                                <p style={{ color: '#adadad', fontSize: '15px', margin: '15px 0px 0px 10px' }}>{PosterData[temp1].watch_time}</p>
                            </div>
                            <div style={{ width: '280px' }}>
                                <p style={{ fontSize: '17px', color: 'white', marginTop: '5px', marginBottom: '0px' }}>{PosterData[temp1].title}</p>
                                <p style={{ color: '#adadad', marginTop: '3px', fontSize: '15px', marginBottom: '0px' }}>{PosterData[temp1].info}</p>
                            </div>
                        </NextTitle>
                    </UpNextBanner>

                    <UpNextBanner>
                        <NextImage url={PosterData[temp2].banner}></NextImage>
                        <NextTitle>
                            <div style={{ display: 'flex' }}><PlayCircleOutlinedIcon sx={{ color: grey[50], fontSize: '40px', "&:hover": { color: '#fbc02d' } }} />
                                <p style={{ color: '#adadad', fontSize: '15px', margin: '15px 0px 0px 10px' }}>{PosterData[temp2].watch_time}</p>
                            </div>
                            <div style={{ width: '280px' }}>
                                <p style={{ fontSize: '17px', color: 'white', marginTop: '5px', marginBottom: '0px' }}>{PosterData[temp2].title}</p>
                                <p style={{ color: '#adadad', marginTop: '3px', fontSize: '15px', marginBottom: '0px' }}>{PosterData[temp2].info}</p>
                            </div>
                        </NextTitle>
                    </UpNextBanner>

                    <UpNextBanner>
                        <NextImage url={PosterData[temp3].banner}></NextImage>
                        <NextTitle>
                            <div style={{ display: 'flex' }}><PlayCircleOutlinedIcon sx={{ color: grey[50], fontSize: '40px', "&:hover": { color: '#fbc02d' } }} />
                                <p style={{ color: '#adadad', fontSize: '15px', margin: '15px 0px 0px 10px' }}>{PosterData[temp3].watch_time}</p>
                            </div>
                            <div style={{ width: '280px' }}>
                                <p style={{ fontSize: '17px', color: 'white', marginTop: '5px', marginBottom: '0px' }}>{PosterData[temp3].title}</p>
                                <p style={{ color: '#adadad', marginTop: '3px', fontSize: '15px', marginBottom: '0px' }}>{PosterData[temp3].info}</p>
                            </div>
                        </NextTitle>
                    </UpNextBanner>



                </div>

                <BrowseTrailers style={{ width: '100%' }}>Browse trailers <ChevronRightRoundedIcon sx={{ verticalAlign: 'bottom' }} /> </BrowseTrailers>

            </BannerDisplayRight>
        </BannerDisplay>
    )
}

export default Banner