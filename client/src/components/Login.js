import React, {useState} from 'react'

function Login({onLogin}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, password: password }),
          })
        .then(r => r.json())
        .then(onLogin)
    }

    return (
        <div>
            <h2>Log-in</h2>
            <form onSubmit={handleSubmit}>
                <input  
                    type='text' 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='email'></input>
                <input
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder='password'></input>
                <input type='submit' placeholder='Log-In'></input>
            </form>
        </div>
    )
}

export default Login