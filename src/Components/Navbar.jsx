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
import {useNavigate} from "react-router-dom"
import { Link } from "@mui/material";

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
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
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
  const navigate=useNavigate()
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

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

  const handleSign=()=>{
    // console.log("1")
    // return
    navigate("/sign")
  }

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
    <Box className="mainBox" style={{}}>
      <AppBar className="appBar" style={{ backgroundColor: "#121212" }}>
        <Toolbar style={{ marginLeft: 40 }}>
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
                  marginTop: 2,
                  textAlign: "center",
                  marginLeft: 5,
                  fontWeight: 700,
                }}
              >
                All
              </p>
              <ArrowDropDownIcon style={{ color: "black" }} />

              <hr
                style={{ height: 28, marginTop: 0, backgroundColor: "black" }}
              />
            </div>

            <StyledInputBase
              placeholder="Search IMDb"
              inputProps={{ "aria-label": "search" }}
            />

            <div className="searchIcon">
              <SearchIcon
                style={{
                  marginLeft: "280",
                  color: "grey",
                  margon: "auto",
                  marginTop: "3",
                }}
              />
            </div>
          </Search>

          <div
            className="imdbPro"
            style={{
              height: 35,
              marginLeft: 2,
              width: 150,
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
            <hr
              style={{
                height: 35,
                marginTop: 0,
                backgroundColor: "black",
                width: 0,
              }}
            />
          </div>

          <Box
            className="watchlistSignIn"
            style={{
              display: "flex",
              width: 300,
              marginLeft: 0,
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
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}{" "}
    </Box>
  );
};
