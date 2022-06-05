import React, { useState } from 'react';

// Function to add a new player to the game via a HTML form.
// gives a player an unique ID, can change name aswell.  

function PlayerForm(props) {
    const [input, setInput] = useState ('');

    const handleSubmit = e =>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
    };

    const handleChange = e => {
        setInput(e.target.value);
    };

    return (
        <form className="player-form" onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Add a player"
            value={input}
            name="text"
            className="player-input"
            onChange={handleChange}
        />
        <button className="player-button">Add player</button>
        </form>      
    )
}

export default PlayerForm;