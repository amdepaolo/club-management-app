import React from "react";
import { Route, useRouteMatch, Switch} from "react-router-dom";
import ClubDetail from "./ClubDetail";
import ClubList from "./ClubList";
import EditClub from "./EditClub";

function ClubsPage({clubs, updateClubs, deleteClubs, updateMembership}){
    const match = useRouteMatch();
    
    return(      
        <Switch>
            <Route path={`${match.url}/:clubId/edit`}>
                <EditClub clubs={clubs} onDeleteClick={deleteClubs} onUpdateClick={updateClubs} />
            </Route>
            <Route path={`${match.url}/:clubId`}>
                <ClubDetail clubs={clubs} onMemberClick={updateMembership}/>
            </Route>
            <Route exact path={match.url}>
                <ClubList clubs={clubs} onMemberClick={updateMembership}/>
            </Route>
        </Switch>
    )
}

export default ClubsPage