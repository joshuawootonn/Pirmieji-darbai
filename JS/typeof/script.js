const isLegalAge = true;
const firstNumber = 1;
const firstUserName = "Dovydas";
const user = null;
const data = undefined;
const firstArray = [];
const firstObject = {};

const list = [
  isLegalAge,
  firstNumber,
  firstUserName,
  user,
  data,
  firstArray,
  firstObject,
];

console.log(list);

list.forEach((element) => console.log([element, typeof element]));

//typeof null yra object
//masyvu typeof irgi objects
//objektas grazina objekta

//jeigu grieztai tik null:
const users = [];
if (users === null) {
}

//jeigu bendrai blogos reiksmes (falsy)
if (!users) {
}
//! tai kaip jungiklis. jei reiksme thruthy tai ja pakeicia i falsy
//daznai naudojamas if, patikrinti ar reiksme falsy

if (5 != 4) {
  console.log("nelygu");
}
//if praeis, nes 5 nelygu 4

//tikriname ar masyvas
if (Array.isArray([])) {
}
