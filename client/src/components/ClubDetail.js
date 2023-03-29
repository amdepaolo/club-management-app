import React from "react";
import Club from "./Club";
import Roster from "./Roster";
import { useParams } from "react-router-dom";

function ClubDetail({clubs, addMembership, removeMembership}){
    const params = useParams()
    const selectedClub = clubs.find(club => club.id === parseInt(params.clubId))

    return(
        <div id="display">
            <Club club={selectedClub} addMembership={addMembership} removeMembership={removeMembership}/>
            <div>
                <h2>Club Administrator:</h2>
                <p>{selectedClub.admin.first_name} {selectedClub.admin.last_name}</p>
                <Roster club={selectedClub}/>
            </div>
        </div>
    )
}

export default ClubDetail