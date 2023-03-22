import React, {useState} from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function LandingPage({setUser}){
    const[existingAccount, setExistingAccount] = useState(false)

    function swapForm(){
        setExistingAccount(!existingAccount)
    }
    
   return (
    <div>
        <h1>Club Connection!</h1>
        {existingAccount? <Login onLogin={setUser} swapForm={swapForm}/>:<SignUp onSignUp={setUser} swapForm={swapForm}/>}
    </div>
   )

}

export default LandingPage