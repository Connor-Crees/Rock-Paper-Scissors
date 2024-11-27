// Rock Paper Scissors game made in Javascript as part of the odin project
// https://github.com/Connor-Crees/Rock-Paper-Scissors

// global variables
let roundNum = 0;
let playerScore = 0;
let computerScore = 0;
let gameOver = false;

// Buttons
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// Button event listeners
rockButton.addEventListener("click", function(event){playGame(1, "rock");});
paperButton.addEventListener("click", function(event){playGame(1, "paper");});
scissorsButton.addEventListener("click", function(event){playGame(1, "scissors");});

// Text Divs
const scoreDiv = document.getElementById("score");
const choiseDiv = document.getElementById("choice");

// Start function, called at the start of the program
function Start(){
    console.log("Rock Paper Scissors!")

    

    // playGame(5);
}

// Updates the current score to the score Div
function updateScore(){
    scoreDiv.textContent = "Player = " + playerScore.toString() + " Computer = " + computerScore.toString();

    if (playerScore == 5) {
        scoreDiv.textContent = scoreDiv.textContent + " You Win!";
        gameOver = true;
    }
    if (computerScore == 5){
        scoreDiv.textContent = scoreDiv.textContent + " Computer Wins!";
        gameOver = true;
    }
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

// Gets the player's choice of move from a prompt
function getPlayerChoice(){
    return prompt("Choose \"Rock\" \"Paper\" or \"Scissors\":").toLocaleLowerCase();
}

function playRound(playerChoice, computerChoice){   
    // player wins
    if ((playerChoice == "rock" && computerChoice == "scissors") || (playerChoice == "paper" && computerChoice == "rock") || (playerChoice == "scissors" && computerChoice == "paper")) {
        choiseDiv.textContent = ("Your " + playerChoice + " beats the computer's " + computerChoice + ". Round won!");
        playerScore++;
    }
    // computer wins
    else if ((playerChoice == "rock" && computerChoice == "paper") || (playerChoice == "paper" && computerChoice == "scissors") || (playerChoice == "scissors" && computerChoice == "rock")) {
        choiseDiv.textContent = ("The computer's " + computerChoice + " beats your " + playerChoice + ". Round lost!");
        computerScore++;
    }
    // draw 
    else {
        choiseDiv.textContent = ("You both picked " + playerChoice + ". Round draw!");
    }   

    // show score
    console.log("Score: \nYou: " + playerScore.toString() + "\nComputer: " + computerScore.toString());
    updateScore()
}

function playGame(rounds = 1, playerChoice="popup"){
    if(gameOver){return;}

    for (let i = 0; i < rounds; i++) {
         // show round number
        console.log("Round " + (++roundNum).toString());
        
        // if choice is a popup get choices
        if(playerChoice == "popup") {
            playerChoice = getPlayerChoice();
        }
        console.log("You chose: " + playerChoice);
        const computerChoice = getComputerChoice();

        // evaluate round
        playRound(playerChoice, computerChoice);
    }
}












Start();