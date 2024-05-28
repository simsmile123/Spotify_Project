import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <>
        <div>
        <h1>Login</h1>
        <Link to={"/home"}>Home</Link>
        <br></br>
        <Link to={"/profile"}>Profile</Link>
        <br></br>
        <Link to={"/liked-songs"}>Liked Songs</Link>
        <br></br>
        <Link to={"/top-artists"}>Top Artists</Link>
        <br></br>
        <Link to={"/top-songs"}>Top Songs</Link>
        <br></br>
        <Link to={"/explore"}>Explore</Link>
        <br></br>
        <Link to={"/inbox"}>Inbox</Link>
        <br></br>
        <Link to={"/forum"}>Forum</Link>
        </div>
        </>
    )
};

export default Login;