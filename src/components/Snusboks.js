import '../Styles/Snusboks.css';
import React, { useState } from "react";

let questions = [
    "Hvem har mest milf mor?",
    "Hvem har den diggeste søsteren?",
    "Hvem av er mest skitten?",
    "Hvem suger til å chugge?",
    "Hvem har mest draget?",
    "Hvem hadde du vært homo for?",
    "Hvem hadde sett best ut som motsatt kjønn?"
    ];

let challenges = [
    "Chugge resten av drikka",
    "Ta 10 pushups",
    "Dele ut 5 slurker",
    "Utfordre noen til armbakk",
    "Storytime!",
    "Ta av et klesplagg"
    ];
/*
let colors = [
    color:cornflowerblue;
    color:deeppink;
    color:goldenrod;
    color:lightcoral;
    color:lightseagreen;
    color:mediumpurple;
    color:rosybrown;
    color:violet;
]
*/

function sortQuestions(){
    questions.sort(() => Math.random() - 0.5);
    challenges.sort(() => Math.random() - 0.5);
}


function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";

    document.body.style.background = bgColor;
}
sortQuestions();
random_bg_color();

function Snusboks(props){
    const [count, setCount] = useState(0);
    const [isChallenge, setChallenge] = useState(false);
    const [challengeCount, setChallengeCount] = useState(-1);

    //Når next knappen trykkes: Ny bakgrunnsfarge, 10% sjangs for utfordring, neste spørsmål ellers
    const next = () => {
        random_bg_color();
        let numb = Math.random();
        if (numb < 0.1){
            setChallenge(true);
            setChallengeCount(challengeCount + 1)
        }
        else{
            setCount(count + 1);
            setChallenge(false);
        }
    }

    //Når tilbake knappen trykkes: Ny bakgrunnsfarge, spørsmålscounter tilbake 1.
    const previous = () => {
        if (isChallenge) setChallenge(false);
        else{
        if(count>0) {setCount(count - 1);
        random_bg_color();
        }}
    }

    for (let i = 10; i < Snusboks.count; i += 10) {

        if(i === 10) {
    return(
        <div className="Snusboks">
            <button onClick={previous} className="PrevButton">forrige spørsmål</button>
                <div className="quest">
                    <h3> Chugg!</h3>
                </div>
            <button onClick={next} className="NextButton">Neste spørsmål</button>
        </div>
    )
        }
    else {
        return(
            <div className="Snusboks">
                <button onClick={previous} className="PrevButton">forrige spørsmål</button>
                    <div className="quest">
                        <p> {isChallenge ? "Utfordring!" :"Spørsmål "+ (count+1) + " av 100"}</p>
                        <h3> {isChallenge ? challenges[challengeCount] : questions[count]}</h3>
                    </div>
                <button onClick={next} className="NextButton">Neste spørsmål</button>
            </div>
        )
    }
    }
    }


export default Snusboks;