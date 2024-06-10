// Const and Vars
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen01 = document.querySelector(".screen01")
const screen02 = document.querySelector(".screen02")
const theDOM = document.querySelector("body")

let randomNumber = Math.round(Math.random() * 10)
let xAttemps = 0
let theInputNumber = document.querySelector("#inputNumber")
let useTrick = false

// Focus no Input
theInputNumber.focus()

// Events
btnTry.addEventListener("click", handleClickTry)
btnReset.addEventListener("click", handleClickReset)
theDOM.addEventListener("keydown", handleEnter)

// Functions
function handleEnter(event) {
  if (event.key == "m" || event.key == "M") {
    useTrick = true
    alert(`O Número que você deve adivinhar é ${randomNumber}`)
  }
}

function handleClickTry(event) {
  event.preventDefault()
  let valueNumber = Number(theInputNumber.value)
  if (valueNumber >= 0 && valueNumber <= 10) {
    xAttemps++
    if (Number(valueNumber) == randomNumber) {
      // Acertou
      screen02.querySelector("#randomSelect").innerText = randomNumber
      let plural = xAttemps == 1 ? "" : "s"
      screen02.querySelector(
        "#trys"
      ).innerText = `${xAttemps} tentativa${plural}`
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
  useTrick = false
  toogleGame()
  theInputNumber.focus()
}

function toogleGame() {
  screen01.classList.toggle("hide")
  screen02.classList.toggle("hide")
  if (useTrick) {
    screen02.querySelector("#trick").classList.remove("hide")
  } else {
    screen02.querySelector("#trick").classList.add("hide")
  }
}
