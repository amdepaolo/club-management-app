import React from "react";
import { Link } from "react-router-dom";

function Club({club, onMemberClick}){

    function handleJoin(){
        fetch('/clubs/'+club.id+'/memberships', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            }
          })
          .then(r => r.json())
          .then(r => onMemberClick(r.club_id, r.id))
    }

    function handleLeave(){
        fetch('/clubs/'+club.id+'/memberships/'+club.member_id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(r=> {if(r.ok){ onMemberClick(club.id, false)
        }})
    }

    const joinButton = <button onClick={handleJoin}>Join Club</button>;
    const leaveButton = <button onClick={handleLeave}>Leave Club</button>


    return(
        <div>
            <h3>{club.name}</h3>
            <p>Meeting Time: {club.meeting_time}</p>
            <p>Location: {club.meeting_area}</p>
            <p>{club.description}</p>
            <p> Members: {club.current_memberships} of {club.max_membership} enrolled </p>
            {club.member_id? leaveButton:joinButton}
            <Link to={`/clubs/${club.id}`}>View</Link>
            <Link to={`/clubs/${club.id}/edit`}>Edit?</Link>
        </div>
    )
}

export default Club