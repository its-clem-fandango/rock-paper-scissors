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


const gameChoices = ["rock", "paper", "scissors"]; //this is an array with strings. Arrays are used to store multiple values in a single variable.

function choiceChecker(){ //Play game on condition rock or paper or scissors is true else re-prompt
    const askPlayerChoice = prompt("Play either Rock, Paper, or Scissors"); //Ask for user input and save it in the variable askPlayerInput
    const makeChoiceInsensitive = askPlayerChoice.toLowerCase();//create a new variable that saves the players input and makes it all lowercase

    if (makeChoiceInsensitive === "rock"){
        console.log("you did that");
    } else if (makeChoiceInsensitive === "paper"){
        console.log("yeah you did");
    } else if (makeChoiceInsensitive === "scissors"){
        console.log("last one");
    } else {
        return choiceChecker();
    }
}

console.log(choiceChecker());

//need to make this true







//function confirmPlayerChoice(){
    //if (the case insensitive function === true)
    //run the Game
    //else ask again

//function getComputerChoice(){
    //let choice = gameChoices[Math.floor(Math.random() * gameChoices.length)]; //*gameChoices acts as the argument for getcompututerchoice(parameter)
    //return choice; //to store the randomly selected variable we created a local variable called choice
//