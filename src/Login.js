import React from "react";
import "./Login.css";
import { LoginUrl } from "./spotify";

function Login() {
  return (
    <div className="Login">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
        alt="spotify logo"
      />
      <a href={LoginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
