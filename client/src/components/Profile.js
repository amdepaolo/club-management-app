import React from "react";

function Profile({user}){

    const joinedClubs = user.clubs.map(club => <li key={club.id}>{club.name}</li>)

    return(
        <div>
            <h2>Profile:</h2>
            <h3>{user.first_name} {user.last_name}</h3>
            <ul>
                <p>Clubs:</p>
                {joinedClubs}
            </ul>
        </div>
    )
}

export default Profile