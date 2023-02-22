import React, {useState} from "react";
import { useHistory, useParams } from "react-router-dom";

function EditClub({clubs, onUpdateClick, onDeleteClick}){
    const params = useParams();
    const [club, setClub] = useState(clubs.find(club => club.id === parseInt(params.clubId)))
    const history = useHistory();
    function updateClubObj(key, value){
        const updatedClubObj = {...club, [key]: value};
        setClub(updatedClubObj)
    }


    function handleSubmit(e){
        e.preventDefault()
        fetch('/clubs/'+club.id, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(club)
          })
        .then(r => r.json())
        .then(r => onUpdateClick(r))
        history.push('/')
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
                    value={club.name}
                    onChange={e => updateClubObj('name', e.target.value)}
                />
                <input
                    type='text'
                    value={club.meeting_time}
                    onChange={e => updateClubObj('meeting_time', e.target.value)}
                />
                <input
                    type='text'
                    value={club.meeting_area}
                    onChange={e => updateClubObj('meeting_area', e.target.value)}
                    placeholder='Meeting Area'
                />
                <label>Maximum Members:</label>
                <input
                    type='number'
                    value={club.max_membership}
                    onChange={e => updateClubObj('max_membership', e.target.value)}
                />
                <textarea
                    value={club.description}
                    onChange={e => updateClubObj('description', e.target.value)}
                    placeholder='Enter a brief description'
                />
                <input type='submit' value='Save Edit'/>
            </form>
            <button onClick={handleDelete}>Delete Club</button>
        </div>
    )
}

export default EditClub