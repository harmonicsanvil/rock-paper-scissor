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

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {
        return 0;

    }else if ((playerSelection == "PAPER" && computerSelection == "ROCK") || 
            (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
            (playerSelection == "SCISSORS" && computerSelection == "PAPER")) {

            return 1; 

    }else {
        return -1;
    }


} 


const container = document.querySelector('body');
const btn = document.querySelector('.reset');
const p1 = document.querySelector('.p1 h1');
const p2 = document.querySelector('.p2 h1');
const resultAfter5 = document.querySelector('.result h1')

let playerWins = 0;
let compWins = 0;


function resetScore(e) {
    playerWins = 0;
    compWins = 0;
    console.log('hello');
}


function changeScore(result) {
    if (result == 1) playerWins++;
    else if (result == -1) compWins++;
    p1.innerText = + playerWins;
    p2.innerText = + compWins;
}


btn.addEventListener('click', () => {
    resetScore();
    changeScore(0);
    btn.style.display = 'none';
    resultAfter5.innerText = '';
});


const buttons = document.querySelectorAll('.button');
buttons.forEach((button) => {

    button.addEventListener('click', () => {
      button.focus();
      if (playerWins < 5 && compWins < 5){
        let comp = computerPlay();
        const result = playRound(button.id, comp);
        changeScore(result);
      }

      if (playerWins == 5) {
        btn.style.display = 'block';
        resultAfter5.innerText = 'You Win !!!';
      }
      else if (compWins == 5) {
        btn.style.display = 'block';
        resultAfter5.innerText = 'You Loose !!!';
      }

    });
  });





