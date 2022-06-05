import React, {useState} from 'react';
import PlayerForm from './PlayerForm';
import { RiCloseCircleLine } from 'react-icons/ri'

function Player ({players, removePlayer}) {

    return players.map((player) => (
        <div className="icons">
            <RiCloseCircleLine
           onClick={() => removePlayer(players.id)}
           className='delete-icon'/> 
        </div>
    ));
}

export default Player;