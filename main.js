function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    if (num == 0) {
        return "ROCK";
    }

    else if (num == 1) {
        return "PAPER";
    }

    else if (num == 2) {
        return "SCISSORS";
    }
}

function playerPlay() {
    let selection = prompt("Select Rock - Paper or Scissors");
    return selection.toUpperCase();
}


function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {
        return "It's a tie";

    }else if ((playerSelection == "PAPER" && computerSelection == "ROCK") || 
        (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
        (playerSelection == "SCISSORS" && computerSelection == "PAPER")) {

            return " You win!!! "  + playerSelection + " beats " + computerSelection ; 

    }else if ((playerSelection == "ROCK" && computerSelection == "PAPER") || 
        (playerSelection == "PAPER" && computerSelection == "SCISSORS") ||
        (playerSelection == "SCISSORS" && computerSelection == "ROCK")) {

        return " You loose!!! "  + computerSelection + " beats " + playerSelection ; 
    }   

}


function game() {
    for (let i=0; i<= 4; i++) {
        let p1 = playerPlay();
        let p2 = computerPlay();
        console.log(playRound(p1, p2));

    }
}

game();