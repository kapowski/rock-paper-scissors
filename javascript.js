
// Playes round of game
function playRound(playerSelection, computerSelection) {

    // Establishes weak vs strong relationship between R P and S elements using nested dictionary
    const comparisons = {
        Rock: {weakTo: 'Paper', strongTo: 'Scissors'},
        Paper: {weakTo: 'Scissors', strongTo: 'Rock'},
        Scissors: {weakTo: 'Rock', strongTo: 'Paper'} 
    }

    // Round winner announcement
    if (comparisons[playerSelection].strongTo === computerSelection) {
        const win = "You win! " + playerSelection + " beats " + computerSelection;
        return win
    } else if (comparisons[playerSelection].weakTo === computerSelection) {
        const lose = "You lose! " + computerSelection + " beats " + playerSelection;
        return lose
    } else {
        const tie = playerSelection + " ties " + computerSelection +"!";
        return tie
    }
}

// plays 5 round game
function playGame() {
    
    // Sets up scorecard
    let playerPoints = 0
    let computerPoints = 0
    
    // Loops game 5 times
    for(var i=0;i<5;i++) {
        
        // Initiates inputs for game
        
        // Computer options
        const computerChoiceArray = ["Rock", "Paper", "Scissors"] 

        // Player input
        var input = prompt("Rock paper or scissors?")

        // Converts first letter of input to upper case
        const playerSelection = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();


        // Randomly selects rock, paper or scissors for computer
        function getComputerChoice(array) {
        
            // Get random index value
            const randomIndex = Math.floor(Math.random() * array.length);
        
            // Get random item
            const item = array[randomIndex];
            return item;
        }
        // Initiates playRound
        const computerSelection = getComputerChoice(computerChoiceArray)
        var round = playRound(playerSelection, computerSelection)
        
        // Updates scorecard
        if (round === "You win! " + playerSelection + " beats " + computerSelection) {
            playerPoints += 1;
            console.log(round + ". " + "Player Points: " + playerPoints + " Computer Points: " + computerPoints);  
        } else if (round === "You lose! " + computerSelection + " beats " + playerSelection) {
            computerPoints += 1
            console.log(round + ". " + " Player Points: " + playerPoints + " Computer Points: " + computerPoints);
        } else {
            console.log(round + ". " + " Player Points: " + playerPoints + " Computer Points: " + computerPoints);
        }
    }

    // Final Score Message
    if (playerPoints > computerPoints) {
       return "You win the game!";
    } else if (playerPoints < computerPoints) {
        return "You lose the game!";
    } else {
        return "Tie Game!"
    }
}

// Gameplay
console.log(playGame())

