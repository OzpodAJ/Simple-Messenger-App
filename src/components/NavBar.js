import React from "react";
import { NavLink } from "react-router-dom";
import Timestamp from "./Timestamp"

const linkStyles = {
    textAlign: "center",
    display: "inline-block",
    width: "fit-content",
    borderRadius: "15px",
    padding: "12px",
    margin: "0px 6px 6px",
    background: "#4DE71D",
    textDecoration: "none",
    color: "white",
};

function NavBar(){
    return (
        <div id="navBar">
            <Timestamp />
            <NavLink 
                to = "/home"
                exact
                style = {linkStyles}
                activeStyle = {{background: "#379C18"}}
            > 
                Login </NavLink>
            <NavLink 
                to = "/messageboard"
                exact
                style = {linkStyles}
                activeStyle = {{background: "#379C18"}}
            >
                 Messenger</NavLink>
            <NavLink 
                to = "/about"
                exact
                style = {linkStyles}
                activeStyle = {{background: "#379C18"}}
            >
                About</NavLink>
        </div>
    )
}

export default NavBar