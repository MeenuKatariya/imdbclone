import { Alert, Button } from "@mui/material";
import React from "react";
import "./CreateAccount.css";
import { useNavigate } from "react-router-dom";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { authData, authError, authLoading } from "../../Redux/Auth/Action";
import axios from "axios";
import {Navbar} from "../../components/components_meenu/Navbar"
import {Footer} from "../../components/components_meenu/Footer"

export const CreateAccount = () => {
  const navigate = useNavigate();
  const [alertEmail, setAlertEmail] = React.useState(false);
  const dispatch = useDispatch();
  const login = useSelector((state) => state.auth.user);

  const handleSignup = () => {
    navigate("/sign");
  };

  const handleImdb = () => {
    navigate("/login");
  };

  const responseGoogle = async (res) => {
    console.log(res);
    try {
      let result = await fetch("https://imdb-clone-database.herokuapp.com/user_profile");
      let response = await result.json();
      let currUser = response.find((e) => e.email === res.profileObj.email);

      if (currUser) {
        alert("user already exists!");
        navigate("/login")
      } else {
        postData({
          name: res.profileObj.name,
          email: res.profileObj.email,
          password: res.profileObj.googleId,
          imgUrl: res.profileObj.imageUrl,
          login: true,
          watchlist: [],
          my_list: [],
          recently_viewed: [],
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  {
  }
  const postData = async (data) => {
    try {
      dispatch(authLoading());
      let res = await fetch(`https://imdb-clone-database.herokuapp.com/user_profile`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      let output = await res.json();
      //  console.log(output)
      getData();
    } catch (error) {
      console.log(error);
      dispatch(authError());
    }
  };

  const getData = async () => {
    try {
      dispatch(authLoading());
      let result = await fetch("https://imdb-clone-database.herokuapp.com/user_profile");
      let response = await result.json();
      console.log(response);

      response.forEach((element, i) => {
        if (element.email && element.password) {
          console.log(element.login);
          // console.log("yes")
          dispatch(authData(element));

          navigate("/");
        }
      });
    } catch (error) {
      console.log(error);
      dispatch(authError());
    }
  };

  React.useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "183711882186-6kc3gqcn2clsoipt9svo6omjk81no3p5.apps.googleusercontent.com",
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);
  return (
    <div>
       <Navbar/>
  
    <div style={{ height:640,  marginTop:70,backgroundColor: "#E3E2DD"}}>
      <div className="BigPart"  style={{ backgroundColor:"white"}} >
        <div className="signLeft">
          <h3 style={{ fontFamily: "Verdana,Arial,sans-serif" }}>Sign in</h3>
          <div className="imdb">
            {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoA…Y4Fd5fEJXfB4/t64JcAkXndiDHJnLIwAAAABJRU5ErkJggg==" alt="" /> */}
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAH9SURBVEhL7ZbNSxtBGMaf2Y9otvEDtZCkpmDV3vSm4NmD4EkoPelBkEJpL/4LPZTSnnrrwYuCR8FDr71WEU8ePIgIfpSqLVWUJEazm9d3Zichu8QmaFQQfzB535ndyTPzzMzuCmJwBxg63jp3JhSwLr/7Ce7hPIhc3XI9BCxYyTewO6d1S0gou5wCbihSRNhtiA6s61rYOvJ0cnPCrjy8zXC/QqcZwuFRAZkzwsG/gqqfpP08m/Pj3+MC8noZZC6v/xe564pkfia4xGlqzCHTEPThbRMJIejVcJRGhhpV/vG932bw9SdRg75/baPkU5PGR6Oqb6msvNT/6lOTdZt7Lrb3gzvy3WuHBwn8WLlQ9T/swOfZDNY2Kx+PqkItMYGd3x7b48FpFLqVO3JqmnzIXd8yad23hSy+zKVVPUxVIdsC2lsMxNtNPvFX0/vcREerKK1bmBqsE+hOmXjxjIdfRo4du8iTmpWCJyatvGowVYVkx55OC13JoNDMYlbFof6IiqvreWz98tDXwxZUIPisW0ryL8HldfcKPFpeiGKUyNzi3PX8LrYlYPBQ5cx4FyJ3Tog5ek5WM5zBDT9nKs7I4sE32PwMLovFXFrVEBGqSBFJRN9TEqlADWtUHx64kBBsdJ2Qb9lyAkJmYpLvqIOY4Fd5fEJXfB4/t64JcAkXndiDHJnLIwAAAABJRU5ErkJggg=="
              alt=""
            ></img>
            <div onClick={handleImdb} className="paraDiv">
              <p>Sign in with IMDb</p>
            </div>
          </div>
          <br />

          <div style={{ marginLeft: 100 }}>
            <GoogleLogin
              clientId="183711882186-6kc3gqcn2clsoipt9svo6omjk81no3p5.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
              buttonText="Sign up with Google"
              icon={true}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          </div>

          {/* <div className='amazon'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMA…fGQzi8szEUA/KpBQwMAAAs3aFQ+zOru8AAAAASUVORK5CYII=" alt="" />
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAUCAYAAABvVQZ0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAH1SURBVDhPYwxPyPl/5vwlBmoARmV9u/9QNsWACUpTBRA0jJOTg0FTTYVBW1ONgYebGyqKHeD0pqqyIkN1aQ6DtbkxAyMjI1jsz58/DHsOHGVoaO9nePP2PVgMGWA1TEVJgWHtkhkM3FycUBFUcP7SVYbQuCwoDwGwejMvIxFu0NqN2xlcA2IYapp7GP7/h9hrqKfNoK6qBGYjAxYojQIuXL7KwMrKzMDExMRQ29rL8OvXb4b7Dx4zJMeGMygqyILVCAkKgGlkgNWweYtXgTEIyEpLgsNPVkaSgYcHEQGsrKxQFgJgNQwEAn3dGXJS4xjk5WSgIqiAhZkZykIArGGWGB3K0N1cBTbo0+cvDFNnL2LIKaljuHPvIVQFAwMzMYZxsLMzFGQnQ3kMDBkFVQz9U+cy7NhzECoCAaysmJ7CMExZSR4lSVy6cgNM8/HyMMjLSoHZIMDHxwtlIQCGYV++fIWyIMDbw4lBgJ+XoaY0FyXQ/b1c4IkZBjASLUjBtjXzwTGIDt5/+MggKMAPZn8GWuoeEMvw6s1bMB8EMFwGSph5ZY0MDx49gYowANPZL4ZFK9Yx2HuFM+zce4jhybMXDJFJuSgGgQDOvMkEdKEaMJWDvPbg4WOwS8DiwITMzsbG8P3HDzAfGQzi8szEUA/KpBQwMAAAs3aFQ+zOru8AAAAASUVORK5CYII=" alt=""></img>
                <div className='paraDiv'>
                <p style={{fontFamily:"Verdana,Arial,sans-serif"}} >Sign in with Amazon</p>
                </div>
            </div> */}
          {/* <br />
            <div className='goggle'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQA…Jc2KvoxRWycxG8PxluDGAP1bDBTJNCMK0AAAAAElFTkSuQmCC" alt="" />
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKnSURBVDhPpZRfSBRBHMe/s7v31+ROxQcTPCXxQU2vQkwiJU604CDQgt56CMyeIpCyB6OoiCS1Ioogit70IQtKMUhLUcp6sPCyPyBYd5WaHebfu/Xutt3Z0buxkxI/7OzO7zsz352dmf0RRQUxKEsy5IFeBPufI/RpBBG/HxAIhOQUGHJyYSzZDVOpC5AkNoKHMwz29WD+9lWEJ8aZEh8xbTM21Z6AcVcZU6Lohuo1d7MZiw/bmPwfEILEugaYK91M0BG02/ytlrXN1IG0rMJQsB2mMvXTV0ECfd3KzLl6FuoQdX3M7ir6dikrm2qhsVEEnj5B4PEDSHmFsF1sBjFbaFssZPp4uSJ7frNQFSxW2C9dg5RfyBQebaNER1ZcMw0id5mUha50yMMpakRgb7wBw7Yi1rx+BCJFkOD2wrrPC7PLtSEzDbL0zLBybMSCdpBUftc0au4EWG1tDhRLqNgq6bu8DEnMYzWe0cnwP8uXqQjtyxluBDmkPznD8Ox7Vls/dqt+VlfW8FHAAU/KUZzdWUcbYlmUud+dUt8ahMcXZhFwer8J5XnqGgYVERdmnbg8V4jOr4N4MzHMukSxGAlXvk8rGPkWNVNzB3Zkinq9IVSFjmAGDbTfuq6/Ee+mPtI4HpMzCs63BxGJmbTTISIpgX1yt/elcmrgCg2WkQQR1Vsq4M7ag2xbhnreBfjmfqBjrBftng8Ie49ACKXSvprN9cMW5Kbr20GzTdPQXbR+7qTCaghLDNrslyHhBFgmayAtOHGw2IBal5G1MEM1f6Fp6B7a1jCND4E7+STOlBdxyYhLsD2+V2h5ex/j8z+ZEh+bKRHH8g+hOruSKVE4Qw05soQXvtdqGcSIfxS/AtN0BkkmG3LsmShJc2KvoxRWycxG8PxluDGAP1bDBTJNCMK0AAAAAElFTkSuQmCC" alt=""></img>
                <div className='paraDiv'>
                <p style={{fontFamily:"Verdana,Arial,sans-serif"}} >Sign in with Google</p>
                </div>
            </div>
            <br /> */}

          {/* <div className='apple'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEA…/R3E5Ka+D/7se/fgDE4APYBQnD1XEu2sAAAAASUVORK5CYII=" alt="" />
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAWCAYAAAAmaHdCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAGbSURBVDhPvZSxisJAEIYnaYQEBMEHECxUMBaCpYjoC1gq2FlorU9ga2fpSwiCpBdsBBEUbEREsBICIoIg4tzuZLwj3p4J3HEfDLsz5P93M5ushgL4JTqPb1kul1AqlaDX63HlBbmTd2y3WwyHw3K3aNs2V734mlSrVTIoFAr4eDy46sXXJJ1OY71eR8dxuPIdT2NXqxX0+33YbDaQTCahVqtBPB6H4XAI4/EYjscjZLNZ6HQ6kEgkWCUgK8FoNMJQKERb9wvDMHA6nbKSX+d0OmEkElEKVJHL5UjzhEwGg4HyYVXouo7r9ZrET+g7mc/ncghEJpOBVCrFmQuZXC4XSoJgmibPviCTaDRKSRDkCV6vV85cyMSyLEqCcD6fodvtcsbIxux2O9Q0TdnIn6LValFTJbSTWCwGxWJRTgMjvmCeCdgMJ5OJckVVyGNeLBasfPl3Go2GUvQa7XabFS4eE9F1LJfL9KBcTdwh2Gw2MZ/Pf/asUqng7XZjhYvHRHK/33E2m+HhcOCKy36/R3E5Ka+D/7se/fgDE4APYBQnD1XEu2sAAAAASUVORK5CYII=" alt=""></img>
               <div className='paraDiv'>
               <p style={{fontFamily:"Verdana,Arial,sans-serif"}} >Sign in with Apple</p>
               </div>
            </div> */}

          <div style={{ marginLeft: 110 }} className="showMoreOptions">
            <p
              style={{
                color: "#136CB2",
                fontSize: 14,
                fontfamily: " Verdana,Arial,sans-serif",
              }}
            >
              Show more Options ⮟
            </p>
          </div>
          <div style={{ marginLeft: 180, color: "#555555" }} className="or">
            {/* <hr  style={{width:100}}/> */}
            <p> Or </p>
            {/* <hr style={{width:100}} /> */}
          </div>

          <div className="CreateAccountButton" style={{ marginLeft: 100 }}>
            <button
              style={{
                height: 40,
                fontWeight: 600,
                width: 200,
                fontWeight: 400,
                fontSize: 15,
                borderRadius: 6,
                backgroundColor: "#E4B721",
                borderColor: "#E4B721",
              }}
            >
              <p
                onClick={handleSignup}
                style={{
                  marginTop: 8,
                  fontFamily: "14px Verdana,Arial,sans-serif",
                  fontWeight: 700,
                }}
              >
                Create a New Account
              </p>
            </button>
          </div>
          <div
            className="some_message"
            style={{ marginLeft: 30, marginTop: 10 }}
          >
            <p>
              By signing in, you agree to IMDb's <span>Conditions </span>
              <span> of Use </span> and <span> Privacy Policy</span>
            </p>
          </div>
        </div>
        <hr style={{ height: 370, backgroundColor: "white" }} />
        <div className="signRight">
          <h3>Benefits of your free IMDb account</h3>
          <div className="personalized">
            <h6>Personalized Recommendations</h6>
            <p>Discover shows you'll love.</p>
          </div>
          <div className="personalized">
            <h6>Your Watchlist</h6>
            <p>
              Track everything you want to watch and recieve e-mail when movies
              opens in theaters.
            </p>
          </div>
          <div className="personalized">
            <h6>Your Ratings</h6>
            <p>Rate and remember everything you've seen</p>
          </div>
          <div className="personalized">
            <h6>Contribute to IMDb</h6>
            <p>
              Add data that will be seen by millions of people and get cool
              badges.
            </p>
          </div>
        </div>
      </div>
      <div className="recenttview"  style={{}}>
        {/* <div className="recenthistory"> */}
        <div className="Recently_Viewed"  >
          <p style={{ fontFamily: "Verdana,Arial,sans-serif" }}>
            Recently Viewed
          </p>
        </div>
        <div className="viewed_p">
          <p style={{ fontFamily: "Verdana,Arial,sans-serif" }}>
            Clear your history
          </p>
          {/* </div> */}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
   
  );
};
