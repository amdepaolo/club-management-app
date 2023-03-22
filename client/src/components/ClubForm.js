import React from "react";

function ClubForm({club, updateClubObj, submitValue, handleSubmit, children}){

    return(
        <form onSubmit={handleSubmit}>
                <label><b>Club Name: </b></label>
                <input 
                    type='text'
                    value={club.name}
                    onChange={e => updateClubObj('name', e.target.value)}
                />
                <label><b>Meeting Time: </b></label>
                <input
                    type='text'
                    value={club.meeting_time}
                    onChange={e => updateClubObj('meeting_time', e.target.value)}
                />
                <label><b>Meeting Area: </b></label>
                <input
                    type='text'
                    value={club.meeting_area}
                    onChange={e => updateClubObj('meeting_area', e.target.value)}
                    placeholder='Meeting Area'
                />
                <label><b>Maximum Members: </b></label>
                <input
                    type='number'
                    value={club.max_membership}
                    onChange={e => updateClubObj('max_membership', e.target.value)}
                />
                <label><b>Description: </b></label>
                <textarea
                    value={club.description}
                    onChange={e => updateClubObj('description', e.target.value)}
                    placeholder='Enter a brief description'
                />
                <input type='submit' value={submitValue}/>
                {children}
            </form>
    )
}

export default ClubForm