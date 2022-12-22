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
    let makeChoiceInsensitive = askPlayerChoice.toLowerCase();//create a new variable that saves the players input and makes it all lowercase

    if (makeChoiceInsensitive === "rock"){
        return "rock"; //return rock so that the value of choicechecker becomes rock. Remember, functions are values
    } else if (makeChoiceInsensitive === "paper"){
        return "paper";
    } else if (makeChoiceInsensitive === "scissors"){
        return "scissors";
    } else {
        alert("Oops! Looks like you made a typo, try again.");//alerts the player of a type rather than printing to console
        choiceChecker(); //I needed to bring the askPlayerChoice variable into this function so that it would prompt the player again if they had an incorrect input value
    }
}

//Computer randomly selects between rock, paper, or scissors
const gameChoices = ["rock", "paper", "scissors"]; //this is an array with strings. Arrays are used to store multiple values in a single variable.

function getComputerChoice(){
    let choice = gameChoices[Math.floor(Math.random() * gameChoices.length)]; //*gameChoices acts as the argument for getcompututerchoice(parameter)
    return choice; //to store the randomly selected variable we created a local variable called choice
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
    } else return console.log ("It's a draw!");
}

//Play five rounds.

function game(){
    for (i = 0; i < 5; i++){ //pass the arguments playerSelection and computerSelection to playRound and run it five times
        const playerSelection = choiceChecker();//I needed to have these two variables within the loop for playround to work i.e. for the variables player/computerselection to be passed to the playround function. before I had it outside as a global variable but I only needed that to test the playround function.
        const computerSelection = getComputerChoice();// in the actual loop, playround was ONLY running playround with the same input five times 
        playRound(playerSelection, computerSelection);//i.e. playerselection and computerselection weren't being updated inside of the loop. Because these values were not updated inside the loop, they remained the same each time the playRound function was called.
    
        //assign a score to the player and computer
        //if player wins 3, player wins
        //if computer wins 3, computer wins
    
    }
}

game();



//INTERESTING: im getting back undefined instead of rock from choicechecker and the correct computerselect
//QUESTION: why is math.random able to pick rock or paper or scissors out of the array but trying to use it in a conditional, the === wouldnt work i.e. sometimes it would only see rock, or sometimes nothing at all I think
