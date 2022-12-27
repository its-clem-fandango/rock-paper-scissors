//ROCK, PAPER, SCISSORS CONSOLE GAME


//Asks players' choice and checks for correct input otherwise prompt again

function choiceChecker(){
    const askPlayerChoice = prompt("Play either Rock, Paper, or Scissors");
    let makeChoiceInsensitive = askPlayerChoice.toLowerCase();

    if (makeChoiceInsensitive === "rock"){
        return "rock"; 
    } else if (makeChoiceInsensitive === "paper"){
        return "paper";
    } else if (makeChoiceInsensitive === "scissors"){
        return "scissors";
    } else {
        alert("Oops! Looks like you made a typo, try again.");
        choiceChecker(); 
    }
}



//Computer randomly selects between rock, paper, or scissors


const gameChoices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let choice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return choice; 
}


//Play one round 


function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "scissors"){
        return console.log("You win! Rock beats scissors.");
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        return console.log("You lose! Paper beats rock.");
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        return console.log("You lose! Scissors beats paper.");
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return console.log("You win! Paper beats rock.");
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        return console.log("You lose! Rock beats scissors."); 
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        return console.log("You win! Scissors beats paper.");
    } else return console.log ("The round ended in a draw!");
}


//Play five rounds and keep score.


function game(){

    let playerScore = 0; 
    let computerScore = 0;
        
    for (i = 0; i < 5; i++){ 
        const playerSelection = choiceChecker();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);

        //if Player wins round increment by 1, if computer wins increment by 1, else both get 1
        
        if (playerSelection === "rock" && computerSelection === "scissors"){
            playerScore++;
            console.log(`Player: ${playerScore}`);
            console.log(`Computer: ${computerScore}`);
        } else if (playerSelection === "rock" && computerSelection === "paper"){
            computerScore++;
            console.log(`Player: ${playerScore}`);
            console.log(`Computer: ${computerScore}`);
        } else if (playerSelection === "paper" && computerSelection === "scissors"){
            computerScore++;
            console.log(`Player: ${playerScore}`);
            console.log(`Computer: ${computerScore}`);
        } else if (playerSelection === "paper" && computerSelection === "rock"){
            playerScore++;
            console.log(`Player: ${playerScore}`);
            console.log(`Computer: ${computerScore}`);
        } else if (playerSelection === "scissors" && computerSelection === "rock"){
            computerScore++;
            console.log(`Player: ${playerScore}`);
            console.log(`Computer: ${computerScore}`);
        } else if (playerSelection === "scissors" && computerSelection === "paper"){
            playerScore++;
            console.log(`Player: ${playerScore}`);
            console.log(`Computer: ${computerScore}`);
        } else {
            playerScore++;
            computerScore++;
            console.log(`Player: ${playerScore}`);
            console.log(`Computer: ${computerScore}`);
        }
    }

//Declare game outcome

    if (playerScore > 3){ 
        console.log("You won the game!");
    } else if (playerScore < 3) {
        console.log("You lost the game!");
    } else console.log("The game ended in a draw!");
    
}    


console.log(game());
