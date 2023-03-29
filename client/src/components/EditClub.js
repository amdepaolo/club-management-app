import React, {useState} from "react";
import { useHistory, useParams } from "react-router-dom";
import ClubForm from "./ClubForm";

function EditClub({clubs, onUpdateClick, onDeleteClick }){
    const params = useParams();
    const [club, setClub] = useState(clubs.find(club => club.id === parseInt(params.clubId)))
    const history = useHistory();
    function updateClubObj(key, value){
        const updatedClubObj = {...club, [key]: value};
        setClub(updatedClubObj)
    }


    function handleUpdate(e){
        e.preventDefault()
        fetch('/clubs/'+club.id, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(club)
          })
        .then(r => {if (r.ok){
            r.json().then(onUpdateClick)
          } else {window.alert("Can't update, no admin priviliges")}})
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
                }else{window.alert("Can't delete, check admin priviliges")}})
            history.push('/')
        }
    }

    return(
        <div>
            <h2>Edit Club</h2>
            <ClubForm
                club={club}
                updateClubObj={updateClubObj}
                handleSubmit={handleUpdate}
                submitValue='Save Edit'
            >    
                <button onClick={handleDelete}>Delete Club</button>
            </ClubForm>
        </div>
    )
}

export default EditClub