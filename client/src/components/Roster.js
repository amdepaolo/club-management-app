import React from "react";

function Roster({club}){
    const members =  club.users
    const roster = members.map(member => <li key={member.id}>{member.first_name} {member.last_name}</li>)

    return(
        <div>
            <ul>
                <h2>Club Roster:</h2>
                {roster}
            </ul>
        </div>
    )
}

export default Roster