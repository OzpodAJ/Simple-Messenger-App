import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
    display: "inline-block",
    width: "60px",
    padding: "12px",
    margin: "0px 6px 6px",
    background: "purple",
    textDecoration: "none",
    color: "white",
};

function NavBar(){
    return (
        <div>
            <NavLink 
                to = "/"
                exact
                style = {linkStyles}
                activeStyle = {{background: "#301934"}}
            > 
                Login </NavLink>
            <NavLink 
                to = "/messageboard"
                exact
                style = {linkStyles}
                activeStyle = {{background: "#301934"}}
            >
                 Messenger</NavLink>
            <NavLink 
                to = "/about"
                exact
                style = {linkStyles}
                activeStyle = {{background: "#301934"}}
            >
                About</NavLink>
        </div>
    )
}

export default NavBar