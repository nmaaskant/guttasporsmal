import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri'

function Player ({players, removePlayer}) {
    

    return players.map((player) => (
        <div className="icons">
            <RiCloseCircleLine
           key={player.id} onClick={() => removePlayer(player.id)}
           className='delete-icon'/> 
        </div>
        
    ));
};

export default Player;