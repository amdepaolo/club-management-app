import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){

    return(
        <div>
            <NavLink
                to="/profile"
                exact
            >
                My Profile
            </NavLink>
            <NavLink
                to="/create"
                exact
            >
                Create A Club
            </NavLink>
            <NavLink
                to="/"
                exact
            >
                Clubs
            </NavLink>
        </div>
    )
}

export default NavBar