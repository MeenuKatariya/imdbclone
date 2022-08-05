import React from 'react'
import styled from "styled-components";
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import BookmarkAddSharpIcon from '@mui/icons-material/BookmarkAddSharp';

const BrowseButton = styled.button`
    background-color: #2f2f2f;
    color: #5799ef;
    font-size: 14px;
    font-weight:700;
    width: 225px;
    padding: 8px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    text-align: center;
    &:hover{
        background-color:#464646;
    }
`;

const EmptyWatchList = () => {
    return (
        <div style={{ marginTop: '45px' }}>
            <div style={{ marginTop: '25px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '5px', height: '30px', backgroundColor: '#f5c518', borderRadius: '3px' }}></div>
                    <div style={{ color: 'white', fontSize: '25px', fontWeight: '700', textAlign: 'center', marginLeft: '10px', cursor: 'pointer' }}> From your Watchlist  </div>
                    <KeyboardArrowRightRoundedIcon sx={{ fontSize: '40px', color: 'white', marginTop: '5px', "&:hover": { color: '#fbc02d' }, cursor: 'pointer' }} />
                </div>
            </div>

            <div style={{ width: '100%', height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <BookmarkAddSharpIcon sx={{ color: '#2f2f2f', fontSize: '60px', margin: '-10px 0px 0px -16px' }} />
                <h4 style={{ color: 'white', fontWeight: '600', fontSize: '18px', wordSpacing: '2px', margin: '5px 5px 0px' }}>Your watchlist is empty</h4>
                <h4 style={{ color: 'white', fontWeight: '300', fontSize: '18px', marginTop: '0px' }}>Save shows and movies to keep track of what you want to watch.</h4>
                <BrowseButton>Browse popular movies</BrowseButton>
            </div>
        </div>
    )
}

export default EmptyWatchList