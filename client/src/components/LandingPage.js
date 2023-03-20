import React, {useState} from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function LandingPage({setUser}){
    const[existingAccount, setExistingAccount] = useState(false)
    
   return (
    <div>
        <h1>Club Connection!</h1>
        {existingAccount? <Login onLogin={setUser}/>:<SignUp onSignUp={setUser}/>}
        <button onClick={()=> setExistingAccount(!existingAccount)}>
            {existingAccount? "Create a new account":"Log in to existing account"}
        </button>
    </div>
   )

}

export default LandingPage