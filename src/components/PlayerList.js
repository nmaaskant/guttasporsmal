import React, {useState} from 'react';

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
}

export default PlayerList;