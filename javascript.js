
// INPUTS

// computer options
const computerChoiceArray = ["Rock", "Paper", "Scissors"] 

// player input
const input = prompt("Rock paper or scissors?")

// converts first letter of input to upper case
const playerSelection = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

// FUNCTIONS

// Randomly selects rock, paper or scissors for computer
function getComputerChoice(array) {
    
    // get random index value
    const randomIndex = Math.floor(Math.random() * array.length);
    
    // get random item
    const item = array[randomIndex];

    return item;
}

// Playes round of game
function playRound(playerSelection, computerSelection) {

    // establishes weak vs strong relationship between R P and S elements using nested dictionary
    const comparisons = {
        Rock: {weakTo: 'Paper', strongTo: 'Scissors'},
        Paper: {weakTo: 'Scissors', strongTo: 'Rock'},
        Scissors: {weakTo: 'Rock', strongTo: 'Paper'} 
    }

    if (comparisons[playerSelection].strongTo === computerSelection) {
        const win = "You win! " + playerSelection + " beats " + computerSelection;
        return win
        return true
    } else if (comparisons[playerSelection].weakto === computerSelection) {
        const lose = "You lose! " + computerSelection + " beats " + playerSelection
        return lose
    } else {
        const tie = playerSelection + " ties " + computerSelection +"!"
        return tie
    }
}

// computerSelection = getComputerChoice(computerChoiceArray)
// console.log(playRound(playerSelection, computerSelection));

function game(round) {
    let i = 0
    while (i < 5) {
        var points = 0
        if (round === true) {
            points += 1
            i += 1
            return round + " Points: " + points;
        } else {
            return round + " Points: " + points
            i += 1
        }
    }
}

// Gameplay
computerSelection = getComputerChoice(computerChoiceArray)
const round = playRound(playerSelection, computerSelection);
// console.log(round)
console.log(game(round))