import React from "react";
import Club from "./Club";

function ViewClubs({clubs, onEditClick, onMemberClick}){

    const clubArr = clubs.map(club => <Club club={club} onEditClick={onEditClick} onMemberClick={onMemberClick} key={club.id}/>)

    return(
        <div>
            {clubArr}
        </div>
    )
}

export default ViewClubs
