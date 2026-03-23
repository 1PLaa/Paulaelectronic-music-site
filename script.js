function checkAnswer(answer) {
  const result = document.getElementById("result");

  if (answer === "A") {
    result.innerText = "Correct!";
  } else {
    result.innerText = "Try again.";
  }
}
