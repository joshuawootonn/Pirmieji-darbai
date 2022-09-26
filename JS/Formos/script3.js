// const workingTime = document.getElementById("work-time");
// const result = document.getElementById("bonus");
// const form = document.querySelector("form");

// const handleFormSubmit = (event) => {
//   event.preventDefault();
//   const time = Number(workingTime.value);
//   const money = 50;

//   if (time >= 10) {
//     result.textContent = 50 + money;
//   } else if (time >= 20) {
//     result.textContent = 100 + money;
//   }
// };

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const workTime = document.getElementById("workTime").value;

  let money = 50;
  if (workTime >= 10) {
    money += 50;
  } else if (workTime >= 20) {
    money += 100;
  }

  document.getElementById("result").innerText = "Jūsų premija:" + { money };
});
