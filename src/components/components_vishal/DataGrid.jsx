import React from 'react'
import styled from "styled-components";
import BookmarkAddSharpIcon from '@mui/icons-material/BookmarkAddSharp';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import Button from '@mui/material/Button';
const Card = styled.div`
    width:185px;
    height:475px;
    // border:1px solid white;
    // box-sizing: border-box;
    border-radius: 5px;
`;

const CardImage = styled.div`
    width:185px;
    height:274px;
    // border:1px solid green;
    background: url("${props => props.url}") no-repeat; 
    background-size: 183px 274px;
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
    margin-top:10px;
    &:hover {
        background-color: #464646;
    }
`;

const P = styled.p`
    cursor:pointer;
    &:hover{
        text-decoration: underline
    }
`;

const Sponsor = styled.div`
    // display:${props => props.dispayPorp};
    width:320px;
    height:270px;
    // border:1px solid white;
    background:url('https://m.media-amazon.com/images/I/5153q2abkdL.jpg');
    background-size:320px 270px;
`;

const DataGrid = ({ data }) => {

    return (
        <>
            <div style={{ display: 'flex', flexWrap: 'Wrap', gap: '25px' }}>
                {
                    data.slice(0, 12).map((el, index) => (
                        <Card key={el.id}>
                            <CardImage url={el.image} >
                                <BookmarkAddSharpIcon sx={{ color: '#000000ad', cursor: 'pointer', fontSize: '70px', margin: '-10px 0px 0px -16px', "&:hover": { color: '#32323285' } }} />
                            </CardImage>
                            <CardContent>
                                <div style={{ display: 'flex', alignItems: 'center', height: '35px' }}>
                                    <StarRoundedIcon sx={{ fontSize: '17px', color: '#fbc02d', marginRight: '3px' }} />
                                    <span style={{ color: 'white', fontWeight: '400' }}>{el.imDbRating}</span>
                                    <StarBorderRoundedIcon sx={{ fontSize: '18px', color: '#5799ef', marginLeft: '25px' }} />
                                </div>
                                <div style={{ height: '30px' }}><P style={{ color: 'white', fontWeight: '400', fontSize: '17px', marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{el.title}</P></div>
                                <div style={{ marginTop: '20px' }}>
                                    <WatchButton>Watch options {index}</WatchButton>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '7px' }}>
                                    <TrailerButton><PlayArrowRoundedIcon sx={{ fontSize: '25px', marginRight: '4px' }} />Trailer &nbsp;</TrailerButton>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                }

            </div>

            <div style={{ width: '100%', backgroundColor: 'black', margin: '50px 0px' }}>

                <h4 style={{ color: 'white' }}>Browse these IMDb collections to find the perfect next movie or TV show to watch</h4>
                <div style={{display:'flex'}}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', width: '68%',height:'110px' }}>
                        <Button variant="outlined" sx={
                            {
                                textTransform: 'none',
                                border: '2px solid white',
                                color: 'white',
                                width: '400px',
                                height: '35px',
                                cursor: 'pointer',
                                fontWeight: '700',
                                margin: '10px 25px 15px 0px',
                                "&:hover": {
                                    border: '2px solid white',
                                    backgroundColor: '#32323285'
                                }
                            }}>Watch Guide</Button>
                        <Button variant="outlined" sx={
                            {
                                textTransform: 'none',
                                border: '2px solid white',
                                color: 'white',
                                width: '400px',
                                height: '35px',
                                cursor: 'pointer',
                                fontWeight: '700',
                                margin: '10px 25px 15px 0px',
                                "&:hover": {
                                    border: '2px solid white',
                                    backgroundColor: '#32323285'
                                }
                            }}>Top Picks</Button>
                        <Button variant="outlined" sx={
                            {
                                textTransform: 'none',
                                border: '2px solid white',
                                color: 'white',
                                width: '400px',
                                height: '35px',
                                cursor: 'pointer',
                                fontWeight: '700',
                                margin: '10px 25px 15px 0px',
                                "&:hover": {
                                    border: '2px solid white',
                                    backgroundColor: '#32323285'
                                }
                            }}>From Your Watchlist</Button>
                        <Button variant="outlined" sx={
                            {
                                textTransform: 'none',
                                border: '2px solid white',
                                color: 'white',
                                width: '400px',
                                height: '35px',
                                cursor: 'pointer',
                                fontWeight: '700',
                                margin: '10px 25px 15px 0px',
                                "&:hover": {
                                    border: '2px solid white',
                                    backgroundColor: '#32323285'
                                }
                            }}>Most Popular</Button>
                    </div>

                    <Sponsor></Sponsor>
                </div>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'Wrap', gap: '25px' }}>
                {
                    data.slice(12).map((el, index) => (
                        <Card key={el.id}>
                            <CardImage url={el.image} >
                                <BookmarkAddSharpIcon sx={{ color: '#000000ad', cursor: 'pointer', fontSize: '70px', margin: '-10px 0px 0px -16px', "&:hover": { color: '#32323285' } }} />
                            </CardImage>
                            <CardContent>
                                <div style={{ display: 'flex', alignItems: 'center', height: '35px' }}>
                                    <StarRoundedIcon sx={{ fontSize: '17px', color: '#fbc02d', marginRight: '3px' }} />
                                    <span style={{ color: 'white', fontWeight: '400' }}>{el.imDbRating}</span>
                                    <StarBorderRoundedIcon sx={{ fontSize: '18px', color: '#5799ef', marginLeft: '25px' }} />
                                </div>
                                <div style={{ height: '30px' }}><P style={{ color: 'white', fontWeight: '400', fontSize: '17px', marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{el.title}</P></div>
                                <div style={{ marginTop: '20px' }}>
                                    <WatchButton>Watch options {index}</WatchButton>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: '7px' }}>
                                    <TrailerButton><PlayArrowRoundedIcon sx={{ fontSize: '25px', marginRight: '4px' }} />Trailer &nbsp;</TrailerButton>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                }

            </div>

        </>
    )
}

export default DataGrid