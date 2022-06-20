import '../Styles/Snusboks.css';
import React, { useState } from "react";
import Questions from './Questions';

let questions = [
    "Hvem av gutta har mest milf mor?",
    "Hvem av gutta har den diggeste søsteren?",
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
    const [isSkål, setSkål] = useState(false);

    let skåler = <div>
        <h3>{count+1} spørsmål!</h3>
        <p>alle drikker {(count+1)/10} slurker</p>
        </div>;



    //Når next knappen trykkes: Ny bakgrunnsfarge, 10% sjangs for utfordring, neste spørsmål ellers
    const next = () => {
        random_bg_color();
        if((count+1)%10===0 && !isSkål){
            setSkål(true);
            return;
        }
        setSkål(false);
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
        if(isSkål) setSkål(false);
        if (isChallenge) setChallenge(false);
        else{
        if(count>0) {setCount(count - 1);
        random_bg_color();
        }}
    }

    return(
        <div className="Snusboks">
            <div className="Buttons">
                <button onClick={previous} className="PrevButton"></button>
                <button onClick={next} className="NextButton"></button>
            </div>
            <div className="Text">
                    <p className="Spørsmål"> {isChallenge ? "Utfordring!" :"Spørsmål "+ (count+1) + " av 100"}</p>
                    <h3 className="Challenge"> {isSkål ? skåler : (isChallenge ? challenges[challengeCount] : questions[count])}</h3>
            </div>
        </div>
    )
}


export default Snusboks;