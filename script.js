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

function getHumanChoice() {
    let humanChoice = prompt(`Type rock paper or scissors: `);
    humanChoice = humanChoice.toLowerCase();

    return humanChoice;
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let ROUNDS = 5;

    for (let counter = 0; counter < 5; counter++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`\n\nFINAL SCORE`)
    if (humanScore === computerScore) {
        console.log(`You: ${humanScore} Computer: ${computerScore}`)
    }
    else if (humanScore > computerScore) {
        console.log(`You: ${humanScore} Computer: ${computerScore}`);
    }
    else {
        console.log(`Computer: ${computerScore} You: ${humanScore}`);
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`Tie!`);
        }
        else if (humanChoice === `rock`) {
            if (computerChoice === `paper`) {
                console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
            }
            else {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
            }
        }
        else if (humanChoice === `paper`) {
            if (computerChoice === `scissors`) {
                console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
                computerScore++;
            }
            else {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
            }
        }
        else if (humanChoice === `scissors`) {
            if (computerChoice === `rock`) {
                console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
                computerScore++;   
            }
            else {
                console.log(`You win! ${humanChoice} beats ${computerChoice}`);
                humanScore++;
            }
        }
    }
}

playGame();