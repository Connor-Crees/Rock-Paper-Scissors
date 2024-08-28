// Rock Paper Scissors game made in Javascript as part of the odin project
// https://github.com/Connor-Crees/Rock-Paper-Scissors

// global variables
let roundNum = 0;
let playerScore = 0;
let computerScore = 0;

// Start function, called at the start of the program
function Start(){
    console.log("Rock Paper Scissors!")

    playGame(5);
}

// Returns the computer's choice of move
function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Gets the player's choice of move from a promptRoK
function getPlayerChoice(){
    return prompt("Choose \"Rock\" \"Paper\" or \"Scissors\":").toLocaleLowerCase();
}

function playRound(playerChoice, computerChoice){   
    // player wins
    if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")) {
        console.log("Your " + playerChoice + " beats the computer's " + computerChoice + ". You win!");
        playerScore++;
    }
    // computer wins
    else if ((playerChoice == "rock" && computerChoice == "paper") || (playerChoice == "paper" && computerChoice == "scissors") || (playerChoice == "scissors" && computerChoice == "rock")) {
        console.log("The computer's " + computerChoice + " beats your " + playerChoice + ". You lose!");
        computerScore++;
    }
    // draw 
    else {
        console.log("You both picked " + playerChoice + ". It's a draw!");
    }   

    // show score
    console.log("Score: \nYou: " + playerScore.toString() + "\nComputer: " + computerScore.toString());
}

function playGame(rounds){
    for (let i = 0; i < rounds; i++) {
         // show round number
        console.log("Round " + (++roundNum).toString());
        
        // get choices
        const playerChoice = getPlayerChoice();
        console.log("You chose: " + playerChoice);
        const computerChoice = getComputerChoice();

        // evaluate round
        playRound(playerChoice, computerChoice);
    }
}












Start();