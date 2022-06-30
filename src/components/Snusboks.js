import '../Styles/Snusboks.css';
import React, { useState } from "react";
import Questions from './Questions';
import Challenges from './Challenges';
import Memes from './Memes';


let colors = [
    "69, 39, 160", 
    "0, 137, 123",
    "191, 54, 12",
    "233, 30, 99",
    "0, 137, 123",
    "124, 77, 255",
    "255, 82, 82",
    "69, 90, 100",
    "255, 112, 67",
    "251, 192, 45",
    "197, 17, 98",
    "77, 182, 172",
    "66, 165, 245",
    "255, 214, 0",
    "0, 200, 83",
    "0, 105, 92",
    "26, 35, 126",
    "106, 27, 154",
    "191, 54, 12",
    "78, 52, 46",
    "239, 83, 80",
    "2, 136, 209",
    "41, 98, 255",
    "0, 200, 83",
    "255, 171, 0",
    "213, 0, 0",
    "102, 205, 170",
    "255, 193, 193",
    "244, 164, 96",
    "255, 127, 36",
    "162, 205, 90",
    "124 252, 0",
    "255, 165, 0",
    "255, 36, 0",
    "255, 62, 150",
    "255, 0, 255",
    "255, 185, 15",
    "238, 220, 130",
    "255, 215, 0"
]


let questions = Questions();
let challenges = Challenges();
let gifs = Memes();

function random_bg_color() {
    let num_colors = colors.length;
    let random_number = (Math.floor((Math.random() * num_colors) + 1)-1);
    let bgColor = "rgb(" + colors[random_number] + ")";
    document.body.style.background = bgColor;
}
random_bg_color();

function Snusboks(props){

    const [count, setCount] = useState(0);
    const [isChallenge, setChallenge] = useState(false);
    const [challengeCount, setChallengeCount] = useState(-1);
    const [isSkål, setSkål] = useState(false);
    const [anim, setAnim] = useState(true);

    let spørsmålSkål = count+1 + " spørsmål!";
    let skåler = "alle drikker " + (count+1)/10 + " slurker";




    //Når next knappen trykkes: Ny bakgrunnsfarge, 10% sjangs for utfordring, neste spørsmål ellers
    const next = () => {
        random_bg_color();
        setAnim(true);
        if((count+1)%10===0 && !isSkål){
            setSkål(true);
            return;
        }
        let numb = Math.random();
        if (numb < 0.06 && !isSkål){
            setChallenge(true);
            setChallengeCount(challengeCount + 1)
        }
        else{
            setCount(count + 1);
            setChallenge(false);
            setSkål(false);
        }
    }

    //Når tilbake knappen trykkes: Ny bakgrunnsfarge, spørsmålscounter tilbake 1.
    const previous = () => {
        if(isSkål) {
            setSkål(false);
            return;
        }
        if (isChallenge) setChallenge(false);
        else{
        if(count>0) {setCount(count - 1);
            random_bg_color();
            setAnim(true);
        }}
    }

    const restart = () => {
        random_bg_color();
        setAnim(true);
        questions = Questions();
        challenges = Challenges();
        setCount(0);
        setChallengeCount(0);
        setSkål(false);
        setChallenge(false);
    }



    return(

        <div className="Snusboks">
            <div className="Buttons">
                <button onClick={previous} className="PrevButton"></button>
                <button onClick={count<=99 ? next : restart} className="NextButton"></button>
            </div>
            <div className="Text">
                    <p className="Spørsmål"> {count > 99 ? "Trykk for å starte på nytt" : (isChallenge ? "Utfordring!" : "Spørsmål " + (count+1) + " av 100")}</p>
                    <p className="HvemAvGutta"> {count > 99 ? "" : (isSkål ? spørsmålSkål : (isChallenge ? "Den med boksen må..." : "Hvem av gutta..."))}</p>
                    <h3 className={anim ? "ChallengeAnim" : "Challenge"} onAnimationEnd={() => setAnim(false)}> {count > 99 ? <img src={gifs[10]} alt="Trykk for å starte på nytt"/> : (isSkål ? skåler : (isChallenge ? challenges[challengeCount] : questions[count]))}</h3>
                    <p className='Meme'> {isSkål ? <img src={gifs[((count+1)/10)-1]} alt="Skål!"/> : "" }</p>
            </div>
        </div>
    )
}


export default Snusboks;