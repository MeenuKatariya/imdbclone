import React from 'react';
import styled from "styled-components";
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';

const Heading = ({heading,subheading,arrow}) => {
  return (
    <div style={{ marginTop: '35px' }}>
        <div style={{ marginTop: '25px', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ width: '5px', height: '30px', backgroundColor: '#f5c518', borderRadius: '3px' }}></div>
                    <div style={{ color: 'white', fontSize: '25px', fontWeight: '700', textAlign: 'center', marginLeft: '10px',cursor:'pointer' }}> {heading}  </div>   
                    <KeyboardArrowRightRoundedIcon sx={{ fontSize: '40px', color: arrow, marginTop: '5px',"&:hover":{color:'#fbc02d'},cursor:'pointer' }} />
                </div>
                <span style={{ color: '#adadad', fontWeight: '500' }}>{subheading}</span>
            </div>
    </div>
  )
}

export default Heading