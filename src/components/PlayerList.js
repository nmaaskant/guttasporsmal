import React, {useState} from 'react';
import PlayerForm from './PlayerForm';
import Player from './Player'
function PlayerList() {
    const [players, setPlayers] = useState([])

    const addPlayer = player => {
        if (!player.text || /^\s*$/.test(player.text)) {
            return
        };

        const newPlayer = [player, ...players];
        setPlayers(newPlayer);
    };

    const removePlayer = id => {
        const removeArr = [...players].filter(player => player.id !==id)
        setPlayers(removeArr)
    };

    return (
        <div>
            <h1>Registrer spiller</h1>
            <PlayerForm onSubmit={addPlayer} />
            <Player
            players={players}
            removePlayer = {removePlayer}
            />
        </div>
    )
}

export default PlayerList;