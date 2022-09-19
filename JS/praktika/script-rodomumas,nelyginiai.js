const showAlert = (callback) => {
  alert();
  callback();
};
// callbackas
const logGreeting = () => {
  console.log("Laba diena.");
};
//showAlert(logGreeting);

const productAvailabilityList = [true, true, false, true, false];
const availableProducts = productAvailabilityList.filter((product) => product);
console.log({ productAvailabilityList, availableProducts });

//su šia eilute viena galime parodyti, kokius produktus rodyt saite, kurių ne----filtravimas!

//spausdint nelyginius
const printOddProducts = () => {
  productAvailabilityList.forEach(
    (product, i) => i % 2 === 1 && console.log(product)
  );
};
printOddProducts();

//map yra forEach brolis, kuris returnina
const getRaisedToThePowerOfX = (numbers, x = 2) => {
  return numbers.map((number) => Math.pow(number, 2));
};
console.log(getRaisedToThePowerOfX([1, 2, 3], 5));

//find: jei randa- sustoja. grazina rasta elementa. jei norime rasti kelis, reik filtruoti
console.log([3, 4, 8, 5].find((number) => number === 8));

//some: tikrina, ar yra tokia reiksme, grazina true arba false
console.log([3, 4, 8, 5].some((number) => number === 8));
console.log([3, 4, 8, 5].some((number) => number === 9));

//every: grazina true/false jeigu yra atitinkama salyga
console.log([3, 4, 8, 5].every((number) => number > 0));
console.log([3, 4, 8, 5].every((number) => number !== 5));

//sort: eiles tvarka sortiruot; jei zodziai, tai pagal abecele

const sortAscendingly = (x, y) => {
  if (typeof x === "number" && typeof y === "number") {
    return x - y;
  }
  if (typeof x === "string" && typeof y === "string") {
    return x.localeCompare(y);
  }
};

console.log([-7, 5, 20, -4].sort(sortAscendingly));

console.log(["vardas", "pavarde", "knyga", "akis"].sort(sortAscendingly));

const cars = [
  {
    name: "BMW",
    engineHorsePower: 1000,
  },
  {
    name: "VW",
    engineHorsePower: 3000,
  },
  {
    name: "Tesla",
    engineHorsePower: 2542,
  },
];
const sortCarsByHorsePower = (curCar, nextCar) => {
  return curCar.engineHorsePower - nextCar.engineHorsePower;
};
console.log(cars.sort(sortCarsByHorsePower));
