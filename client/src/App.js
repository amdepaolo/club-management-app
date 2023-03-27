import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CreateClub from "./components/CreateClub";
import NavBar from "./components/NavBar";
import ClubsPage from "./components/ClubsPage";
import UserPage from "./components/UserPage";

function App() {
  const [user, setUser] = useState(null)
  const [clubs, setClubs] = useState([])

  useEffect(()=>{
    fetch('/me')
    .then(r => {if (r.ok){
      r.json().then(user => setUser(user))
    }})
  },[]);

  useEffect(()=>{
    fetch('/clubs')
    .then(r => r.json())
    .then(r => setClubs(r))
  },[])

  function logOut(){
    fetch('/logout', {method: 'DELETE'})
    .then(r => {if (r.ok) 
      setUser(null)}
    )
  }

  function addClubs(newClub){
    const updatedClubsList = [...clubs, newClub];
    setClubs(updatedClubsList);
  };

  function updateClubs(editedClub){
    const updatedClubsList = clubs.map(club =>{
      if (editedClub.id === club.id) {
        return editedClub}
      else return club
    });
    setClubs(updatedClubsList);
  };

  function deleteClubs(deletedId){
    const updatedClubsList = clubs.filter(club => club.id !== deletedId);
    setClubs(updatedClubsList)
  }

  function updateMembership(id, memberStatus){
    const countChange = memberStatus? 1: -1;
    const updatedClubsList = clubs.map(club =>{
      if (id === club.id) {
        return {...club, member_id: memberStatus, current_memberships: club.current_memberships + countChange }
      } else return club
    });
    setClubs(updatedClubsList)
  };

  if (!user) return( <LandingPage setUser={setUser} />)

  else return (
    <div className="App">
      <NavBar logOut={logOut} />
      <h1>Club Connection!</h1>
      <Switch>
        <Route path='/logout'>
          <Redirect to='/'/>
        </Route>
        <Route path='/profile'>
          <UserPage user={user} setUser={setUser} clubs={clubs}/>
        </Route>
        <Route exact path='/create'>
          <CreateClub addClubs={addClubs} />
        </Route>
        <Route path='/clubs'>
          <ClubsPage 
            clubs={clubs} 
            updateClubs={updateClubs} 
            updateMembership={updateMembership} 
            deleteClubs={deleteClubs}/>
        </Route>
        <Route path='/'>
          <Redirect to='/clubs'/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;