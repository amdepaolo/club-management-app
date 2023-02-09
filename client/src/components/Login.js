import React, {useState} from 'react'

function Login(){

    return (
        <div>
            <h2>Log-in</h2>
            <form>
                <input type='text' placeholder='email'></input>
                <input type='text' placeholder='password'></input>
                <input type='submit'></input>
            </form>
        </div>
    )
}

export default Login