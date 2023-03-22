import React from "react";
import { Link } from "react-router-dom";

function Profile({user, clubs}){

    const joinedClubs = clubs.filter(club => club.member_id)
    const userClubsList = joinedClubs.map(club => <li key={club.id}>{club.name}</li>)

    return(
        <div id="profile">
            <h2>Profile:</h2>
            <h3>{user.first_name} {user.last_name}</h3>
            <p><b>Bio:  </b>{user.bio}</p>
            <ul>
                <p><b>Clubs: </b></p>
                {userClubsList}
            </ul>
            <Link to='/profile/edit'>Edit Your Profile? </Link>
        </div>
    )
}

export default Profile