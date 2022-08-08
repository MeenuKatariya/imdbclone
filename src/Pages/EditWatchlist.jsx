
import { Box, Stack, IconButton, Divider, Button, List } from '@mui/material';
import React from 'react';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';
import StarIcon from '@mui/icons-material/Star';

import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { recentlyViewedSuccess, recentlyViewedDelete, watchlistError, watchlistLoad, watchlistSuccess, sortYearDesc, sortYearAsc, sortRuntimeDesc, sortRuntimeAsc,sortImdbRatingAsc,sortImdbRatingDesc, sortDefault } from '../Redux/Watchlist/action';
import {Navbar} from "../components/components_meenu/Navbar"
import {Footer} from "../components/components_meenu/Footer"
export const EditWatchlist = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.watchlist)
    const {error} = useSelector(state => state.watchlist)
    const {watchlist} = useSelector(state => state.watchlist)
    const {recently_viewed} = useSelector(state => state.watchlist)
    const [watchlistLength, setLength] =React.useState(0)  
    const [order, setOrder] =React.useState(true);
    const [sortCategory, setSort] =React.useState("year")
    const login = useSelector(state => state.auth.user)
    const handleRecentlyViewed = () => {
        dispatch(recentlyViewedDelete())
       
        axios({
            method:"PATCH",
            url:`https://imdb-clone-database.herokuapp.com/user_profile/${login.id}`,
            data:{
                recently_viewed : []
            }
          }).then((res)=>{console.log(res)})
          fetchRecentlyViewedData()
        
    }
    const fetchWatchListData = () => {
        dispatch(watchlistLoad());
        axios.get(`https://imdb-clone-database.herokuapp.com/user_profile?id=${login.id}`).then(res => {
            // console.log("first",res.data[0].watchlist)
            const payload = res.data[0].watchlist
            setLength(payload.length)
            console.log("payload",payload)
            dispatch(watchlistSuccess(payload))
        }).catch(err => {
            dispatch(watchlistError());
            console.log(err)
        })
    }

    const fetchRecentlyViewedData = () => {
     
        axios.get(`https://imdb-clone-database.herokuapp.com/user_profile?id=${login.id}`).then(res => {
            console.log("Hello",res.data[0].recently_viewed)
            const payload = res.data[0].recently_viewed
            dispatch(recentlyViewedSuccess(payload))
        }).catch(err => {
            console.log(err)
        })
    }

    const handleSort = () => {
        console.log("Sorting ")

        if(order){

            if(sortCategory === "year") {
                dispatch(sortYearAsc())
            }
            else if(sortCategory === "imdb_ratings"){
                dispatch(sortImdbRatingAsc())
            }
            else if(sortCategory === "runtime"){
                dispatch(sortRuntimeAsc())
            }
            else{
              dispatch(sortDefault())
            }
        }
        else{

            if(sortCategory === "year") {
                dispatch(sortYearDesc())
            }
            else if(sortCategory === "imdb_ratings"){
                dispatch(sortImdbRatingDesc())
            }
            else if(sortCategory === "runtime"){
                dispatch(sortRuntimeDesc())
            }
            else{
              dispatch(sortDefault())
            }
        }

    }


    React.useEffect(() => {
        fetchWatchListData()
        fetchRecentlyViewedData()
        // eslint-disable-next-line
    }, [])
   
    React.useEffect(() => {
        handleSort()
    }, [order,sortCategory])

    const navigate = useNavigate()
    return (
        <div>
            <Navbar/>
            <Box sx={{ marginTop: "64px", backgroundColor: "#E3E2DD", width: "100%", display: "flex", justifyContent: "center" }}>

                <Box sx={{ backgroundColor: "#EEEEEE", height: "100%", width: "1010px", display: "flex", flexDirection: "column" }}>
                    {/* -----------------------------------Ad Poster----------------------------- */}
                    <Box sx={{ backgroundColor: "white", display: "flex", justifyContent: "center" }}>
                        <img src="https://m.media-amazon.com/images/I/71id-Plo6eL.jpg" alt="sponsered_Ads" style={{ height: "auto", width: "97%" }} />
                    </Box>
                    <Divider />
                    {/* -----------------------------------Main Watch list Container----------------------------- */}
                    <Box sx={{ backgroundColor: "#EEEEEE", height: "100%", width: "100%", display: "flex" }}>
                        {/* -----------------------------------(Left) Watch list Container----------------------------- */}
                        <Box sx={{ backgroundColor: "#EEEEEE", height: "100%", width: "67%" }}>
                            {/* -----------------------------------Container 1 -(Your list & Settings)----------------------------- */}
                            <Box padding={"2px 20px"} backgroundColor={"#DFDFDF"}>
                                <Stack
                                    direction="row"
                                    justifyContent="flex-end"
                                    alignItems="center" height={"55px"} spacing={"10px"}
                                >      
                                  <Button variant='text' sx={{fontSize: "13px", textTransform: "none"}} >
                                           Settings
                                        </Button>                            
                                   <Button variant='contained' sx={{boxShadow: 'none'}} onClick={() => navigate("/watchlist")} >
                                            Done
                                        </Button>                                    
                                </Stack>

                            </Box>
                            <Divider />
                                <Box sx={{ color: "#333333"}}>
                                    <p style={{
                                            fontSize:"20px", margin:"60px 0px 9px 20px", fontFamily:"arial,sans-serif", fontWeight: "500"
                                    }}>Your Watchlist</p>

                                </Box>
                              
                            <Divider />
                            {/* -----------------------------------Container 2 -(Sorting and filtering)----------------------------- */}
                            <Box padding={"2px 20px"}>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <p style={{ fontSize: "12px", color: "#525252" }}>{watchlistLength} Titles</p>
                                    <Stack direction="row"
                                        alignItems="center"
                                        spacing={1}
                                    >
                                        <p style={{ fontSize: "12px", color: "#525252" }}>Sort by:</p>
                                        <select defaultValue={"list_order"} onChange={(e) => setSort(e.target.value)} style={{
                                            backgroundColor: "#f8f8f8",
                                            border: "1px solid #cccccc",
                                            borderRadius: "3px",
                                            height: "24px",
                                            padding: "2px 10px",
                                            boxShadow: "none",
                                            color: "#5a5a5a",
                                            outline: "none"
                                        }}>
                                            <option value="list_order">List Order</option>
                                            <option value="alphabetical">Alphabetical</option>
                                            <option value="imdb_ratings">IMDb Ratings</option>
                                            <option value="popularity">Popularity</option>
                                            <option value="your_ratings">Your Rating</option>
                                            <option value="number_of_ratings">Number of Ratings</option>
                                            <option value="year">Release Date</option>
                                            <option value="runtime">Runtime</option>
                                            <option value="date_added">Date Added</option>
                                        </select>
                                        <IconButton onClick={() => {setOrder(prev => !prev);console.log(order)}} >
                                            <NorthIcon sx={{ fontSize: "15px" }} color={order? "disabled" :"action" }/>
                                            <SouthIcon sx={{ fontSize: "15px" }} color={order? "action" : "disabled"}/>
                                        </IconButton>                                   
                                    </Stack>
                                </Stack>

                            </Box>
                            <Divider />
                            {/* ------------------------------------Delete - Move - Copy---------------------------------------- */}
                            
                            {/* -----------------------------------Container 3 -(Movie List Display)----------------------------- */}
                            <Box backgroundColor={"#F8F8F8"}>
                                {watchlistLength === 0 ?
                                    <Box sx={{ padding: "80px 30px 300px 30px" }}>

                                        <Stack direction="column" spacing={0.5} justifyContent="center"
                                            alignItems="center" textAlign="center">
                                            <BookmarkAddIcon
                                                color="disabled" sx={{ fontSize: 130 }} />
                                            <p style={{ fontSize: "18px", margin: "25px", color: "#333333" }}>Your Watchlist is empty</p>
                                            <p style={{ color: "#666666" }}>Add movies and shows to your Watchlist to keep track of what you want to watch.</p>
                                            <Link to="/" style={{ fontSize: "14px", textDecoration: "none" }}>Browse Popular Movies</Link>
                                            <Link to="/" style={{ fontSize: "14px", textDecoration: "none" }}>Browse Popular TV Shows</Link>
                                        </Stack>

                                    </Box>
                                    : <Box>
                                        {loading ? <h1 style={{backgroundColor: "#EEEEEE" , padding: "30px"}}>Loading...</h1> : error ? <h1>Something Went Wrong...</h1> :
                                            <Box padding={"10px"} >
                                                {watchlist.map((e,i) => {
                                                    return (
                                                       <Box margin={"10px"}>
                                                        {<>
                                                        <Stack direction="row" alignItems={"center"}>
                                                            <input type="checkbox" style={{height: "20px", width: "20px", border: "1px solid #a7a7a7",}}/>
                                                            <input type="text" value={i+1} style={{marginLeft: "10px",padding: "4px", maxHeight: "23px", width: "45px", fontSize: "12px"}}/>
                                                            <img src={e.image} alt="poster" style={{ maxHeight: "80px", width: "40px", marginRight: "8px", marginLeft: "15px" }} />
                                                            <List sx={{padding:"0px"}} spacing={1} width={"385px!important"}>
                                                                <Link to="/" style={{textDecoration:"none", color:"#136cb2"}}><p style={{paddingBottom:"7px",fontWeight:"normal", color:"#136cb2", margin: "0px",marginTop: "4px", fontSize:"13px", width: "383px"}}>{e.title}</p></Link>

                                                                <Stack
                                                                    direction="row"
                                                                    spacing={13}
                                                                    justifyContents={"space-between"} 
                                                                >
                                                                      <Stack
                                                                    direction="row"
                                                                    divider={<Divider orientation="vertical" flexItem />}
                                                                    spacing={1} padding={"0px"}
                                                                >
                                                                    <span><p style={{color:"black", margin:"0px", fontSize:"12px", position: "relative", top:"3px", paddingBottom:"5px"}}>{e.year}</p></span>
                                                                    <span><p style={{color:"black", margin:"0px", fontSize:"12px", paddingBottom:"5px", position: "relative", top:"3px"}}>{e.type}</p></span>
                                                                </Stack>
                                                                   <span><p style={{ color: "black", margin: "0px", fontSize: "12px", paddingBottom: "5px" }}><StarIcon sx={{fontSize: "15px", position: "relative", top:"3px", color: "#D4B557"}}/>{e.imDbRating}</p>
                                                                   
                                                                   </span>
                                                                   <span><p style={{ color: "grey", margin: "0px", fontSize: "13px", paddingBottom: "5px" }}><StarBorderOutlinedIcon sx={{fontSize: "17px", position: "relative", top:"3px", color: "grey!important"}}/>Rate</p></span>
                                                                
                                                                </Stack>
                                                              
                                                                <input type="text" placeholder="Add a note" style={{border: "none", backgroundColor: "#F8F8F8", borderBottom: "0.5px solid #a7a7a7a9", width: "100%",color: '#a7a7a7a9', paddingBottom: "5px", fontSixe: "12px"}}/>
                                                                
                                                            </List>
                                                            <p style={{fontSize: "13px", margin: "auto 5px auto 30px", textAlign: "center", color:"#363636"}}>Added <br/> 08 Aug 2022</p>
                                                        </Stack></> 
                                                         }
                                                       
                                                        </Box>
                                                    )

                                                })}
                                            </Box>
                                        }
                                    </Box>}
                            </Box>
                        </Box>
                        {/* -----------------------------------(Right) Create List Options----------------------------- */}
                        <Box sx={{ backgroundColor: "#EEEEEE", minHeight: "500px", width: "33%", borderLeft: "3px solid #999999" }}>
                            <Box sx={{ padding: "20px" }}>
                                {/* -----------------------------------Discover whats trending image----------------------------- */}
                                <Stack spacing={1}>
                                    <Link to="/"><img src="https://m.media-amazon.com/images/I/51OShsxVmWL.jpg" alt="discover_new" style={{
                                        width: "300px",
                                        aspectRatio: "auto 300 / 250",
                                        height: "250px"
                                    }} /></Link>
                                    {/* -----------------------------------Create new list options container----------------------------- */}
                                    <Stack spacing={2.5}>
                                        <Link to="/" style={{ textDecoration: "none" }}><p style={{ fontSize: "18px", color: "#333333", margin: "0px" }}>Create a new list</p></Link>
                                        <p style={{ fontSize: "13px" }}>List your movie, TV & celebrity picks.</p>
                                        <Link to="/" style={{ fontSize: "13px", color: "#5A81C8", textDecoration: "none" }}>Create a new list  <KeyboardDoubleArrowRightIcon color="action" fontSize="40" /></Link>
                                        {/* -----------------------------------Feedbacks----------------------------- */}
                                        <Divider />

                                        <Link to="/" style={{ fontSize: "13px", color: "#5A81C8", textDecoration: "none" }}><span style={{ color: "black" }}><b>Feedback?</b></span> Tell us what you think about this feature</Link>

                                    </Stack>
                                </Stack>
                            </Box>
                        </Box>
                    </Box>
                    {/* -----------------------------------Recently Viewed Main Container----------------------------- */}
                    <Divider />
                    <Box p={1} height={"200px"}>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={1}
                        >
                            <p style={{ fontSize: "18px", color: "#5a5a5a", margin: "0px 10px" }}>Recently Viewed</p>
                            <Button variant="text" onClick={() => handleRecentlyViewed()} sx={{ fontSize: "10px", margin: "0px 10px" }}>Clear history</Button>
                        </Stack>

                        {<Stack 
                            direction="row"
                            alignItems="center"
                            spacing={1}>
                            {recently_viewed ? 
                        
                            <Box padding={"10px"}>
                                {recently_viewed.map((e) => {
                                    return (
                                        <img src={e.image} alt="poster" style={{ height: "142px", marginRight: "8px", marginBottom: "20px" }} />
                                    )
                                })
                                }
                            </Box> : <></>}
                        </Stack>}
                    </Box>
                </Box>
            </Box>
            <Footer/>
        </div>
    );
}

