function computerPlay() {
    let computerOptions = ['rock', 'paper', 'scissors'];
    return computerOptions[Math.floor(Math.random()*computerOptions.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            console.log('You Win! Rock beats Scissors');
            return playerScore += 1;
        } 
        else if (computerSelection === 'paper') {
            console.log('You Lose! Paper beats Rock');
            return computerScore += 1;            
        } else {
            console.log('It\'s a tie! Both chose Rock');
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            console.log('You Win! Paper beats Rock');
            return playerScore += 1;
        } else if (computerSelection === 'scissors') {
            console.log('You Lose! Scissors beats Paper');
            return computerScore += 1;
        } else {
            console.log('It\'s a tie! Both chose Paper');
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            console.log('You Win! Scissors beats Paper');
            return playerScore += 1;
        } else if (computerSelection === 'rock') {
            console.log('You Lose! Rock beats Scissors');
            return computerScore += 1;
        } else {
            console.log('It\'s a tie! Both chose Scissors');
        }
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {  
        const playerSelection = button.id;
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    });
});

/*
function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose between "rock", "paper" or "scissors"').toLowerCase();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }

    if (playerScore > computerScore) {
        console.log(`You win the game! ${playerScore} x ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You lose the game! ${playerScore} x ${computerScore}`);
    } else {
        console.log(`It\'s a tie! ${playerScore} x ${computerScore}`);
    }
}

game();
*/