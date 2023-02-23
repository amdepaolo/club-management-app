import React from "react";
import { Route, useRouteMatch, Switch} from "react-router-dom";
import ClubDetail from "./ClubDetail";
import ClubList from "./ClubList";
import EditClub from "./EditClub";

function ClubsPage({clubs, updateClubs, deleteClubs, updateMembership}){
    // {clubs, updateClubs, deleteClubs, updateMembership}
    const match = useRouteMatch();
    // const [clubs, setClubs] = useState([{name: '', description: '', meeting_time: '', meeting_area: '', max_membership: 0}])

    // useEffect(()=>{
    //     fetch('/clubs')
    //     .then(r => r.json())
    //     .then(r => setClubs(r))
    //   },[]);

    // function addClubs(newClub){
    //     const updatedClubsList = [...clubs, newClub];
    //     setClubs(updatedClubsList);
    // };

    // function updateClubs(editedClub){
    //     const updatedClubsList = clubs.map(club =>{
    //         if (editedClub.id === club.id) {
    //         return editedClub}
    //         else return club
    //     });
    //     setClubs(updatedClubsList);
    // };

    // function deleteClubs(deletedId){
    //     const updatedClubsList = clubs.filter(club => club.id !== deletedId);
    //     setClubs(updatedClubsList)
    // }

    // function updateMembership(id, memberStatus){
    //     const updatedClubsList = clubs.map(club =>{
    //         if (id === club.id) {
    //         return {...club, member_id: memberStatus }
    //         } else return club
    //     });
    //     setClubs(updatedClubsList)
    // };
    
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