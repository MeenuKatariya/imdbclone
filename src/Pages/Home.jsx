import React from 'react'
import styled from "styled-components"
import Banner from '../Components/components_vishal/Banner';
import TopPicks from '../Components/components_vishal/TopPicks';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import FeaturedTodayBanner from '../Components/components_vishal/FeaturedTodayBanner';
import EmptyWatchList from '../Components/components_vishal/EmptyWatchList';
import Heading from '../Components/components_vishal/Heading';
import ListMovies from '../Components/components_vishal/ListMovies';
import Button from '@mui/material/Button';
import IMDBOriginals from '../Components/components_vishal/IMDBOriginals';
import TabPanel from '../Components/components_vishal/TabPanel';
import BoxOffice from '../Components/components_vishal/BoxOffice';
import { Link } from 'react-router-dom';
import { Navbar } from "../Components/components_meenu/Navbar";
import { Footer } from "../Components/components_meenu/Footer";
const HomeElement = styled.div`
    background-color:black;
    height:auto;
    max-width:100%;
    padding:15px 40px;
`;
const Home = () => {
  const [TopMovies, setTopMovies] = React.useState([])
  const [InTheaters, setInTheaters] = React.useState([])
  const [PrimeVideo, setPrimeVideo] = React.useState([])
  const [Watchlist, setWatchlist] = React.useState([])
  const d = new Date().toDateString();
  const GetTopMovies = () => {
    fetch(`http://localhost:8080/movies?`)
      .then((res) => res.json())
      .then((res) => setTopMovies(res))
      .catch((error) => console.log(error))
  }
  const GetInTheaters = () => {
    fetch(`http://localhost:8080/theaters`)
      .then((res) => res.json())
      .then((res) => setInTheaters(res))
      .catch((error) => console.log(error))
  }
  // const GetWatchlist = () => {
  //   fetch(`http://localhost:3001/user_profile?email=demo@gmail.com`)
  //     .then((res) => res.json())
  //     .then((res) => setWatchlist(res))
  //     .catch((error) => console.log(error))
  // }
  React.useEffect(() => {
    GetTopMovies()
    // GetWatchlist()
    GetInTheaters()
  }, [])
  console.log('movies', TopMovies.length, TopMovies)
  // console.log('Watchlist', Watchlist)
  return (

  
    <HomeElement>
    <Navbar/>
      <Banner />
      <div style={{  marginTop: '55px',height: '50px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1 style={{ color: "#F5C518" }}>Featured today</h1>
        </div>
      <FeaturedTodayBanner dispayPorp="block" widthprop= "846px" slidetoshow={2}/>
      <div style={{ marginTop: '35px' }}>
        <div style={{ height: '50px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <h1 style={{ color: "#F5C518" }}>What To Watch</h1>
          <p style={{ color: '#5799EF', textAlign: 'center', fontWeight: '700' }}>Get more recommendations <ChevronRightRoundedIcon /></p>
        </div>
      </div>
      {/* <TopPicks data={TopMovies.slice(0, 31)} /> */}
     <TopPicks data={TopMovies.slice(0, 31)} />
      <EmptyWatchList />
      {/* {
              Watchlist[0].watchlist.length === 0 ? console.log('HERE TRUE',true):console.log('HERE FALSE',false,Watchlist[0].watchlist)
          } */}
      <Heading heading="Fan favorites" subheading="This week's top TV and movies" arrow='white' />
      <ListMovies data={TopMovies.slice(51, 80)} />
      <Heading heading="More to watch" subheading="IMDb helps you select the perfect next show or movie to watch." arrow='black' />
      <Button variant="outlined" sx={
        {
          textTransform: 'none',
          border: '2px solid white',
          color: 'white',
          width: '300px',
          height: '35px',
          cursor: 'pointer',
          fontWeight: '700',
          marginRight: '25px',
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
          width: '300px',
          height: '35px',
          cursor: 'pointer',
          fontWeight: '700',
          "&:hover": {
            border: '2px solid white',
            backgroundColor: '#32323285'
          }
        }}>Most Popular</Button>
      <div style={{ height: '50px', width: '100%', marginTop: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ color: "#F5C518" }}>Exclusive videos</h1>
      </div>
      <Heading heading="IMDb Originals" subheading="Celebrity interviews, trending entertainment stories, and expert analysis" arrow='black' />
      <IMDBOriginals />
      <div style={{ height: '50px', width: '100%', marginTop: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ color: "#F5C518" }}>Explore what’s streaming</h1>
      </div>
      <TabPanel data={TopMovies} />
      <div style={{ height: '50px', width: '100%', marginTop: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ color: "#F5C518" }}>Explore Movies & TV shows</h1>
      </div>
      <Heading heading="In theaters" subheading="Showtimes near you" arrow='white' />
      <ListMovies data={InTheaters} />
      <Heading heading="Top box office (US)" subheading="Weekend of July 29-31" arrow='white' />
      <BoxOffice />
      <Heading heading="Coming soon to theaters (US)" subheading="Trailers for upcoming releases" arrow='white' />
      <IMDBOriginals />
      <div style={{ height: '50px', width: '100%', marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h1 style={{ color: "#F5C518" }}>More to explore</h1>
      </div>
      <Heading heading="Editor's picks" subheading="" arrow='black' />
      <FeaturedTodayBanner dispayPorp="none" widthprop= "92%" slidetoshow={3}/>
      <Heading heading="Born today" subheading={`People born on ${d.slice(4,-5)}`} arrow='white' />
      <TopPicks data={TopMovies} />
      {/* <Footer/> */}
    </HomeElement>
    
   
  )
}
export default Home