//create a rock-paper-scissors game where YOU play against the COMPUTER
//(a function getcompchoice will randomly return RPS).
//the game will take input from the user and will play a round
//if input is typed incorrectly ask user to try again
//the game repeats five times, asking user for input everytime

//Play rock-paper-scissors
// start game
    //ask user for typed input
    //choices are between rock-paper-scissors
//computer randomly selects between rock-paper-scissors
//save and accept input if typed correctly(regardless of case)
//once selection is made check it against the computer
//if user selects rock then computer needs to select paper to win
//if user selects paper then computer needs to select scissors to win
//if user selects scissors then computer needs rock to win
//if user and computer select the same choice then its a draw
    //side note: does the draw choice need to be the first if checked

//or should i be thinking about it like:
//if computer selects rock, user needs paper to win...
//declare winner or draw

//simplify it first by making game run once
//repeat game 5 times

//Ask question and check for correct input
function choiceChecker(){ //Play game on condition rock or paper or scissors is true else re-prompt
    const askPlayerChoice = prompt("Play either Rock, Paper, or Scissors"); //Ask for user input and save it in the variable askPlayerInput
    const makeChoiceInsensitive = askPlayerChoice.toLowerCase();//create a new variable that saves the players input and makes it all lowercase

    if (makeChoiceInsensitive === "rock"){
        return "rock"; //return rock so that the value of choicechecker becomes rock. Remember, functions are values
    } else if (makeChoiceInsensitive === "paper"){
        return "paper";
    } else if (makeChoiceInsensitive === "scissors"){
        return "scissors";
    } else {
        return choiceChecker(); //I needed to bring the askPlayerChoice variable into this function so that it would prompt the player if they had an incorrect input value
    }
}

//Computer randomly selects between rock, paper, or scissors
const gameChoices = ["rock", "paper", "scissors"]; //this is an array with strings. Arrays are used to store multiple values in a single variable.

function getComputerChoice(){
    let choice = gameChoices[Math.floor(Math.random() * gameChoices.length)]; //*gameChoices acts as the argument for getcompututerchoice(parameter)
    return choice; //to store the randomly selected variable we created a local variable called choice
}

const playerSelection = choiceChecker();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection){
    if (playerSelection === "rock" && computerSelection === "scissors"){
        console.log("You win! Rock beats scissors.");
    } else if (playerSelection === "rock" && computerSelection === "paper"){
        console.log("You lose! Paper beats rock.");
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
        console.log("You lose! Scissors beats paper.");
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        console.log("You win! Paper beats rock.");
    } else if (playerSelection === "scissors" && computerSelection === "rock"){
        console.log("You lose! Rock beats scissors."); 
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        console.log("You win! Scissors beats paper.");
    } else console.log ("It's a draw!");
}

//console.log(playRound(playerSelection, computerSelection));//without these parameters defined, it just goes to else "its a draw!"
//this console.log might need to be returned after the loop

function game(){
    for (let i = 0; i < 5; i++); {
        if (choiceChecker = true){
            playRound(playerSelection, computerSelection);
        } else return game();
    }
}

console.log(game());

//INTERESTING: im getting back undefined instead of rock from choicechecker and the correct computerselect
//QUESTION: why is math.random able to pick rock or paper or scissors out of the array but trying to use it in a conditional, the === wouldnt work i.e. sometimes it would only see rock, or sometimes nothing at all I think
