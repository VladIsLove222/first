var userScore = 0;
var computerScore = 0;
var wins = 3;
var name = prompt("Введіть Ваше ім'я");
var range = prompt("Введіть діапазон чисел (від 0, до ...)");
var divUser = document.getElementById("idUser");
var divComputer = document.getElementById("idComputer");
divUser.textContent = `${name}`;
divComputer.textContent = `Комп'ютер`;
function random() {
    return Math.floor(Math.random() * range);
}
function score() {
    let newUserScore = document.getElementById("idUserScore");
    newUserScore.innerHTML = `Рахунок: ${userScore}`;
    let newComputerScore = document.getElementById("idComputerScore");
    newComputerScore.innerHTML = `Рахунок: ${computerScore}`;
}
function game() {
    let userNumb = random();
    let computerNumb = random();
	let userNewNumb = document.getElementById("idUserNumb");
	userNewNumb.innerHTML = `${userNumb}`;
	let computerNewNumb = document.getElementById("idComputerNumb");
	computerNewNumb.innerHTML = `${computerNumb}`;
    if (userNumb > computerNumb) {
        userScore++;
    } else {
        computerScore++;
    }
score();
	if (userScore == wins) {
        alert(`Гравець ${name} виграв гру!`);
    } else if (computerScore == wins) {
        alert(`Комп'ютер виграв гру!`);
    }
}
