// let randomNumber = document.querySelector("#choose-number");

// function GuessedNumber() {
// const randomNumber = Math.random();
// const roundedNumber = Math.round(randomNumber * 4 + 1).toFixed(0)

// if(roundedNumber )
// }

let counter = 0;
let randomNumber = (Math.random() * 5 + 1).toFixed(0) | 0;
console.log(randomNumber);

const guessNumber = (event) => {
  event.preventDefault();
  counter++;

  const choosedNumber = Number(document.querySelector("#choose-number").value);

  if (randomNumber === choosedNumber) {
    alert(`atspejai is ${counter} karto`);
  } else {
    alert("neatspejai");
  }
};

document.querySelector("form").addEventListener("submit", guessNumber);
//zymim, kad counter yra nulis, tada dunkcijoj counter++, irasom, kur ta counteri parodys ir tada gaunam, is kurio karto atspejai skaiciu
