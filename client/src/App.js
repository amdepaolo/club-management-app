import { useState, useEffect } from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null)
  useEffect(()=>{
    fetch('/me')
  })

  return (
    <div className="App">
      <h1>Club Connection!</h1>
      <p> This is a placeholder, the app will come later and will look better</p>
      {user? <p>User logged in</p>: <p>No User logged in</p>}
      <Login onLogin={setUser}></Login>
      <SignUp></SignUp>
    </div>
  );
}

export default App;