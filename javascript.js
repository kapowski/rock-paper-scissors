
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
    
    let playerPoints = 0
    let computerPoints = 0
    
    for(var i=0;i<5;i++) {
        // computer options
        const computerChoiceArray = ["Rock", "Paper", "Scissors"] 

        // player input
        var input = prompt("Rock paper or scissors?")

        // converts first letter of input to upper case
        const playerSelection = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();


        // Randomly selects rock, paper or scissors for computer
        function getComputerChoice(array) {
        
            // get random index value
            const randomIndex = Math.floor(Math.random() * array.length);
        
            // get random item
            const item = array[randomIndex];

            return item;
        }
        const computerSelection = getComputerChoice(computerChoiceArray)
        var round = playRound(playerSelection, computerSelection)
        // console.log(round)
        
        if (round === "You win! " + playerSelection + " beats " + computerSelection) {
            playerPoints += 1;
            console.log(round);
            console.log(round + " Player Points: " + playerPoints + " Computer Points: " + computerPoints);   
        } else if (round === "You lose! " + computerSelection + " beats " + playerSelection) {
            computerPoints += 1
            console.log(round);
            console.log(round + " Player Points: " + playerPoints + " Computer Points: " + computerPoints);
        } else {
            console.log(round + " No score" );
            console.log(round + " Player Points: " + playerPoints + " Computer Points: " + computerPoints);
        }
    }
}


// Gameplay
console.log(playGame())