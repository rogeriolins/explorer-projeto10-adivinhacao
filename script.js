// alert("Conectado...")
const randomNumber = Math.round(Math.random() * 10)
let xAttemps = 0

function handleClick(event) {
  event.preventDefault()
  let valueNumber = document.querySelector("#inputNumber").value
  xAttemps++
  if (Number(valueNumber) == randomNumber) {
    // Acertou
    document.querySelector(".screen01").classList.add("hide")
    document.querySelector(".screen02").classList.remove("hide")

    document.querySelector(".screen02 h2 span").innerText = xAttemps
  } else {
    console.log(xAttemps, randomNumber)
  }

  function newGame() {
    document.querySelector(".screen01").toogle('hide')
    document.querySelector(".screen02").toogle("hide")
  }

}
