// Const and Vars
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen01 = document.querySelector(".screen01")
const screen02 = document.querySelector(".screen02")
let randomNumber = Math.round(Math.random() * 10)
let xAttemps = 0
let theInputNumber = document.querySelector("#inputNumber")

// Focus no Input
theInputNumber.focus()

// Events
btnTry.addEventListener("click", handleClickTry)
btnReset.addEventListener("click", handleClickReset)

// Functions
function handleClickTry(event) {
  event.preventDefault()
  let valueNumber = Number(theInputNumber.value)
  if (valueNumber >= 0 && valueNumber <= 10) {
    xAttemps++
    if (Number(valueNumber) == randomNumber) {
      // Acertou
      screen02.querySelector("#randomSelect").innerText = randomNumber
      screen02.querySelector("#trys").innerText = xAttemps
      toogleGame()
      btnReset.focus()
    } else {
      // Errou
      theInputNumber.value = ""
      theInputNumber.focus()
    }
  } else {
    alert("Chute um valor entre 0 e 10, tente novamente!")
  }
}

function handleClickReset(event) {
  randomNumber = Math.round(Math.random() * 10)
  xAttemps = 0
  theInputNumber.value = ""
  toogleGame()
  theInputNumber.focus()
}

function toogleGame() {
  screen01.classList.toggle("hide")
  screen02.classList.toggle("hide")
}
