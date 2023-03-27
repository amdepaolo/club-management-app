import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import ClubForm from "./ClubForm";

function CreateClub({addClubs}){
    const[club, setClub] = useState({name: '', description: '', meeting_time: '', meeting_area: '', max_membership:0})
    const history = useHistory()
    function updateClubObj(key, value){
        const updatedClubObj = {...club, [key]: value};
        setClub(updatedClubObj)
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch('/clubs', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(club),
          })
        .then(r => r.json())
        .then(addClubs)
        history.push('/')
    }

    return(
        <div>
            <h2>Create a Club</h2>
            <ClubForm 
                club={club} 
                updateClubObj={updateClubObj} 
                handleSubmit={handleSubmit}
                submitValue='Create Club'
            />
        </div>
    )
}

export default CreateClub