import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){

    return(
        <div>
            <NavLink
                to="/profile"
            >
                My Profile
            </NavLink>
            <NavLink
                to="/create"
            >
                Create A Club
            </NavLink>
            <NavLink
                to="/clubs"
            >
                Clubs
            </NavLink>
        </div>
    )
}

export default NavBar