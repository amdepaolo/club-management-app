import React from "react";
import { Route, useRouteMatch, Switch} from "react-router-dom";
import ClubDetail from "./ClubDetail";
import ClubList from "./ClubList";
import EditClub from "./EditClub";

function ClubsPage({clubs, updateClubs, deleteClubs, addMembership, removeMembership}){
    const match = useRouteMatch();
    
    return(      
        <Switch>
            <Route path={`${match.url}/:clubId/edit`}>
                <EditClub clubs={clubs} onDeleteClick={deleteClubs} onUpdateClick={updateClubs} />
            </Route>
            <Route path={`${match.url}/:clubId`}>
                <ClubDetail clubs={clubs} addMembership={addMembership} removeMembership={removeMembership}/>
            </Route>
            <Route exact path={match.url}>
                <ClubList clubs={clubs} addMembership={addMembership} removeMembership={removeMembership}/>
            </Route>
        </Switch>
    )
}

export default ClubsPage