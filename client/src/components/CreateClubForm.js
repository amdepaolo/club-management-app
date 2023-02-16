import React, {useState} from "react";

function CreateClubForm({updateClubs}){
    const[name, setName] = useState('');
    const[description, setDescription]= useState('');
    const[time, setTime] = useState('');
    const[location, setLocation] = useState('');
    const[maxMembers, setMaxMembers] = useState(0);

    function handleSubmit(e){
        const clubObj = {name: name, description: description, meeting_time: time, meeting_area: location, max_membership: maxMembers};
        e.preventDefault()
        fetch('/clubs', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(clubObj),
          })
        .then(r => r.json())
        .then(r => updateClubs(r))
    }

    return(
        <div>
            <h2>Create a Club</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder='Club Name'
                />
                <input
                    type='text'
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    placeholder='Meeting Time'
                />
                <input
                    type='text'
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    placeholder='Meeting Area'
                />
                <label>Maximum Members:</label>
                <input
                    type='number'
                    value={maxMembers}
                    onChange={e => setMaxMembers(e.target.value)}
                />
                <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder='Enter a brief description'
                />
                <input type='submit' />
            </form>
        </div>
    )
}

export default CreateClubForm