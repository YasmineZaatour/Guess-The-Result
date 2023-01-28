function calcul(a, b, p) {
  let result;
  if (p == "+") {
    result = a + b;
  } else if (p == "-") {
    result = a - b;
  } else if (p == "*") {
    result = a * b;
  } else {
    result = a / b;
  }
  return result;
}
let count = 1;
document.getElementById("num").innerHTML = "Question " + count + "/5 :";
const op = ["*", "+", "-", "/"];
let i = Math.floor(Math.random() * 4);
document.getElementById("op").innerHTML = op[i];
document.getElementById("what").innerHTML = "What is ";
let x = Math.floor(Math.random() * 10 + 1);
document.getElementById("x").innerHTML = x;
let y = Math.floor(Math.random() * 10 + 1);
document.getElementById("y").innerHTML = y + " ?";
document.getElementById("title").innerHTML = "Guess The Result!";
let score = 0;
document.getElementById("btn1").disabled = true;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

function check() {
  const guess = document.getElementById("guess").value;
  let result = calcul(x, y, op[i]);
  if (!guess) {
    displayMessage("⛔️ Nothing in the input!");
  } else if (guess == result) {
    displayMessage("🎉 Correct Answer!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    score += 5;
    document.querySelector(".score").textContent = score;
    let myAudio = document.querySelector("#audio");
    myAudio.play();
    document.getElementById("btn").disabled = true;
    document.getElementById("btn1").disabled = false;
  } else {
    displayMessage("🤔 Wrong Answer!");
    document.querySelector("body").style.backgroundColor = "#ff0000";
    score -= 2;
    document.querySelector(".score").textContent = score;
    let myAudio = document.querySelector("#audio2");
    myAudio.play();
    document.getElementById("btn").disabled = true;
    document.getElementById("btn1").disabled = false;
  }
}

function Next() {
  if (count < 5) {
    let myAudio = document.querySelector("#audio3");
    myAudio.play();
    count++;
    document.getElementById("title").innerHTML = "Guess The Result!";
    document.getElementById("num").innerHTML = "Question " + count + "/5 :";
    document.getElementById("btn").disabled = false;
    document.getElementById("btn1").disabled = true;
    document.getElementById("what").innerHTML = "What is ";
    x = Math.floor(Math.random() * 10 + 1);
    document.getElementById("x").innerHTML = x;
    y = Math.floor(Math.random() * 10 + 1);
    document.getElementById("y").innerHTML = y + " ?";
    i = Math.floor(Math.random() * 4);
    document.getElementById("op").innerHTML = op[i];
    displayMessage("Start Calculating...");
    document.querySelector(".guess").value = "";
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#301934";
  } else {
    document.getElementById("btn").disabled = true;
    document.getElementById("btn1").disabled = true;
    document.getElementById("what").innerHTML = "";
    document.getElementById("x").innerHTML = "";
    document.getElementById("y").innerHTML = "";
    document.getElementById("op").innerHTML = "";
    document.querySelector(".number").style.width = "0px";
    document.getElementById("num").innerHTML = "";
    document.getElementById("title").innerHTML = "Game Over";
    document.querySelector("#title").style.fontSize = "100px";
    document.querySelector("body").style.backgroundColor = "#36454F";
    document.querySelector(".guess").value = "";
    let myAudio = document.querySelector("#audio5");
    myAudio.play();
    if (score >= 25) {
      displayMessage("🎉🎉🎉 You Won! 🎉🎉🎉");
    } else if (score > 0 && score < 25) {
      displayMessage("😊 You can do better! 😊");
    } else {
      displayMessage("🤔 Rak Msatek! 🤔");
    }
  }
}

document.querySelector(".again").addEventListener("click", function () {
  let myAudio = document.querySelector("#audio4");
  myAudio.play();
  count = 1;
  document.getElementById("num").innerHTML = "Question " + count + "/5 :";
  document.getElementById("title").innerHTML = "Guess The Result!";
  document.querySelector(".number").style.width = "900px";
  document.querySelector("#title").style.fontSize = "4rem";
  document.getElementById("btn").disabled = false;
  document.getElementById("btn1").disabled = true;
  score = 0;
  document.getElementById("what").innerHTML = "What is ";
  x = Math.floor(Math.random() * 10 + 1);
  document.getElementById("x").innerHTML = x;
  y = Math.floor(Math.random() * 10 + 1);
  document.getElementById("y").innerHTML = y + " ?";
  i = Math.floor(Math.random() * 4);
  document.getElementById("op").innerHTML = op[i];
  displayMessage("Start Calculating...");
  console.log(result);
  document.querySelector(".guess").value = "";
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#301934";
});
