function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function getComputerChoice(){
    nr = getRndInteger(1,9)
    if (nr < 4){
        return 'Rock';
    } else if (nr < 7){
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection){
    playerSelection=playerSelection[0].toUpperCase()+playerSelection.slice(1).toLowerCase();
    if (playerSelection !== 'Rock' && playerSelection !== 'Paper' && playerSelection !== 'Scissors'){
        return 'Player\'s choice is invalid!';
    }
    if (playerSelection === computerSelection){
        return 'It\'s a draw! Both players chose '+playerSelection+'!';
    }
    let statement;
    switch (playerSelection){
        case 'Rock':
            if (computerSelection === 'Paper'){
                statement="You Lose! Paper beats Rock";
            } else {
                statement="You Win! Rock beats Scissors";
            }
            break;
        case 'Paper':
            if (computerSelection === 'Rock'){
                statement="You Win! Paper beats Rock";
            } else {
                statement="You Lose! Scissors beats Paper";
            }
            break;
        case 'Scissors':
            if (computerSelection === 'Rock'){
                statement="You Lose! Rock beats Scissors";
            } else {
                statement="You Win! Scissors beats Paper";
            }
            break;
    }
    return statement;

}

playerVictoriesNr=0;
nrOfRounds=0;

function btnClicked(event){
    const btn = event.target;
    const result = playRound(btn.textContent,getComputerChoice()); //works with this because this is a reference to the button that triggered the event
    const div = document.querySelector('.result');
    const p = document.createElement('p');
    p.textContent=result;
    div.appendChild(p);

    if (result.includes("Win")){
        playerVictoriesNr++;
    }
    nrOfRounds++;
    const div2 = document.querySelector('.score');
    div2.textContent="Player: " + playerVictoriesNr + " / " + (nrOfRounds-playerVictoriesNr)+" :Computer";
    if (nrOfRounds ==5){
        if(playerVictoriesNr > 2){
            div2.style.whiteSpace="pre";
            div2.textContent+="\r\nYou win the game!";
        } else {
            div2.style.whiteSpace="pre";
            div2.textContent+="\r\nYou lose the game!";
        }
        btns.forEach((btn) => btn.removeEventListener("click", btnClicked) );
    }
}

const btns = document.querySelectorAll('button');

btns.forEach((btn) => btn.addEventListener("click", btnClicked) );

/*
function game(){
    playerVictoriesNr=0;
    for(let i=1; i<=5; i++){
        let playerSelection = prompt("Enter your selection for the game! ");
        let computerSelection = getComputerChoice();
        result=playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("Win")){
            playerVictoriesNr++;
        }
    }
    if(playerVictoriesNr > 2){
        console.log("You win the game!");
    } else {
        console.log("You lose the game!");
    }
}

game()
*/
//Note that draws turns are considered wins by the computer!!!