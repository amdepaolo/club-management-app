import React from "react";
import { Link } from "react-router-dom";

function Club({club, addMembership, removeMembership, updateFavorite}){

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

    function handleFavorite(bool){
        fetch('/clubs/'+club.id+'/memberships/'+club.member_id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({favorite: bool})
        })
        .then(r=> {if(r.ok){r.json().then(updateFavorite)
        }})
    }

    const joinButton = <button onClick={handleJoin}>Join Club</button>;
    const leaveButton = <button onClick={handleLeave}>Leave Club</button>
    const favoriteButton = club.favorited? <button onClick={()=>handleFavorite(false)}>Un-Favorite?</button>:<button onClick={()=>handleFavorite(true)}>Favorite?</button>

    return(
        <div className="club">
            <h3>{club.name}{club.favorited? "⭐":""}</h3>
            <p><b>Meeting Time: </b> {club.meeting_time}</p>
            <p><b>Location: </b>{club.meeting_area}</p>
            <p><b>Description:</b> {club.description}</p>
            <p> <b>Members:</b> {club.current_memberships} of {club.max_membership} enrolled </p>
            {club.member_id? leaveButton:joinButton}
            {club.member_id? favoriteButton: <button disabled>Favorite?</button>}
            <Link to={`/clubs/${club.id}`}><button>View</button></Link>
            <Link to={`/clubs/${club.id}/edit`}><button>Edit?</button></Link>
        </div>
    )
}

export default Club