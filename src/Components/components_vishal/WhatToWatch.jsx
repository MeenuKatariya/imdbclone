import React from 'react'
import styled from "styled-components"
import {Tabs,Tab} from '@mui/material'
import DataGrid from './DataGrid';
import ListMovies from '../components_vishal/ListMovies';
import EmptyWatchList from '../components_vishal/EmptyWatchList';
import Heading from '../components_vishal/Heading';
const PageElement = styled.div`
    background-color:black;
    min-height:100vh;
    max-width:100%;
    padding:15px 40px;
`;

function TabData(props){
  const {children,value,index,data} = props
  return(
      <div>
          {
              value === index && (
                  <>
                  <p style={{color:'white'}}>{children}</p>
                  {/* <ListMovies data={data}/>                     */}
                  <DataGrid data={data}/>
                  </>
              )
          }
      </div>
  )
}

const WhatToWatch = () => {

  const [Data, setData] = React.useState([])
  const [User, setUser] = React.useState([])

  const [TabValue,setTabValue] = React.useState(0)

    const handelTab = (e,val) => {
        setTabValue(val)
    }

  const GetData = () => {
    fetch(`https://imdb-clone-database.herokuapp.com/movies`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.log(error))
  }

  const GetUser = () => {
    fetch(`https://imdb-clone-database.herokuapp.com/user_profile?email=demo@gmail.com`)
      .then((res) => res.json())
      .then((res) => setUser(res))
      .catch((error) => console.log(error))
  }

  

  React.useEffect(() => {
    // GetTopMovies()
    GetData()
    GetUser()
    // GetInTheaters()
  }, [])



  return (
    <PageElement style={{}}>
      
      <div style={{margin:'20px auto',width:'60%',height:'100px',background: 'url("https://m.media-amazon.com/images/I/618NtVoRZlL.jpg") no-repeat', backgroundSize: 'cover'}}>

      </div>

      <p style={{
        color:'white',
        fontSize:'50px',
        margin:'0'
      }}
        >What to Watch</p>

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
              <Tab label='Watch Guide' />
              <Tab label='Fan Favorites' />
              <Tab label='Top Picks' />
              <Tab label='From Your Watchlist' />
              <Tab label='Most Popular' />
        </Tabs>

        <TabData value={TabValue} index={0} data={Data.slice(0,49)}>included with Prime</TabData>
        <TabData value={TabValue} index={1} data={Data.slice(51,99)}>with subscription</TabData>
        <TabData value={TabValue} index={2} data={Data.slice(101,149)}>go to hotstar.com</TabData>
        <TabData value={TabValue} index={3} >
           {/* { User[0] && User[0].login ? <div style={{ marginTop: '45px' }}>
              
              <Heading heading="From your Watchlist" subheading="Movies and TV shows that you have watchlisted" arrow='white' />
              <ListMovies data={User[0].watchlist} User={User} GetUser={GetUser} />
            </div> :<EmptyWatchList />} */}
            </TabData>
        <TabData value={TabValue} index={4} data={Data.slice(151,299)}>go to jiocinema.com</TabData>
    </div>  

    </PageElement>
  )
}

export {WhatToWatch}