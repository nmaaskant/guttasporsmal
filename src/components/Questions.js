let questions = [
    'har mest milf mor?',
    'har den fineste søsteren?',
    'skal chugge resten av glasset', 
    'hadde du donert en nyre til',
    'hvem kommer til å dø av koffein overdose?',
    'er mest biff?',
    'er den mest skittne i senga?',
    'hadde sett best ut som en jente?',
    'er mest keeg? s/o @groggymenn2 ',
    'hadde du ikke latt søsteren din ha med hjem?',
    'drar ikke hjem med en dame idag?',
    'drar til asia for å finne seg kone?',
    'har hatt klamydia flest ganger',
    'tar med seg smårips hjem fra byen?',
    'månetlig abonnement på tinder gold?',
    "er mest skitten?",
    "suger til å chugge?",
    "har mest draget?",
    "hadde du vært homo for?",
    "hadde sett best ut som motsatt kjønn?",
    "blir en sugar daddy",
    "tar mest drogers"
]

function Questions(props){
    return questions.sort(() => Math.random() - 0.5);
}


export default Questions;