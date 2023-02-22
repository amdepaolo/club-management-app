import React, {useEffect, useState} from "react";

function Roster({club}){
    const [members, setMembers] = useState([])
    useEffect(()=>{
        fetch('/clubs/'+club.id+'/memberships')
        .then(r => r.json())
        .then(setMembers)
    },[])

    const roster = members.map(member => <li key={member.user.id}>{member.user.first_name} {member.user.last_name}</li>)

    return(
        <div>
            <ul>
                <h2>Club Roster:</h2>
                {roster}
            </ul>
        </div>
    )
}

export default Roster