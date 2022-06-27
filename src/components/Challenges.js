
let challenges = [
    "Chugge resten av drikka",
    "Ta 10 pushups",
    "Dele ut 5 slurker",
    "Utfordre noen til armbakk",
    "Storytime!",
    "Ta av et klesplagg",
    "lese opp siste melding de sendte på tinder",
    "fortelle om sin værste sex-opplevelse",
    "Velge en som skal vise sitt beste danse-move",
    ""
    
]

function Challenges(props){
    return challenges.sort(() => Math.random() - 0.5);
}


export default Challenges;

