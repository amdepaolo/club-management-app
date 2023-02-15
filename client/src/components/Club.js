import React from "react";

function Club({club}){

    function handleJoin(){
        fetch('/clubs/'+club.id+'/memberships', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            }
          })
          .then(r => r.json())
          .then(r => console.log("Membership created:", r))
    }

    return(
        <div>
            <h3>{club.name}</h3>
            <p>Meeting Time: {club.meeting_time}</p>
            <p>Location: {club.meeting_area}</p>
            <p>{club.description}</p>
            <button onClick={handleJoin}>Join Club</button>
        </div>
    )
}

export default Club