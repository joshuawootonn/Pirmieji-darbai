// let randomNumber = document.querySelector("#choose-number");

// function GuessedNumber() {
// const randomNumber = Math.random();
// const roundedNumber = Math.round(randomNumber * 4 + 1).toFixed(0)

// if(roundedNumber )
// }

let randomNumber = (Math.random() * 5 + 1).toFixed(0) | 0;
console.log(randomNumber);

const guessNumber = (event) => {
  event.preventDefault();

  const choosedNumber = Number(document.querySelector("#choose-number").value);

  if (randomNumber === choosedNumber) {
    alert("atspejai");
  } else {
    alert("neatspejai");
  }
};

document.querySelector("form").addEventListener("submit", guessNumber);
