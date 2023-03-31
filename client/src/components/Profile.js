import React from "react";
import { Link } from "react-router-dom";

function Profile({user}){

    const joinedClubs = user.clubs
    const adminedClubs = user.administrations
    const joinedClubsList = joinedClubs.map(club => <li key={club.id}>{club.name}{club.favorited? "⭐":""}</li>)
    const adminedClubsList = adminedClubs.map(club => <li key={club.id}>{club.name}{club.favorited? "⭐":""}</li>)

    return(
        <div id="profile">
            <h2>Profile:</h2>
            <h3>{user.first_name} {user.last_name}</h3>
            <p><b>Bio:  </b>{user.bio}</p>
            <ul>
                <p><b>Member of: </b></p>
                {joinedClubsList}
            </ul>
            <ul>
                <p><b>Admin of: </b></p>
                {adminedClubsList}
            </ul>
            <Link to='/profile/edit'>Edit Your Profile? </Link>
        </div>
    )
}

export default Profile