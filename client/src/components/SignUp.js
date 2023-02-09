import React, {useState} from "react";

function SignUp(){
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmation, setConfirmation] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        console.log({first: firstName, last: lastName, email: email})
    }

    return(
        <div>
            <h2>Sign-Up:</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    value={email} 
                    onChange={e => setEmail(e.target.value)} placeholder="email"></input>
                <input 
                    type='text' 
                    value={firstName} 
                    onChange={e => setFirstName(e.target.value)} 
                    placeholder="First Name"></input>
                <input 
                    type='text' 
                    value={lastName} 
                    onChange={e => setLastName(e.target.value)}
                    placeholder="Last Name"></input>
                <input 
                    type='password' 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"></input>
                <input 
                    type='password' 
                    value={confirmation}
                    onChange={e => setConfirmation(e.target.value)} 
                    placeholder="Confirm Password"></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default SignUp