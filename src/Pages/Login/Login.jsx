import React from "react";
import TextField from "@mui/material/TextField";
import { Input } from "@mui/material";
import "./Login.css";

export const Login = () => {
  return (
    <div style={{ marginBottom: 10 }}>
      <div>
        <div className="imageAllBoxes">
          <div className="imdbImage">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/1200px-IMDB_Logo_2016.svg.png"
              alt=""
            />
          </div>
          <div className="signBigDiv">
            <div className="inputBoxes">
              <div className="createAccount">
                
                <p>Login</p>
              </div>

              <p className="signLabel">Email</p>
              <input type="password" className="SigninputBox" />
              <p className="signLabel">Password</p>

              <input type="text" className="SigninputBox" />

              <div className="createButton">
                <button>Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="help" >
        <p>Help</p>
        <p>Conditions of Use</p>
        <p>Privacy Notice</p>
      </div>
      <p className="copyright">
        © 1996-2022,Amazon.com, Inc. or its affiliates
      </p>
    </div>
  );
};
