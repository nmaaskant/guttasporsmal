let challenges = [
    "Chugge resten av drikka",
    "Ta 10 pushups",
    "Dele ut 5 slurker",
    "Utfordre noen til armbakk",
    "Storytime!",
    "Ta av et klesplagg",
    "lese opp siste melding fra tinder",
    
]

function Challenges(props){
    return challenges.sort(() => Math.random() - 0.5);
}


export default Challenges;