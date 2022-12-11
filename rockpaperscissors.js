//create a rock-paper-scissors game where YOU play against the COMPUTER
//(a function getcompchoice will randomly return RPS).
//the game will take input from the user and will play a round
//the game repeats five times, asking user for input everytime


// start game
    //ask user for typed input
    //choices are between rock-paper-scissors
    //input shouldn't be case sensitive
    //save and accept input if typed correctly(regarless of case)
    //else if input is typed incorrectly ask user to try again

//rock-paper-scissors
    //computer randomly selects between rock-paper-scissors

const randomChoice = ["rock", "paper", "scissors"];

function getComputerChoice(){
    let choice = randomChoice[Math.floor(Math.random() * randomChoice.length)];
    return choice;
}

console.log(getComputerChoice());
    //once selection is made check it against the user input
    //if user selects rock then computer needs to select paper to win
    //if user selects paper then computer needs to select scissors to win
    //if user selects scissors then computer needs rock to win
    //if user and computer select the same choice then its a draw
    //side note: does the draw choice need to be the first if checked

    //or should i be thinking about it like:
    //if computer selects rock, user needs paper to win...

    //declare winner or draw

    //repeat 5 times