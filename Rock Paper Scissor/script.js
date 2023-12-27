// Initializing few variables
let userChoice, computerInput, computerChoice
let resultObject = JSON.parse(localStorage.getItem('resultObject')) || {won : '0', lost : '0', tie : '0'}


// Function to get the User Choice
function getUserInput(choice) {
    userChoice = choice;
    getComputerChoice();
    winner(userChoice, computerChoice);
    displayResult();
}


// Function to get the Computer Choice
function getComputerChoice() {
    computerInput = Math.ceil(Math.random() * 3);
    if (computerInput === 1) {
        computerChoice = 'Rock';
    }
    else if (computerInput === 2) {
        computerChoice = 'Paper';
    }
    else {
        computerChoice = 'Scissor';
    }
}


// Function to Determine the Winner
function winner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        resultObject.tie++;
    }
    else if(userChoice === 'Rock') {
        if(computerChoice === 'Paper') {
            resultObject.lost++;
        }
        else if(computerChoice === 'Scissor') {
            resultObject.won++;
        }
    }
    else if(userChoice === 'Paper') {
        if(computerChoice === 'Rock') {
            resultObject.won++;
        }
        else if(computerChoice === 'Scissor') {
            resultObject.lost++;
        }
    }
    else{
        if(computerChoice === 'Paper') {
            resultObject.won++;
        }
        else if(computerChoice === 'Rock') {
            resultObject.lost++;
        }
    }

    localStorage.setItem('resultObject', JSON.stringify(resultObject));
}


// Function to Display the Result on the Screen
function displayResult() {
    let resultSection = document.querySelector('#result-section');
    if (userChoice === undefined && computerChoice === undefined) {
        userChoice = '';
        computerChoice = '';
    }
    let newHTML = '';
    newHTML = `<h2>Your Choice: ${userChoice}</h2>
               <h2>Computer Choice: ${computerChoice}</h2>
               <h2>Won: ${resultObject.won}, Lost: ${resultObject.lost}, Tie: ${resultObject.tie}</h2> `
    resultSection.innerHTML = newHTML;
}


// Function to Reset Score
function resetScore() {
    localStorage.clear();
    resultObject.won = 0;
    resultObject.lost = 0;
    resultObject.tie = 0;
    displayResult();
}