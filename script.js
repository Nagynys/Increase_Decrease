const decreaseBtn = document.getElementById("decreaseBtn")
const resetBtn = document.getElementById("resetBtn")
const increaseBtn = document.getElementById("increaseBtn")
const countLabel = document.getElementById("countLabel")
let count = 0


// Snížit
decreaseBtn.onclick = () => {
    count--
    countLabel.textContent = count
}

// Reset
resetBtn.onclick = () => {
    count = 0
    countLabel.textContent = count
}

// Zvýšit
increaseBtn.onclick = () => {
    count++
    countLabel.textContent = count
}
