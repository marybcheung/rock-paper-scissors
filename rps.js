// randomly returns 0, 1, or 2
function rNG3() {
    return Math.floor(Math.random()*3);
}

// randomly returns "Rock", "Paper", or "Scissors"
function computerPlay() {
    switch (rNG3()) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function capitalize(str) {
    str = str.toLowerCase();
    return str.replace(str.substring(0,1), str.substring(0,1).toUpperCase());
}

// returns true if and only if player wins, returns false if player loses or ties
function isPlayerWin(playerSelection, computerSelection) {
    switch(playerSelection) {
        case "Rock": return computerSelection == "Scissors";
        case "Paper": return computerSelection == "Rock";
        case "Scissors": return computerSelection == "Paper";
    }
}

function isTie(playerSelection, computerSelection) {
    return playerSelection == computerSelection;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);
    if (isPlayerWin(playerSelection, computerSelection)) return "win";
    else if (isTie(playerSelection, computerSelection)) return "tie";
    return "lose";
}

function handleEndResult(numPlayerWins, numCPUWins) {
    let endResult;
    if (numPlayerWins>numCPUWins) endResult = "won :)";
    else if (numCPUWins>numPlayerWins) endResult = "lost :(";
    else endResult = "tied :|"; 
    alert("Your score: " + numPlayerWins + ", CPU score: " + numCPUWins + ". You " + endResult);
}

function game() {
    let playerSelection;
    let numPlayerWins = 0;
    let numCPUWins = 0;
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Round " + (i+1) + ": Please enter 'Rock', 'Paper', or 'Scissors'.");
        if (playerSelection == null) break;
        if (playerSelection.match(/rock|paper|scissors/i) == null) continue;
        playerSelection = capitalize(playerSelection);
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        switch (result) {
            case "win": alert("You won! " + playerSelection + " beats " + computerSelection);
                numPlayerWins++;
                break;
            case "tie": alert("Tie! " + playerSelection + " ties " + computerSelection);
                break;
            case "lose": alert("You lost! " + computerSelection + " beats " + playerSelection);
                numCPUWins++;
                break;
        }
    }
    handleEndResult(numPlayerWins, numCPUWins);
}

var buttons = document.querySelectorAll("button");
var leftEmoji = document.querySelector("#left-emoji");
buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
        var id = button.id;
        switch (id) {
            case "rock": leftEmoji.innerHTML = "✊";
            break;
            case "paper": leftEmoji.innerHTML = "✋";
            break;
            case "scissors": leftEmoji.innerHTML = "✌️";
            break;
        }
        leftEmoji.classList.add("visible");
    });

    button.addEventListener("mouseleave", () => {
        leftEmoji.classList.remove("visible");
    });
});

// game();