import React from 'react';
import {Tabs,Tab} from '@mui/material'
import ListMovies from './ListMovies';


function TabData(props){
    const {children,value,index,data} = props
    return(
        <div>
            {
                value === index && (
                    <>
                    <p style={{color:'white'}}>{children}</p>
                    <ListMovies data={data}/>                    
                    </>
                )
            }
        </div>
    )
}

const TabPanel = ({data}) => {
    const [TabValue,setTabValue] = React.useState(0)

    const handelTab = (e,val) => {
        setTabValue(val)
    }
  return (
    <div>
        <Tabs value={TabValue} onChange={handelTab} 
            TabIndicatorProps={{
                sx:{backgroundColor:'#fbc02d',height:'3px'}
            }}
            sx={{
                "& button":{color:'white',fontSize:'14px',fontWeight:'700'},
                "& button:hover":{backgroundColor:'#32323285'},
                "& button.Mui-selected":{color:'white'}
                    }}>
              <Tab label='Prime video' />
              <Tab label='netflix' />
              <Tab label='hotstar' />
              <Tab label='mx player' />
              <Tab label='jiocinema' />
              <Tab label='sonyliv' />
              <Tab label='erosnow' />
              <Tab label='voot' />
        </Tabs>

        <TabData value={TabValue} index={0} data={data.slice(25,50)}></TabData>
        <TabData value={TabValue} index={1} data={data.slice(75,100)}></TabData>
        <TabData value={TabValue} index={2} data={data.slice(125,150)}></TabData>
        <TabData value={TabValue} index={3} data={data.slice(175,200)}></TabData>
        <TabData value={TabValue} index={4} data={data.slice(40,65)}></TabData>
        <TabData value={TabValue} index={5} data={data.slice(115,140)}></TabData>
        <TabData value={TabValue} index={6} data={data.slice(145,170)}></TabData>
        <TabData value={TabValue} index={7} data={data.slice(165,190)}></TabData>
    </div>
  )
}

export default TabPanel