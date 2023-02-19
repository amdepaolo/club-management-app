import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function EditClub({club, onUpdateClick, onDeleteClick}){
    const[name, setName] = useState(club.name);
    const[description, setDescription]= useState(club.description);
    const[time, setTime] = useState(club.meeting_time);
    const[location, setLocation] = useState(club.meeting_area);
    const[maxMembers, setMaxMembers] = useState(club.max_membership);
    const history = useHistory();


    function handleSubmit(e){
        e.preventDefault()
        const clubObj = {name: name, description: description, meeting_time: time, meeting_area: location, max_membership: maxMembers};
        fetch('/clubs/'+club.id, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(clubObj)
          })
        .then(r => r.json())
        .then(r => onUpdateClick(r))
    }

    function handleDelete(){
        if(window.confirm("Delete Club?")){
            fetch('/clubs/'+club.id, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                }})
                .then(r => {if (r.ok){
                    onDeleteClick(club.id)
                }})
            history.push('/')
        }
    }

    return(
        <div>
            <h2>Edit Club</h2>
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
                <input type='submit' value='Save Edit'/>
            </form>
            <button onClick={handleDelete}>Delete Club</button>
        </div>
    )
}

export default EditClub