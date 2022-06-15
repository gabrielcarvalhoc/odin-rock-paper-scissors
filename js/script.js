function computerPlay() {
    let computerOptions = ['Rock', 'Paper', 'Scissors'];
    return computerChoice = computerOptions[Math.floor(Math.random()*3)];
}

console.log(computerPlay());