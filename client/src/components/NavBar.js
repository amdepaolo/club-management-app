import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({logOut}){

    return(
        <div id="navBar">
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
            <NavLink
                to='/logout'
                onClick={logOut}
            >
                Log Out
            </NavLink>
        </div>
    )
}

export default NavBar