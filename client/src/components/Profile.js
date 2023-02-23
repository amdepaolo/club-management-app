import React from "react";
import { Link } from "react-router-dom";

function Profile({user, clubs}){

    const joinedClubs = clubs.filter(club => club.member_id)
    const userClubsList = joinedClubs.map(club => <li key={club.id}>{club.name}</li>)

    return(
        <div>
            <h2>Profile:</h2>
            <h3>{user.first_name} {user.last_name}</h3>
            <p>Bio: {user.bio}</p>
            <ul>
                <p>Clubs:</p>
                {userClubsList}
            </ul>
            <Link to='/profile/edit'>Edit Your Profile? </Link>
        </div>
    )
}

export default Profile