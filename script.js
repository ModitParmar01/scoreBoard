const addTenButtons = document.querySelectorAll('.add-score-btn');
const subTenButtons = document.querySelectorAll('.sub-score-btn');

const addFiveButtons = document.querySelectorAll(".add-five-btn");
const subFiveButtons = document.querySelectorAll(".sub-five-btn");

const teamScoreElements = document.querySelectorAll('.team-score');
const reset = document.querySelectorAll('.reset-btn');

addTenButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let currentScore = parseInt(teamScoreElements[index].textContent);
        currentScore += 10;
        teamScoreElements[index].textContent = currentScore;
    });
});

addFiveButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let currentScore = parseInt(teamScoreElements[index].textContent);
        currentScore += 5;
        teamScoreElements[index].textContent = currentScore;
    });
});

subTenButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let currentScore = parseInt(teamScoreElements[index].textContent);
        currentScore -= 10;
        teamScoreElements[index].textContent = currentScore;
    });
});

subFiveButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let currentScore = parseInt(teamScoreElements[index].textContent);
        currentScore -= 5;
        teamScoreElements[index].textContent = currentScore;
    });
});

reset.forEach((button, index) => {
    button.addEventListener('click', () => {
        let currentScore = parseInt(teamScoreElements[index].textContent);
        currentScore = 0;
        teamScoreElements[index].textContent = currentScore;
    });
});