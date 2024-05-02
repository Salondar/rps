const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const buttons = document.querySelector('.buttons');
const header = document.querySelector('h3');
const reset = document.querySelector('.reset-container');
let player_score = 0;
let computer_score = 0;
let resetButton;


function getComputerChoice() {
    const ROCK = 0;
    const PAPER = 1;
    const SCISSORS = 2;

    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === ROCK) {
        return `rock`;
    }
    else if (randomNumber === PAPER) {
        return `paper`;
    }
    else if (randomNumber === SCISSORS) {
        return `scissors`;
    }
}

function playGame(playerChoice) {
    computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) {
        header.textContent = "Tie!";
    }
    else if (playerChoice === `rock`) {
        if (computerChoice === `paper`) {
            header.textContent = `You lost! ${computerChoice} beats ${playerChoice}`;
            header.style.color = 'red';
            computer_score++;
        }
        else {
            header.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
            header.style.color = '#016064';
            player_score++;
        }
    }
    else if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
            header.textContent = `You lost! ${computerChoice} beats ${playerChoice}`;
            header.style.color = 'red';
            computer_score++;
        }
        else {
            header.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
            header.style.color = '#016064';
            player_score++;
        }
    }
    else if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
            header.textContent = `You lost! ${computerChoice} beats ${playerChoice}`;
            header.style.color = 'red';
            computer_score++;
        }
        else {
            header.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
            header.style.color = '#016064';
            player_score++;
        }
    }
    playerScore.textContent = `Player: ${player_score}`;
    computerScore.textContent = `Computer: ${computer_score}`;

    if (player_score === 5) {
        header.textContent = "You Won!"
        setGameOver();
    }
    else if (computer_score === 5) {
        header.textContent  = "You Lost!";
        setGameOver();
    }
}

buttons.addEventListener("click", (event)=> {
    let target = event.target
    switch(target.id) {
        case 'rock':
            playGame('rock');
            break;
        case 'paper':
            playGame('paper');
            break;
        case 'scissors':
            playGame('scissors');
            break;
    }
});

function setGameOver() {
    resetButton = document.createElement('button');
    reset.appendChild(resetButton);

    reset.style.display = "flex";
    reset.style.justifyContent = "center";
    resetButton.textContent = "Restart Game";
    resetButton.style.height = "30px";
    resetButton.style.width = "120px";
    resetButton.style.marginTop = "15px";
    resetButton.style.backgroundColor = "#016064";
    resetButton.style.color = "white";
    resetButton.style.border = "none";
    resetButton.style.borderRadius = "12px";

    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    player_score = 0;
    computer_score = 0;

    playerScore.textContent = `Player: ${player_score}`;
    computerScore.textContent = `Computer: ${computer_score}`;
    header.style.color = "#016064";
    header.textContent = "Click One To Play";
    reset.removeChild(resetButton);
}