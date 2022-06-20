let questions = [
    'har mest milf mor?',
    'har den fineste søsteren?',
    'skal chugge resten av glasset', 
    'hadde du donert en nyre til',
    'kommer til å dø av koffein overdose?',
    'er mest biff?',
    'er den mest skittne i senga?',
    'hadde sett best ut som en jente?',
    'er mest keeg? s/o @groggymenn2 ',
    'hadde du ikke latt søsteren din ha med hjem?',
    'drar ikke hjem med en dame idag?',
    'drar til asia for å finne seg kone?',
    'har hatt klamydia flest ganger',
    'tar med seg smårips hjem fra byen?',
    'månedlig abonnement på tinder gold?',
    "er mest skitten?",
    "suger til å chugge?",
    "har mest draget?",
    "hadde du vært homo for?",
    "hadde sett best ut som motsatt kjønn?",
    "blir en sugar daddy",
    "blør neseblod imorgen",
    "finner seg en sugarmom",
    "går på roids i skjul",
    "sender flest snaps på gymmen",
    "blir homo på fylla",
    "skal sette på neste sang",
    "slepper ikke inn på byen ikveld",
    "må drikke mer",
    "kan ikke alfabetet",
    "har værst moves",
    "har best moves",
    "tror de kan synge",
    "prøver seg mest på russ",
]

function Questions(props){
    return questions.sort(() => Math.random() - 0.5);
}


export default Questions;