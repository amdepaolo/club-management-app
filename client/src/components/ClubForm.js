import React from "react";

function ClubForm({club, updateClubObj, submitValue, handleSubmit}){

    return(
        <form onSubmit={handleSubmit}>
                <label>Club Name:</label>
                <input 
                    type='text'
                    value={club.name}
                    onChange={e => updateClubObj('name', e.target.value)}
                />
                <label>Meeting Time: </label>
                <input
                    type='text'
                    value={club.meeting_time}
                    onChange={e => updateClubObj('meeting_time', e.target.value)}
                />
                <label>Meeting Area: </label>
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
                <label>Description: </label>
                <textarea
                    value={club.description}
                    onChange={e => updateClubObj('description', e.target.value)}
                    placeholder='Enter a brief description'
                />
                <input type='submit' value={submitValue}/>
            </form>
    )
}

export default ClubForm