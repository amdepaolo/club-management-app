import React from "react";
import { Link } from "react-router-dom";

function Club({club, addMembership, removeMembership}){

    function handleJoin(){
        fetch('/clubs/'+club.id+'/memberships', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            }
          })
          .then(r => r.json())
          .then(addMembership)
    }

    function handleLeave(){
        fetch('/clubs/'+club.id+'/memberships/'+club.member_id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(r=> {if(r.ok){ removeMembership(club.id)
        }})
    }

    const joinButton = <button onClick={handleJoin}>Join Club</button>;
    const leaveButton = <button onClick={handleLeave}>Leave Club</button>


    return(
        <div className="club">
            <h3>{club.name}</h3>
            <p><b>Meeting Time: </b> {club.meeting_time}</p>
            <p><b>Location: </b>{club.meeting_area}</p>
            <p><b>Description:</b> {club.description}</p>
            <p> <b>Members:</b> {club.current_memberships} of {club.max_membership} enrolled </p>
            {club.member_id? leaveButton:joinButton}
            <Link to={`/clubs/${club.id}`}><button>View</button></Link>
            <Link to={`/clubs/${club.id}/edit`}><button>Edit?</button></Link>
        </div>
    )
}

export default Club