'use strict';
// selecting elements
const player0El = document.querySelector(".player--0")
const player1El = document.querySelector(".player--1")
const score0El = document.getElementById("score--0")
const score1El = document.getElementById("score--1")
const current0El = document.getElementById("current--0")
const current1El = document.getElementById("current--1")

const diceEl = document.querySelector(".dice")
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")

score0El.textContent = 0
score1El.textContent = 0
diceEl.classList.add("hidden")

const scores = [0, 0]
let currentScore = 0
let activePlayer = 0

// function to switch players
const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active")
    player1El.classList.toggle("player--active")
}

// rolling dice functionality
btnRoll.addEventListener("click", function(){
    // generate a random dice roll
    const dice = Math.trunc(Math.random()*6) + 1
    console.log(dice)
    // display dice
    diceEl.classList.remove("hidden")
    diceEl.src = `dice-${dice}.png`
    // check for a rolled 1
    if (dice !== 1){
        // add dice to current score
        currentScore += dice
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    } else {
        //  if true - switch to next player
        switchPlayer();
    }
})

btnHold.addEventListener("click", function(){
    
    // add current score to global score of active player
    scores[activePlayer] += currentScore
    console.log(scores[activePlayer])
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
    // check if score is >= 100, if so, finish game
    // if (scores >= 100){

    // }
    // else switch to next player
    switchPlayer();
})
