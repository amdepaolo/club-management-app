import { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import CreateClubForm from "./components/CreateClubForm";

function App() {
  const [user, setUser] = useState(null)
  useEffect(()=>{
    fetch('/me')
    .then(r => {if (r.ok){
      r.json().then(user => setUser(user))
    }})
  },[]);

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
      <p> This is a placeholder, the app will come later and will look better</p>
      {user? <p>User logged in</p>: <p>No User logged in</p>}
      <button onClick={logOut}>Log Out</button>
      <CreateClubForm />
    </div>
  );
}

export default App;