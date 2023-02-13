import React from "react";
import Club from "./Club";

function ViewClubs({clubs}){

    const clubArr = clubs.map(club => <Club club={club} key={club.id}/>)

    return(
        <div>
            {clubArr}
        </div>
    )
}

export default ViewClubs
