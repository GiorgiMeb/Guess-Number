"use strict";

const againButton = document.querySelector(".again");
const numberEl = document.querySelector(".number");
const guessInput = document.querySelector(".guess");
const checkButton = document.querySelector(".check");
const messageEl = document.querySelector(".message");
const scoreEl = document.querySelector(".score");
const highScoreEl = document.querySelector(".highscore");
const bodyEl = document.body;

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;


checkButton.addEventListener("click", () => {
    const guess = parseInt(guessInput.value);
    console.log(guess, typeof guess)

    // no guess
    if (!guess) {
        messageEl.textContent = "⛔ No number"

    // guess is correct
    } else if (guess === secretNumber) {
        messageEl.textContent = "🎉 Correct Number"
        bodyEl.style.backgroundColor = "green"
        numberEl.style.width = "300px"

    //highscore functionality
    if (score > highscore) {
        highscore = score
        highScoreEl.textContent = highscore
    }
    //guess is higher
    } else if (guess > secretNumber) {
        if (score > 1) {
        messageEl.textContent = "📈 Too High!"
        score--;
        scoreEl.textContent = score
        } else {
            messageEl.textContent = "🔥 You lost the game"
            scoreEl.textContent = 0
        }

    //guess is lower
    } else if (guess < secretNumber) {
        if (score > 1) {
        messageEl.textContent = "📉 Too Low!"
        score--;
        scoreEl.textContent = score;
        } else {
            messageEl.textContent = "🔥 You lost the game"
            scoreEl.textContent = 0
        }
    }
})

againButton.addEventListener("click", () => {
    score = 20
    secretNumber =  Math.floor(Math.random() * 20) + 1;
    messageEl.textContent = "Start guessing..."
    scoreEl.textContent = score
    numberEl.textContent = "?"
    numberEl.style.width = "150px"
    bodyEl.style.backgroundColor = "#222"
    guessInput.value = ""
})
