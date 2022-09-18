// const bike = {
//   price: 250,
//   primeCost: 150,
// };

// function calculateProfit(product) {
//   const profit = product.price - product.primeCost;

//   return profit;
// }
// console.log(calculateProfit(bike));
// document.body.innerHTML = calculateProfit(bike);

// function firstName() {
//   alert("Gabriele");
// }
// firstName();

//generuoja random skaičių nuo 1 iki 5
// function generateRandomNumber() {
//   return Math.floor(Math.random() * 5) + 1;
// }
// generateRandomNumber();

//skaičiuoja raidžių kiekį
// function getNameAndSurnameLength(name, surname) {
//   return name.length + surname.length;
// }
// console.log(getNameAndSurnameLength("Gabriele", "Barsukova"));

//trijų parametrų matematinės užduotys
function calculate(n1, n2, operator) {
  switch (operator) {
    case "sum":
      return n1 + n2;
    case "sub":
      return n1 - n2;
    case "div":
      return n1 / n2;
    case "multi":
      return n1 * n2;
  }
}
console.log(calculate(1, 2, "sub"));
