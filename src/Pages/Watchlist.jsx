
import { Box, Stack, IconButton, Divider, Button, List, Typography } from '@mui/material';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from 'prop-types';
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
import BookmarkSharpIcon from '@mui/icons-material/BookmarkSharp';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarIcon from '@mui/icons-material/Star';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux';
import { recentlyViewedSuccess, recentlyViewedDelete, watchlistError, watchlistLoad, watchlistSuccess, sortYearDesc, sortYearAsc, sortRuntimeDesc, sortRuntimeAsc,sortImdbRatingAsc,sortImdbRatingDesc, sortDefault } from '../Redux/Watchlist/action';
import {Navbar} from "../Components/components_meenu/Navbar"
import {Footer} from "../Components/components_meenu/Footer"

export const Watchlist = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.watchlist)
    const { error } = useSelector(state => state.watchlist)
    const { watchlist } = useSelector(state => state.watchlist);
    const { recently_viewed } = useSelector(state => state.watchlist)
    const [watchlistLength, setLength] = React.useState(0)
    const [order, setOrder] = React.useState(true);
    const [sortCategory, setSortCategory] = React.useState("list_order")
    const [refine, setRefine] = React.useState(false);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`vertical-tabpanel-${index}`}
                aria-labelledby={`vertical-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired
    };

    function a11yProps(index) {
        return {
            id: `vertical-tab-${index}`,
            "aria-controls": `vertical-tabpanel-${index}`
        };
    }

    const fetchWatchListData = () => {
        dispatch(watchlistLoad());
        axios.get(`http://localhost:8080/user_profile?login=true`).then(res => {
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

        axios.get(`http://localhost:8080/user_profile?login=true`).then(res => {
            // console.log("Hello", res.data.recently_viewed)
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


    const [toggleWatchlistDisplay, setToggleWatchlistDisplay] = React.useState(true);
    const navigate = useNavigate()

    return (
        <>
       <Navbar />
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
                                            <EditIcon onClick={() => navigate("/edit_watchlist")} />

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
                                        <select defaultValue={"list_order"} onChange={(e) => setSortCategory(e.target.value)} style={{
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
                                        <IconButton onClick={() => { setOrder(prev => !prev); console.log(order) }} >
                                            <NorthIcon sx={{ fontSize: "15px" }} color={order ? "disabled" : "action"} />
                                            <SouthIcon sx={{ fontSize: "15px" }} color={order ? "action" : "disabled"} />
                                        </IconButton>
                                        <IconButton onClick={() => { setToggleWatchlistDisplay(prev => !prev) }}>
                                            {!toggleWatchlistDisplay ? <ViewListIcon color="action" sx={{ fontSize: "30px" }} /> : <AppsIcon color="action" sx={{ fontSize: "30px" }} />}
                                        </IconButton>
                                        <Button  onClick={() => setRefine(prev => !prev)} sx={{ color: "#525252", border: "0.5px solid #666666", borderRadius: "3px", fontSize: "12px", padding: "3px 10px" }}>REFINE</Button>
                                    </Stack>
                                </Stack>

                            </Box>
                            <Divider />
                            {/* ----------------------------------REFINE OPTIONS --------------------------- */}
                            <Box visibility={refine ? "visible" : "hidden"} display={refine ? "flex" : "none"}
                                sx={{
                                    flexGrow: 1,
                                    bgcolor: "background.paper",
                                    height: 215
                                }}
                            >
                                <Tabs
                                    orientation="vertical"
                                    TabIndicatorProps={{
                                        sx: { backgroundColor: "transparent" }
                                    }}
                                    //variant="scrollable"
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="Vertical tabs example"
                                    sx={{
                                        backgroundColor: "#EEEEEE",
                                        minWidth: "250px",
                                        "& button": {
                                            color: "black",
                                            fontSize: "14px",
                                            fontWeight: "400",
                                            borderRadius: "5px 0px 0px 5px",
                                            margin: "2px 0px 0px 4px",
                                            display: "flex",
                                            alignItems: "flex-start",
                                            justifyContent: "flex-start",
                                            padding: "10px 30px 0px 10px",
                                            width: "250px",
                                            textTransform: "none"
                                        },
                                        "& button:hover": { backgroundColor: "white" },
                                        "& button.Mui-selected": { backgroundColor: "white", color: "black" }
                                    }}
                                >
                                    <Tab
                                        label={
                                            <div style={{ textAlign: "left" }}>
                                                <span style={{ color: "#333", fontSize: "15px" }}>Type (Film, TV, etc.) </span>
                                                <br />
                                                <span style={{
                                                    color: "#999999", display: "block",
                                                    fontSize: "13px",
                                                    overflow: "hidden",
                                                    paddingRight: "18px",
                                                    paddingTop: "4px",
                                                    whiteSpace: "nowrap"
                                                }}>All</span>
                                            </div>
                                        }
                                        {...a11yProps(0)}
                                    />
                                    <Tab
                                        label={
                                            <div style={{ textAlign: "left" }}>
                                                <span style={{ color: "#333", fontSize: "15px" }}>Genres </span>
                                                <br />
                                                <span style={{
                                                    color: "#999999", display: "block",
                                                    fontSize: "13px",
                                                    overflow: "hidden",
                                                    paddingRight: "18px",
                                                    paddingTop: "4px",
                                                    whiteSpace: "nowrap"
                                                }}>All</span>
                                            </div>
                                        }
                                        {...a11yProps(1)}
                                    />
                                    <Tab
                                        label={
                                            <div style={{ textAlign: "left" }}>
                                                <span style={{ color: "#333", fontSize: "15px" }}>Where to Watch </span>
                                                <br />
                                                <span style={{
                                                    color: "#999999", display: "block",
                                                    fontSize: "13px",
                                                    overflow: "hidden",
                                                    paddingRight: "18px",
                                                    paddingTop: "4px",
                                                    whiteSpace: "nowrap"
                                                }}>All</span>
                                            </div>
                                        }
                                        {...a11yProps(2)}
                                    />
                                    <Tab
                                        label={
                                            <div style={{ textAlign: "left" }}>
                                                <span style={{ color: "#333", fontSize: "15px" }}>Release Year </span>
                                                <br />
                                                <span style={{
                                                    color: "#999999", display: "block",
                                                    fontSize: "13px",
                                                    overflow: "hidden",
                                                    paddingRight: "18px",
                                                    paddingTop: "4px",
                                                    whiteSpace: "nowrap"
                                                }}>All</span>
                                            </div>
                                        }
                                        {...a11yProps(3)}
                                    />
                                </Tabs>
                                <TabPanel value={value} index={0}>
                                    <div
                                        style={{
                                            overflow: "auto",
                                            height: "215px",
                                            width: "400px",
                                            padding: "0px 15px"
                                        }}
                                    >
                                        <div>
                                            <input style={{
                                                height: "24px", width: "24px", position: "relative",
                                                top: "5px", border: "1px solid #EEEEEE", marginRight: "15px"
                                            }} type="checkbox" value="Feature Film" />
                                            <label for="Feature Film" style={{ color: "#333", fontSize: "15px" }}> Feature Film</label>
                                            <Divider sx={{ marginTop: "7px" }} />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={1}>
                                    <div
                                        style={{
                                            overflow: "auto",
                                            height: "215px",
                                            width: "400px",
                                            padding: "0px 15px"
                                        }}
                                    >
                                        <div>
                                            <input style={{
                                                height: "24px", width: "24px", position: "relative",
                                                top: "5px", border: "1px solid #EEEEEE", marginRight: "15px"
                                            }} type="checkbox" value="Feature Film" />
                                            <label for="Feature Film" style={{ color: "#333", fontSize: "15px" }}> Action </label>
                                            <Divider sx={{ marginTop: "7px" }} />
                                        </div>
                                        <div>
                                            <input style={{
                                                height: "24px", width: "24px", position: "relative",
                                                top: "5px", border: "1px solid #EEEEEE", marginRight: "15px"
                                            }} type="checkbox" value="Feature Film" />
                                            <label for="Feature Film" style={{ color: "#333", fontSize: "15px" }}> Drama </label>
                                            <Divider sx={{ marginTop: "7px" }} />
                                        </div>
                                        <div>
                                            <input style={{
                                                height: "24px", width: "24px", position: "relative",
                                                top: "5px", border: "1px solid #EEEEEE", marginRight: "15px"
                                            }} type="checkbox" value="Feature Film" />
                                            <label for="Feature Film" style={{ color: "#333", fontSize: "15px" }}> Thriller</label>
                                            <Divider sx={{ marginTop: "7px" }} />
                                        </div>
                                        <div>
                                            <input style={{
                                                height: "24px", width: "24px", position: "relative",
                                                top: "5px", border: "1px solid #EEEEEE", marginRight: "15px"
                                            }} type="checkbox" value="Feature Film" />
                                            <label for="Feature Film" style={{ color: "#333", fontSize: "15px" }}> Horror</label>
                                            <Divider sx={{ marginTop: "7px" }} />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={2}>
                                    <div
                                        style={{
                                            overflow: "auto",
                                            height: "215px",
                                            width: "400px",
                                            padding: "0px 15px"
                                        }}
                                    >
                                        <div>
                                            <input style={{
                                                height: "24px", width: "24px", position: "relative",
                                                top: "5px", border: "1px solid #EEEEEE", marginRight: "15px"
                                            }} type="checkbox" value="Feature Film" />
                                            <label for="Feature Film" style={{ color: "#333", fontSize: "15px" }}> Prime Video (Rent or Buy)</label>
                                            <Divider sx={{ marginTop: "7px" }} />
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel value={value} index={3}>
                                    <div
                                        style={{
                                            overflow: "auto",
                                            height: "215px",
                                            width: "400px",
                                            padding: "0px 15px"
                                        }}
                                    >
                                        <div style={{ color: "#333", fontSize: "15px" }}>
                                            Release Year Or Range
                                            <br />
                                            <input type="text" style={{ backgroundColor: "#ffffff", border: "1px solid #cccccc", borderRadius: "4px", color: "#555555", width: "100px", padding: "6px 12px" }} /> <span> to </span>
                                            <input type="text" style={{ backgroundColor: "#ffffff", border: "1px solid #cccccc", borderRadius: "4px", color: "#555555", width: "100px", padding: "6px 12px" }} />
                                            <Divider sx={{ marginTop: "7px" }} />
                                        </div>
                                    </div>
                                </TabPanel>
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
                                            <Box padding={"10px"} sx={!toggleWatchlistDisplay ? { display: "grid", gridTemplateColumns: "repeat(4,1fr)" } : "visible"} >
                                                {watchlist.map((e) => {
                                                    return (
                                                        <Box margin={"10px"}>
                                                            {toggleWatchlistDisplay ? <>
                                                                <Stack direction="row" >
                                                                    <div style={{ height: "142px", minWidth: "96px", marginRight: "15px", marginBottom: "20px", backgroundImage: `url(${e.image})`, backgroundSize: "cover", padding: "0px" }}>
                                                                        <IconButton sx={{ margin: "0px", padding: "0px" }}><BookmarkSharpIcon  sx={{ fontSize: 50, margin: "-6px",color: "#81B74F" }} />
                                                                        </IconButton>
                                                                    </div>
                                                                    <List key={e.title} sx={{ padding: "0px" }} spacing={1}>
                                                                        <Link to="/" style={{ textDecoration: "none", color: "#136cb2" }}><h3 style={{ paddingBottom: "7px", fontWeight: "200", color: "#136cb2", margin: "0px" }}>{e.title}</h3></Link>
                                                                        <Stack
                                                                            direction="row"
                                                                            divider={<Divider orientation="vertical" flexItem />}
                                                                            spacing={1}
                                                                        >
                                                                            <span><p style={{ color: "grey", margin: "0px", fontSize: "11px", paddingBottom: "5px" }}>{e.year}</p></span>
                                                                            <span><p style={{ color: "grey", margin: "0px", fontSize: "11px", paddingBottom: "5px" }}>{e.runtimeStr}</p></span>
                                                                            <span><p style={{ color: "grey", margin: "0px", fontSize: "11px", paddingBottom: "5px" }}>Genre</p></span>
                                                                        </Stack>
                                                                        <Stack
                                                                            direction="row"
                                                                            spacing={1}
                                                                            alignItems="center"
                                                                        >
                                                                            <span><p style={{ color: "black", margin: "0px", fontSize: "12px", paddingBottom: "5px" }}><StarIcon sx={{fontSize: "15px", position: "relative", top:"3px", color: "#D4B557"}}/>{e.imDbRating}</p></span>
                                                                            <span><p style={{ color: "#136cb2", margin: "0px", fontSize: "11px", paddingBottom: "5px" }}><StarBorderOutlinedIcon sx={{fontSize: "15px", position: "relative", top:"3px", color: "grey!important"}}/>Rate</p></span>
                                                                        
                                                                        </Stack>
                                                                        <Stack
                                                                            direction="row"
                                                                            divider={<Divider orientation="vertical" flexItem />}
                                                                            spacing={1}
                                                                        >
                                                                            <span><p style={{ color: "#136cb2", margin: "0px", fontSize: "11px", paddingBottom: "7px" }}>Director</p></span>
                                                                            <span><p style={{ color: "#136cb2", margin: "0px", fontSize: "11px", paddingBottom: "7px" }}>Cast names in the movie</p></span>

                                                                        </Stack>
                                                                        <p style={{ color: "#3d3d3d", margin: "0px", fontSize: "12px", paddingBottom: "7px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, sapiente! Officiis assumenda nihil dolores odit ducimus vitae inventore incidunt similique, facilis mollitia quia dicta cumque labore. Obcaecati accusantium molestiae alias at debitis totam reiciendis facilis repellendus.</p>
                                                                    </List>
                                                                </Stack>
                                                                <Divider /></> :
                                                                <Box sx={{ display: 'flex', flexDirection: "column", justifyItems: 'center', alignItems: 'center', textAlign: "center" }}>
                                                                    <div style={{ height: "215px", minWidth: "145px", marginBottom: "5px", backgroundImage: `url(${e.image})`, backgroundSize: "cover", padding: "0px", justifyContent: 'left' }}>
                                                                        <IconButton sx={{ margin: "0px", padding: "0px", justifyContent: 'left' }}><BookmarkSharpIcon  sx={{ fontSize: 50, margin: "-6px -80px", color: "#81B74F" }} />
                                                                        </IconButton>
                                                                    </div>
                                                                    <Link to="/" style={{ color: "#136cb2", margin: "0px", fontSize: "11px", paddingBottom: "5px", textDecoration: "none" }}>{e.title}</Link>
                                                                </Box>}

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
                            <Button variant="text" onClick={() => dispatch(recentlyViewedDelete())} sx={{ fontSize: "10px", margin: "0px 10px" }}>Clear history</Button>
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
        <Footer />
        </>
    );
}

