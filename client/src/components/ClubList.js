import React, {useState} from "react";
import Club from "./Club";

function ClubList({clubs, addMembership, removeMembership, updateFavorite}){
    const [favorites, setFavorites] = useState(false)

    const clubsToShow = favorites? clubs.filter(club => club.favorited): clubs
    const clubArr = clubsToShow.map(club => <Club club={club} addMembership={addMembership} removeMembership={removeMembership} key={club.id} updateFavorite={updateFavorite}/>)

    return(
        <div className="clubList">
            <label>Favorites only?</label>
            <input type='checkbox' checked={favorites} onClick={()=>setFavorites(!favorites)}/>
            {clubArr}
        </div>
    )
}

export default ClubList
