import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return (
        <div>
            <NavLink to = "/"> Login </NavLink>
            <NavLink to = "/messenger">Messenger</NavLink>
            <NavLink to = "/about">About</NavLink>
        </div>
    )
}