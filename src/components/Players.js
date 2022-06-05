import React, {useState} from 'react';
import { RiCloseCircleLine } from 'react-icons/ri'

function Player ({players, removePlayer}) {

    return players.map((players)) (
        <div className="icons">
            <RiCloseCircleLine
           onClick={() => removePlayer(players.id)}
           className='delete-icon'/> 
        </div>
    )
}

export default Player;