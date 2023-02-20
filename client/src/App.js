import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CreateClubForm from "./components/CreateClubForm";
import ClubList from "./components/ClubList";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";
import EditClub from "./components/EditClub";

function App() {
  const [user, setUser] = useState(null)
  const [clubs, setClubs] = useState([])
  const [selectedClub, setSelectedClub] = useState({})

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

  function changeSelected(id){
    const clubToSelect = clubs.find(club => club.id === id);
    setSelectedClub(clubToSelect);
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
    const updatedClubsList = clubs.map(club =>{
      if (id === club.id) {
        return {...club, member_id: memberStatus }
      } else return club
    });
    console.log (updatedClubsList)
    setClubs(updatedClubsList)
  };

  if (!user) return( <LandingPage setUser={setUser} /> )

  else return (
    <div className="App">
      <NavBar />
      <h1>Club Connection!</h1>
      <button onClick={logOut}>Log Out</button>
      <Switch>
        <Route exact path='/profile'>
          <Profile user={user}/> 
        </Route>
        <Route exact path='/create'>
          <CreateClubForm addClubs={addClubs} />
        </Route>
        <Route exact path='/edit'>
          <EditClub club={selectedClub} onUpdateClick={updateClubs} onDeleteClick={deleteClubs}/>
        </Route>
        <Route exact path='/clubs'>
          <ClubList clubs={clubs} onEditClick={changeSelected} onMemberClick={updateMembership}/>
        </Route>
        <Route path='/'>
          <Redirect to='/clubs'/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;