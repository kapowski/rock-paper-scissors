// Randomly selects rock, paper or scissors for computer
function getComputerChoice(array) {
    
    // get random index value
    const randomIndex = Math.floor(Math.random() * array.length);
    
    // get random item
    const item = array[randomIndex];

    return item;
}

const computerChoiceArray = ["rock", "paper", "scissors"] 

console.log(getComputerChoice(computerChoiceArray))
