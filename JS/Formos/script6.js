function checkLeapYear(year) {
  return (year % 4 === 0 && year % 100 != 0) || year % 400 === 0;
}

const handleFormSubmit = (event) => {
  event.preventDefault();

  const year = document.querySelector("#year").value | 0;
  const outputElement = document.querySelector("#output");

  if (checkLeapYear(year)) {
    outputElement.textContent = "Metai keliamieji";
  } else {
    outputElement.textContent = "Metai nera keliamieji";
  }
};
document.querySelector("form").addEventListener("submit", handleFormSubmit);

//metai keliamieji ar ne, skaiciuoja
// keliamieji: dalinasi is 4, bet nesidalina is 100, kai tuo tarpu dalinasi is 400
