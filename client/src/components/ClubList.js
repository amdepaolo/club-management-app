import React from "react";
import Club from "./Club";

function ClubList({clubs, onMemberClick}){

    const clubArr = clubs.map(club => <Club club={club} onMemberClick={onMemberClick} key={club.id}/>)

    return(
        <div className="clubList">
            {clubArr}
        </div>
    )
}

export default ClubList
