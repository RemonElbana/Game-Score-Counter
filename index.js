let homescoreEl = document.getElementById("homescore")
let counthome = 0 

function add1pointhome() {
    counthome += 1
    homescoreEl.innerText = counthome
    winner()
}

function add2pointhome() {
    counthome += 2
    homescoreEl.innerText = counthome
    winner()
}

function add3pointhome() {
    counthome += 3
    homescoreEl.innerText = counthome
    winner()
}

let guestscoreEl = document.getElementById("guestscore")
let countguest = 0 

function add1pointguest() {
    countguest += 1
    guestscoreEl.innerText = countguest
    winner()
}

function add2pointguest() {
    countguest += 2
    guestscoreEl.innerText = countguest
    winner()
}

function add3pointguest() {
    countguest += 3
    guestscoreEl.innerText = countguest
    winner()
}

function reset() {
    guestscoreEl.innerText = 0
    homescoreEl.innerText = 0
    winner()
    resetName()
}

let homeEl = document.getElementById("home")
let guestEl = document.getElementById("guest")

function winner() {
    if(counthome > countguest) {
        homeEl.innerText="Winner"
        guestEl.innerText="Loser"
    } else if (countguest > counthome) {
        guestEl.innerText="Winner"
        homeEl.innerText="Loser"
    } else if (countguest === counthome && countguest !== 0 && counthome !== 0) {
        homeEl.innerText="Draw"
        guestEl.innerText="Draw"
    }
}

function resetName() {
        homeEl.innerText="Home"
        guestEl.innerText="Guest"
}