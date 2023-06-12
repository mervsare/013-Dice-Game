//!Selectors
const button = document.querySelector("button");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const output = document.getElementById("output");
//!Values

//!Event
button.addEventListener("click", () => dice());
//!Function
function dice(input) {
  let player1Num = Math.floor(Math.random() * 6) + 1;
  let player2Num = Math.floor(Math.random() * 6) + 1;
  player1.textContent = player1Num;
  player2.textContent = player2Num;
  if (player1Num == player2Num) {
    output.textContent = "It's a Draw";
  } else if (player1Num > player2Num) {
    output.textContent = "Player1 Wins";
  } else {
    output.textContent = "Player2 Wins";
  }
}
