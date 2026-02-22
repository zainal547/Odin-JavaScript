/**  
console.log(23 + 97 );
console.log(1 + 2 + 3 + 4 + 5 + 6);
console.log((4 + 6+ 9) / 77);

let a = 10;
console.log(a);
a = 20
console.log(a);

let b = 7 * a;
console.log(b);

const max = 57;
const actual = max - 13;
const percentage = actual / max;
console.log(percentage);

*/

/** 
 * 
function add(number){
    return number + 7;
}

console.log(add(100));

function multiply(number1, number2){
    return number1 * number2;
}

console.log(multiply(2, 3));

function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(capitalize("abcd"));
console.log(capitalize("ABCD"));
console.log(capitalize("aBCD"));

function lastLetter(string){
    return string.charAt(string.length - 1);
}

console.log(lastLetter("abcd"));
*/

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
    }      
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log("Human choice: " + humanSelection);
console.log("Computer choice: " + computerSelection);

function getHumanChoice() {
    let choice = prompt("Enter rock, paper, or scissors:");
    choice = choice.toLowerCase();
    while (!["rock", "paper", "scissors"].includes(choice)) {
        choice = prompt("Invalid choice. Please enter rock, paper, or scissors:");
        choice = choice.toLowerCase();
    }
    return choice;
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}