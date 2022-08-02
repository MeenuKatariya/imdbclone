
import { Box, Stack, IconButton, Divider, Button, List } from '@mui/material';
import React from 'react';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import ShareIcon from '@mui/icons-material/Share';
import LockIcon from '@mui/icons-material/Lock';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ViewListIcon from '@mui/icons-material/ViewList';
import AppsIcon from '@mui/icons-material/Apps';
import SouthIcon from '@mui/icons-material/South';
import NorthIcon from '@mui/icons-material/North';
import { Link } from 'react-router-dom';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { recentlyViewedSuccess, watchlistError, watchlistLoad, watchlistSuccess } from '../Redux/Watchlist/action';
export const Watchlist = () => {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.watchlist.loading)
    const error = useSelector(state => state.watchlist.error)
    const watchlist = useSelector(state => state.watchlist.watchlist)
    const recently_viewed = useSelector(state => state.watchlist.recently_viewed)
    const [watchlistLength, setLength] =React.useState(0)
    const [order, setOrder] =React.useState("");
    const [sort, setSort] =React.useState()

    const fetchWatchListData = () => {
        dispatch(watchlistLoad());
        axios.get(`http://localhost:8080/user_profile`).then(res => {
            console.log(res.data.watchlist)
            console.log(toggleWatchlistDisplay)
            const payload = res.data.watchlist
            setLength(payload.length)
            dispatch(watchlistSuccess(payload))
        }).catch(err => {
            dispatch(watchlistError());
            console.log(err)
        })
    }

    const fetchRecentlyViewedData = () => {
     
        axios.get(`http://localhost:8080/user_profile`).then(res => {
            console.log("Hello",res.data.recently_viewed)
            const payload = res.data.recently_viewed
            dispatch(recentlyViewedSuccess(payload))
        }).catch(err => {
            console.log(err)
        })
    }


    
    React.useEffect(() => {
        fetchWatchListData()
        fetchRecentlyViewedData()
        // eslint-disable-next-line
    }, [])


    const [toggleWatchlistDisplay, setToggleWatchlistDisplay] = React.useState(true);

    return (
        <div>
            <Box sx={{ backgroundColor: "#E3E2DD", width: "100%", display: "flex", justifyContent: "center" }}>

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
                            {/* -----------------------------------Container 1 -(Your list & Edit & Share)----------------------------- */}
                            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 15px" }}>
                                <Box sx={{ color: "#424242" }}>
                                    <p style={{
                                        fontSize: "28px", fontFamily:
                                            "arial,sans-serif", fontWeight: "normal", margin: "3px"
                                    }}>Your Watchlist</p>

                                    <p style={{ fontSize: "12px", fontWeight: "bold", margin: "3px", color: "#aaa" }}><LockIcon fontSize={"md"} /> PRIVATE</p>

                                </Box>
                                <Box >
                                    <Stack direction="row" spacing={2}>
                                        <Stack direction="column" ><IconButton aria-label="edit" >
                                            <EditIcon />

                                        </IconButton><p style={{ fontSize: "12px", color: "#5a5a5a", textAlign: "center", margin: "0px" }}>EDIT</p>
                                        </Stack>

                                        <Stack direction="column" ><IconButton aria-label="share">
                                            <ShareIcon />
                                        </IconButton><p style={{ fontSize: "12px", color: "#5a5a5a", textAlign: "center", margin: "0px" }}>SHARE</p></Stack>


                                    </Stack>
                                </Box>
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
                                        <select defaultValue={"list_order"} style={{
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
                                            <option value="imbd_ratings">IMDb Ratings</option>
                                            <option value="popularity">Popularity</option>
                                            <option value="your_ratings">Your Rating</option>
                                            <option value="number_of_ratings">Number of Ratings</option>
                                            <option value="release_date">Release Date</option>
                                            <option value="runtime">Runtime</option>
                                            <option value="date_added">Date Added</option>
                                        </select>
                                        <IconButton aria-label="ascending">
                                            <NorthIcon sx={{ fontSize: "15px" }} />
                                            <SouthIcon sx={{ fontSize: "15px" }} />
                                        </IconButton>
                                        <IconButton onClick={() => { setToggleWatchlistDisplay(prev => !prev) }}>
                                            {!toggleWatchlistDisplay ? <ViewListIcon color="action" sx={{ fontSize: "30px" }} /> : <AppsIcon color="action" sx={{ fontSize: "30px" }} />}
                                        </IconButton>
                                        <button variant="outlined" style={{ color: "#525252", border: "0.5px solid #666666", borderRadius: "3px", fontSize: "12px", padding: "3px 10px" }}>REFINE</button>
                                    </Stack>
                                </Stack>

                            </Box>
                            <Divider />
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
                                        {loading ? <h1>Loading...</h1> : error ? <h1>Something Went Wrong...</h1> :
                                            <Box padding={"10px"} sx={!toggleWatchlistDisplay ? {display: "grid", gridTemplateColumns: "repeat(4,1fr)"} : "visible"} >
                                                {watchlist.map((e) => {
                                                    return (
                                                       <Box margin={"10px"}>
                                                        {toggleWatchlistDisplay ? <>
                                                        <Stack direction="row" >
                                                            <img src={e.image} alt="poster" style={{ height: "142px", marginRight: "8px", marginBottom: "20px" }} />
                                                            <List sx={{padding:"0px"}} spacing={1}>
                                                                <Link to="/" style={{textDecoration:"none", color:"#136cb2"}}><h3 style={{paddingBottom:"7px",fontWeight:"normal", color:"#136cb2", margin: "0px"}}>{e.title}</h3></Link>
                                                                <Stack
                                                                    direction="row"
                                                                    divider={<Divider orientation="vertical" flexItem />}
                                                                    spacing={1}
                                                                >
                                                                    <span><p style={{color:"grey", margin:"0px", fontSize:"11px", paddingBottom:"5px"}}>{e.year}</p></span>
                                                                    <span><p style={{color:"grey", margin:"0px", fontSize:"11px", paddingBottom:"5px"}}>Runtime</p></span>
                                                                    <span><p style={{color:"grey", margin:"0px", fontSize:"11px", paddingBottom:"5px"}}>Rated</p></span>
                                                                    <span><p style={{color:"grey", margin:"0px", fontSize:"11px", paddingBottom:"5px"}}>Genre</p></span>
                                                                </Stack>
                                                                <Stack
                                                                    direction="row"
                                                                    divider={<Divider orientation="vertical" flexItem />}
                                                                    spacing={1}
                                                                >
                                                                    <span><p style={{color:"#136cb2", margin:"0px", fontSize:"11px",paddingBottom:"7px"}}>Director</p></span>
                                                                    <span><p style={{color:"#136cb2", margin:"0px", fontSize:"11px",paddingBottom:"7px"}}>Cast names in the movie</p></span>
                                                                    
                                                                </Stack>
                                                                <p style={{color:"#3d3d3d", margin:"0px", fontSize:"12px",paddingBottom:"7px"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, sapiente! Officiis assumenda nihil dolores odit ducimus vitae inventore incidunt similique, facilis mollitia quia dicta cumque labore. Obcaecati accusantium molestiae alias at debitis totam reiciendis facilis repellendus.</p>
                                                            </List>
                                                        </Stack>
                                                        <Divider /></> :
                                                        <Box sx={{display: 'flex', flexDirection: "column", justifyContent: 'center',alignItems: 'center', textAlign: "center"}}>
                                                         <img src={e.image} alt="poster" style={{ height: "215px", marginBottom: "5px" }} />
                                                         <p style={{color:"#136cb2", margin:"0px", fontSize:"11px",paddingBottom:"5px"}}>{e.title}</p>
                                                        </Box> }
                                                       
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
                            <Button variant="text" sx={{ fontSize: "10px", margin: "0px 10px" }}>Clear history</Button>
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
        </div>
    );
}

