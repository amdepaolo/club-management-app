import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import Profile from "./Profile";
import EditUser from "./EditUser";

function UserPage({user, setUser, clubs}){
    const match = useRouteMatch();

    return(
        <Switch>
            <Route exact path={match.url}>
                <Profile 
                    user={user}
                    clubs={clubs} />
            </Route>
            <Route path={`${match.url}/edit`}>
                <EditUser user={user} setUser={setUser}/>
            </Route>
        </Switch>
    )
}

export default UserPage