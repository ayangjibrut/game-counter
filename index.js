let homeEl = document.getElementById("home-points")
let guestEl = document.getElementById("guest-points")
let hcount = 0
let gcount = 0

function plus1h() {
    hcount += 1
    homeEl.textContent = hcount
}

function plus2h() {
    hcount += 2
    homeEl.textContent = hcount
}

function plus3h() {
    hcount += 3
    homeEl.textContent = hcount
}

function plus1g() {
    gcount += 1
    guestEl.textContent = gcount
}

function plus2g() {
    gcount += 2
    guestEl.textContent = gcount
}

function plus3g() {
    gcount += 3
    guestEl.textContent = gcount
}

function reset() {
    let countReset = 0
    homeEl.textContent = countReset
    guestEl.textContent = countReset
    hcount = 0
    gcount = 0
}