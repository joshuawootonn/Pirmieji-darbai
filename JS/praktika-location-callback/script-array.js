// const cars = ["BMW", "VW", "Audi"];
// cars.forEach((value) => console.log(value));

// const cars = ["BMW", "VW", "Audi"];
// cars.forEach = (value, index) => console.log(index + ":" + value);

const namesFriends = ["AnZelA", "aleKSej", "dANIELE"];
const newNames = namesFriends.map(
  (v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()
);
console.log(newNames); //pirma raide bus didzioji, kitos mazosios
