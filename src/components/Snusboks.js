let questions = [
    "Hvem har mest milf mor?",
    "Hvem har den diggeste søsteren?",
    "Hvem av gutta er den skittneste?"
    ];

let challenges = [
    "må chugge resten av drikka for gutta",
    "Ta 10 pushups"
    ];

questions.sort(() => Math.random() - 0.5);

function Snusboks(spørsmålsnr){
    challenges.sort(() => Math.random() - 0.5);
    let numb = Math.random();
    let text = <h3>{questions[spørsmålsnr]}</h3>;
    let nummer = spørsmålsnr+=1;
    if (numb <= 0.1){
        nummer = spørsmålsnr
        text =<h3>Utfordring! {challenges[0]}</h3>;
    }
    return(
        <div>
            <p>Spørsmål {nummer} av 100</p>
            {text}
        </div>
    )
}


export default Snusboks;