const ageInput = document.getElementById("age");
const tInput = document.querySelector("input[type=checkbox]");
const form = document.querySelector("form");
const result = document.getElementById("selected");

const handleFormSubmit = (event) => {
  event.preventDefault();
  const age = Number(ageInput.value);
  const isConvicted = tInput.checked;

  if (age >= 18 && age <= 30 && !isConvicted) {
    result.textContent = "Army's calling you";
  } else {
    result.textContent = "Army is not for you";
  }
};

form.addEventListener("submit", handleFormSubmit);
