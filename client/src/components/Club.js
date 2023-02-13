import React from "react";

function Club({club}){

    return(
        <div>
            <h3>{club.name}</h3>
            <p>Meeting Time: {club.meeting_time}</p>
            <p>Location: {club.meeting_area}</p>
            <p>{club.description}</p>
        </div>
    )
}

export default Club