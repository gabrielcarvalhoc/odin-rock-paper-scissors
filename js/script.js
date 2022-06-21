const buttons = document.querySelectorAll('button');

let results = document.querySelector('.results');
let score = document.querySelector('.score');
let winner = document.querySelector('.winner');

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let computerOptions = ['rock', 'paper', 'scissors'];
    return computerOptions[Math.floor(Math.random()*computerOptions.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            results.textContent = 'You Win! Rock beats Scissors!';
            return playerScore += 1;
        } 
        else if (computerSelection === 'paper') {
            results.textContent = 'You Lose! Paper beats Rock!';
            return computerScore += 1;            
        } else {
            results.textContent = 'It\'s a tie! Both chose Rock!';
        }

    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            results.textContent = 'You Win! Paper beats Rock!';
            return playerScore += 1;
        } else if (computerSelection === 'scissors') {
            results.textContent = 'You Lose! Scissors beats Paper!';
            return computerScore += 1;
        } else {
            results.textContent = 'It\'s a tie! Both chose Paper!';
        }

    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            results.textContent = 'You Win! Scissors beats Paper!';
            return playerScore += 1;
        } else if (computerSelection === 'rock') {
            results.textContent = 'You Lose! Rock beats Scissors!';
            return computerScore += 1;
        } else {
            results.textContent = 'It\'s a tie! Both chose Scissors!';
        }
    }
}

function showScore() {
    if (playerScore < 5 && computerScore < 5) {
        score.textContent = `Player ${playerScore} x ${computerScore} Computer`;
    } else if (playerScore === 5) {
        score.textContent = `Player ${playerScore} x ${computerScore} Computer`;
        winner.textContent = 'Congrats! You Win the Game!'
    } else if (computerScore === 5) {
        score.textContent = `Player ${playerScore} x ${computerScore} Computer`;
        winner.textContent = 'Oh No! You Lose the Game! Try again!'
    }
}

buttons.forEach((button) => {
        
    button.addEventListener('click', () => {
        if (playerScore < 5 && computerScore < 5) {
            const playerSelection = button.id;
            const computerSelection = computerPlay();
            playRound(playerSelection, computerSelection);
            showScore();
        }
    });
});