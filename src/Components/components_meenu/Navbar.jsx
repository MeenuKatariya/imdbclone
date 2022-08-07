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
import { IMDbProImage } from "../components_meenu/IMDbProImage";
import { SearchBar } from "./Search";
import axios from "axios";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/exports";
import { signOut } from "../../Redux/Auth/Action";
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
 
  const navigate = useNavigate();
 
  const [divHover, setDivHover] = React.useState(false);
  const [searchMovie, setSearchMovie] = React.useState("");
  const [inputSearch, setInputSearch] = React.useState([]);
  const [timer, setTimer] = React.useState(0);
  const [loginBox, setLoginBox] = React.useState(false);
  const login = useSelector((state) => state.auth.user);
  console.log(login)

  const dispatch = useDispatch();
  const [loginBoxShow, setLoginBoxshow] = React.useState(false);
  console.log(login);
  
  const handleSignOut=()=>{
    dispatch(signOut());
    setLoginBoxshow(prev=>!prev)
    console.log(login.id)
 

    axios({
      method:"PATCH",
      url:`http://localhost:8080/user_profile/${login.id}`,
      data:{
        login:false
      }
    });
    navigate("/")
    
  }

  const handleWatchlist=()=>{
    console.log("hello")
    console.log(login.name)
    {
      login.name? navigate("/watchlist"):navigate("/createaccount")
    }
  }


  const searchData = () => {
    axios({
      method: "get",
      url: `http://www.omdbapi.com/?s=${searchMovie}&apikey=3040a61a`,
    })
      .then((res) => setInputSearch(res.data))
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    searchData();
  }, [searchMovie]);

  const handleSign = () => {
    navigate("/createaccount");
  };
  const handlemenu = () => {
    console.log("1")
    navigate("/menu");
  };

 

  return (
    <Box className="mainBox" style={{ position: "relative" }}>
      <AppBar className="appBar" style={{ backgroundColor: "#121212" }}>
        <Toolbar style={{ marginLeft: 40 }}>
         
            
             
            

             
             {
              loginBoxShow?

              <div className="loginBox"

            style={{
              position: "absolute",
              top: 63,

              height:250,
              marginLeft: 1070,
              backgroundColor: "#1f1f1f",
              width: 150,
            }} >

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
                onClick={handleSignOut  }
                
              >
                SignOut
              </button>
              </div>
            </div>:null
             
            
          
         }









          {/* {login.name ? (
            
            
                <div className="loginBox"

              style={{
                position: "absolute",
                top: 63,

                height:250,
                marginLeft: 1070,
                backgroundColor: "#1f1f1f",
                width: 150,
              }} >
            
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
            </div>:null
          } */}

        
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
                border:"1px solid red"
              }}
            >
              <MenuIcon
                style={{ marginTop: 10, color: "grey" }}
              />

              <p
                className="menu"
                onClick={handlemenu}
                style={{ textAlign: "center", fontWeight: 700,fontSize:13,textAlign:"center" }}
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
              onClick={handleWatchlist}
              style={{
                display: "flex",
                width: 94,
                border:"1px solid red",
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
            <div   onClick={()=>setLoginBoxshow(prev=>!prev)} className="signIn">
              
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
          {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
          </Box> */}
          <IMDbProImage prop={divHover} />
          <SearchBar prop={inputSearch} />
        </Toolbar>
       </AppBar>
      {/* {renderMobileMenu}
      {renderMenu}{" "} */}
    </Box>
  );
  // }
};
