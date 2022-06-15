function computerPlay() {
    let computerOptions = ['rock', 'paper', 'scissors'];
    return computerChoice = computerOptions[Math.floor(Math.random()*computerOptions.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            return 'You Win! Rock beats Scissors';
        } 
        else if (computerSelection === 'paper') {
            return 'You Lose! Paper beats Rock';
        } else {
            return 'It\'s a Tie!';
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            return 'You Win! Paper beats Rock';
        } else if (computerSelection === 'scissors') {
            return 'You Lose! Scissors beats Paper';
        } else {
            return 'It\'s a Tie';
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            return 'You Win! Scissors beats Paper';
        } else if (computerSelection === 'rock') {
            return "You Lose! Rock beats Scissors";
        } else {
            return 'It\'s a Tie';
        }
    } else {
        return 'Invalid input';
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose between "rock", "paper" or "scissors"');
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`You selected: ${playerSelection.toLowerCase()}\nComputer selected: ${computerSelection}`);
    };
}

game();