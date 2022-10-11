// const cars = {
//   doors: 4 | 0,
//   color: "blue",
//   brand: "BMW",
// };
// console.log(cars);

// document.querySelector("form").addEventListener("submit", (event) => {
//   event.preventDefault();

//   const person = {
//     name: event.target[0].value,
//     surname: event.target[1].value,
//   };
//   console.log(person);
// });

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  const userName = event.target.elements.name.value;
  const userAge = Number(event.target.elements.age.value);
  const isLegalAge = userAge >= 18;

  const person = {
    name: userName,
    isLegalAge: isLegalAge,
  }; // kai sukuriam musu parametrams objekta mes gaunam atsakyme labai issamia info

  console.log(person);
});
