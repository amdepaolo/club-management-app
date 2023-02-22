import React from "react";
import Club from "./Club";
import Roster from "./Roster";
import { useParams } from "react-router-dom";

function ClubDetail({clubs, onMemberClick}){
    const params = useParams()
    const selectedClub = clubs.find(club => club.id === parseInt(params.clubId))

    return(
        <div>
            <Club club={selectedClub} onMemberClick={onMemberClick}/>
            <Roster club={selectedClub}/>
        </div>
    )
}

export default ClubDetail