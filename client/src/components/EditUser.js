import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function EditUser({user, setUser}){
    const [firstName, setFirstName] = useState(user.first_name);
    const [lastName, setLastName] = useState(user.last_name);
    const [bio, setBio] = useState(user.bio);
    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault()
        const userObj = {first_name: firstName, last_name: lastName, bio: bio};
        fetch('/users/'+user.id, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userObj)
          })
        .then(r => r.json())
        .then(r => setUser(r))
        history.push('/profile')
    }

    function handleDelete(){
        if(window.confirm("Delete User? You'll have to create a new user to continue using the app.")){
            fetch('/users/'+user.id, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                }})
                .then(r => {if (r.ok){
                   setUser(null)
                }})
        }
    }

    return(
        <div>
            <h2>Edit User:</h2>
            <form on onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input 
                    type='text' 
                    value={firstName} 
                    onChange={e => setFirstName(e.target.value)} 
                    ></input>
                <label>Last Name: </label>
                <input 
                    type='text' 
                    value={lastName} 
                    onChange={e => setLastName(e.target.value)}
                    ></input>
                <label>Bio:</label>
                <textarea
                    value={bio}
                    onChange={e => setBio(e.target.value)}
                ></textarea>
                <input type='submit' value='Save Changes'></input>
            </form>
            <button onClick={handleDelete}>Delete User?</button>
        </div>
    )

}

export default EditUser