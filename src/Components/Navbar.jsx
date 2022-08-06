import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import { borderRadius } from "@mui/system";
import "./Navbar.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";
import { IMDbProImage } from "../Pages/IMDbProImage";
import { SearchBar } from "../Pages/Search";
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/exports";
import { signOut } from "../Redux/Auth/Action";
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  border: "1px solid black",
  backgroundColor: "white",
  borderRadius: "8px",
  height: "30px",
  display: "flex",

  width: "600px",
  // marginLeft:"24px",
  textAlign: "left",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  // height: '100%',
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "10px",
  color: "black",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#121212",

  "& .MuiInputBase-input": {
    padding: theme.spacing(0.3, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: "15px",
    padding: "5px",

    transition: theme.transitions.create("width"),
    // width: '100%',
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState();
  const navigate = useNavigate();
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [divHover, setDivHover] = React.useState(false);
  const [searchMovie, setSearchMovie] = React.useState("");
  const [inputSearch, setInputSearch] = React.useState([]);
  const [timer, setTimer] = React.useState(0);
  const [loginBox, setLoginBox] = React.useState(false);
  const login = useSelector((state) => state.user.user);
  const name = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const [loginBoxShow, setLoginBoxshow] = React.useState(false);
  console.log(login);
  // console.log(search)
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const searchData = () => {
    // let res=await fetch(`http://www.omdbapi.com/?s=${searchMovie}&apikey=3040a61a`)
    // let output=await res.json()
    // setInputSearch(output.Search)
    // console.log(output)

    fetch(`http://www.omdbapi.com/?s=${searchMovie}&apikey=3040a61a`)
    .then((res)=>res.json()).then((res)=>setInputSearch(res))

  React.useEffect(() => {
    searchData();
  }, [searchMovie]);
  // function change(){
  //     debounce(500)
  // }

  // function debounce(d){
  //     if(timer>0){
  //         clearTimeout(timer)
  //     }
  //     setTimer(setTimeout(()=>{
  //         searchData(search)
  //     }))
  // }

  // change()

  // searchData();

  const handleSign = () => {
    // console.log("1")
    // return
    navigate("/createaccount");
  };
  const handleMenu = () => {
    navigate("/menu");
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box className="mainBox" style={{ position: "relative" }}>
      <AppBar className="appBar" style={{ backgroundColor: "#121212" }}>
        <Toolbar style={{ marginLeft: 40 }}>
          {login.name ? (
            //  {
            //   loginBoxShow? (
            //     <div className="loginBox"

            //   style={{
            //     position: "absolute",
            //     top: 63,

            //     height:250,
            //     marginLeft: 1070,
            //     backgroundColor: "#1f1f1f",
            //     width: 150,
            //   }}
            // >
            <div style={{ textAlign: "center" }}>
              <p>Your Activity</p>
              <p>Your Watchlist</p>
              <p>Your ratings</p>
              <p>Your lists</p>
              <p>Account settings</p>
              <button
                className="signOutButton"
                style={{
                  backgroundColor: "#1f1f1f",
                  color: "white",
                  border: "none",
                  fontSize: 14,
                }}
                onClick={() => dispatch(signOut())}
              >
                SignOut
              </button>
            </div>
          ) : // </div>

          null}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: 200,
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
              width={80}
              alt=""
            />

            <div
              className="menuDiv"
              style={{
                display: "flex",
                width: 80,
                justifyContent: "space-between",
              }}
            >
              <MenuIcon
                style={{ marginTop: 10, marginLeft: "10px", color: "grey" }}
              />

              <p
                className="menu"
                onClick={handleMenu}
                style={{ textAlign: "center", marginTop: 10, fontWeight: 700 }}
              >
                Menu
              </p>
            </div>
          </div>
          <Search className="search">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: 55,
                height: 30,
              }}
            >
              <p
                style={{
                  fontSize: 15,
                  color: "black",
                  marginTop: 3,
                  textAlign: "center",
                  marginLeft: 5,
                  fontWeight: 700,
                }}
              >
                All
              </p>
              <ArrowDropDownIcon
                style={{
                  color: "black",
                  borderRadius: 10,
                  marginTop: 1,
                  alignItems: "center",
                }}
              />

              <hr
                style={{
                  width: "0",
                  height: 28,
                  marginTop: 0.5,
                  opacity: "50%",
                  backgroundColor: "black",
                }}
              />
            </div>

            <StyledInputBase
              placeholder="Search IMDb"
              inputProps={{ "aria-label": "search" }}
              value={searchMovie}
              onChange={(e) => {
                setSearchMovie(e.target.value);
              }}
            />

            <div className="searchIcon">
              <SearchIcon
                style={{
                  marginLeft: "300",
                  color: "grey",
                  margon: "auto",
                  marginTop: "3",
                }}
              />
            </div>
          </Search>

          <div
            className="imdbPro"
            onMouseEnter={() => setDivHover(true)}
            onMouseLeave={() => setDivHover(false)}
            style={{
              height: 35,
              marginLeft: 2,
              width: 130,
              marginRight: 15,
              borderRight: "2px solid rgba(128, 128, 128, 0.40)",

              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <img
              src="./imdb.jpg"
              alt=""
              height={15}
              style={{ margin: "auto" }}
            />
            {/* <hr
              style={{
                // height: 0,

                marginTop: 0,
                backgroundColor: "black",
                // width: 0,
              }}
            /> */}
          </div>

          <Box
            className="watchlistSignIn"
            style={{
              display: "flex",
              width: 300,
              marginLeft: 0,
              alignItems: "center",
              marginTop: 3,
              color: "ffffff",
              fontSize: "8px",
              fontFamily: "Roboto,Helvetica,Arial,sans-serif",
              justifyContent: "space-between",
            }}
          >
            <div
              className="watchList"
              style={{
                display: "flex",
                width: 94,
                justifyContent: "space-between",
              }}
            >
              <BookmarkAddIcon style={{ color: "grey" }} />

              <Typography
                fontSize={15}
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
                color="ffffff"
                textAlign="auto"
                fontFamily="Roboto,Helvetica,Arial,sans-serif"
              >
                Watchlist
              </Typography>
            </div>
            <div className="signIn">
              onClick={setLoginBoxshow(true)}
              {login.imgUrl ? (
                <div
                  className="imgName"
                  // onMouseOver={() => setLoginBoxshow(prev =>!prev)}
                  // onMouseLeave={() => setLoginBoxshow(false)}

                  style={{ display: "flex", width: 100, height: 40, gap: 8 }}
                >
                  <img
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: "50%",
                      marginTop: 5,
                    }}
                    src={login.imgUrl}
                    alt=""
                  />
                  <p style={{ fontSize: 14, marginTop: 0 }}>{login.name}</p>
                </div>
              ) : login.login ? (
                <div
                  style={{
                    fontSize: 17,
                    display: "flex",
                    overFlow: "hidden",
                    textOverflow: "ellipsis",
                    width: "50px",
                    gap: 4,
                    color: "#ffffff",

                    marginTop: 0,
                    textAlign: "center",
                    fontFamily: "Roboto,Helvetica,Arial,sans-serif",
                  }}
                >
                  <AccountCircleIcon /> {login.name}
                </div>
              ) : (
                <Typography
                  fontSize={15}
                  color="ffffff"
                  textAlign="auto"
                  fontFamily="Roboto,Helvetica,Arial,sans-serif"
                  noWrap
                  component="div"
                  onClick={handleSign}
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  Sign In
                </Typography>
              )}
              {/* <p style={{fontSize:14}} >Sign In</p> */}
            </div>

            <div className="EN" style={{ display: "flex" }}>
              <Typography
                fontSize={15}
                color="ffffff"
                textAlign="auto"
                // padding={10}

                fontFamily="Roboto,Helvetica,Arial,sans-serif"
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                EN
              </Typography>
              <ArrowDropDownIcon />
            </div>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
          <IMDbProImage prop={divHover} />
          <SearchBar prop={inputSearch} />
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}{" "}
    </Box>
  );
};
