import React, {useState} from "react";

function SignUp(){

    return(
        <div>
            <h2>Sign-Up:</h2>
            <form>
                <input type='text' placeholder="email"></input>
                <input type='text' placeholder="First Name"></input>
                <input type='text' placeholder="Last Name"></input>
                <input type='password' placeholder="Password"></input>
                <input type='password' placeholder="Confirm Password"></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default SignUp