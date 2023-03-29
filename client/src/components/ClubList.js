import React from "react";
import Club from "./Club";

function ClubList({clubs, addMembership, removeMembership}){

    const clubArr = clubs.map(club => <Club club={club} addMembership={addMembership} removeMembership={removeMembership} key={club.id}/>)

    return(
        <div className="clubList">
            {clubArr}
        </div>
    )
}

export default ClubList
