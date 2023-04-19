
// INPUTS
const computerChoiceArray = ["rock", "paper", "scissors"] 
const playerSelection = prompt("Rock paper or scissors?").toLowerCase();


// FUNCTIONS
// Randomly selects rock, paper or scissors for computer
function getComputerChoice(array) {
    
    // get random index value
    const randomIndex = Math.floor(Math.random() * array.length);
    
    // get random item
    const item = array[randomIndex];

    return item;
}
