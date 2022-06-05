import React, {useState} from 'react';
import PlayerForm from './PlayerForm';

function PlayerList() {
    const [player, setPlayers] = useState([])

    const addPlayer = player => {
        if (!player.text || /^\s*$/.test(player.text)) {
            return
        };

        const newPlayer = [player, ...players];
        setPlayers(newPlayer);
    };

    const removePlayer = id => {
        let updatePlayers = players.map(player => {
            if (player.id === id) {
                player.isComplete = !player.isComplete;
            }
            return player;
        });
        setPlayers(updatePlayers);
    };

    return (
        <div>
            <h1>Registrer spiller</h1>
            <PlayerForm onSubmit={addPlayer} />
            <Player 
            players={players}
            completePlayer = {completePlayer}
            removePlayer = {removePlayer}
            />
        </div>
    )
}

export default PlayerList;