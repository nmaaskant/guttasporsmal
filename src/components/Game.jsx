import '../Styles/Game.css';

function Game() {

    return (
        <div className="Game">
            <button className="ButtonPrev"> Forrige spørsmål</button>
            <button className="GameDisplay"> SPILL </button>
            <button className="ButtonNext"> Neste spørsmål </button>
        </div>
    );
};

export default Game;