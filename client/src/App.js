import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CreateClubForm from "./components/CreateClubForm";
import ViewClubs from "./components/ViewClubs";
import Profile from "./components/Profile";

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

  if (!user) return( <LandingPage setUser={setUser} /> )

  else return (
    <div className="App">
      <h1>Club Connection!</h1>
      <button onClick={logOut}>Log Out</button>
      <Switch>
        <Route exact path='/profile'>
          <Profile user={user}/> 
        </Route>
        <Route exact path='/create'>
          <CreateClubForm />
        </Route>
        <Route exact path='/'>
          <ViewClubs clubs={clubs} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;