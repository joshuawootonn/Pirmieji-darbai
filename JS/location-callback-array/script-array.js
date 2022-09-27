// const cars = ["BMW", "VW", "Audi"];
// cars.forEach((value) => console.log(value));

// const cars = ["BMW", "VW", "Audi"];
// cars.forEach = (value, index) => console.log(index + ":" + value);

// const namesFriends = ["AnZelA", "aleKSej", "dANIELE"];
// const newNames = namesFriends.map(
//   (v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()
// );
// console.log(newNames); //pirma raide bus didzioji, kitos mazosios

// const friendsAges = [18, 31, 25, 26, 12, 45, 5, 2];
// console.log(friendsAges.filter((x) => x >= 18)); // parodo virs 18-likos

const lihuanianCities = [
  "Vilnius",
  "Kaunas",
  "siauliai",
  "Klaipėda",
  "Panevėžys",
];
// console.log(lihuanianCities.find((v) => v.charAt(0) === "K")); // randa pirma miesta, prasidedanti K raide

// console.log(
//   lihuanianCities.some((v) => v.charAt(0) === v.charAt(0).toLowerCase())
// ); // parodo, ar yra sarase miestas is mazosios raides - tai boolean, parodo true arba false

console.log(
  lihuanianCities.every((v) => v.charAt(0) === v.charAt(0).toUpperCase())
); // parodo, ar visi miestai yra is didziosios - tai boolean, duoda true arba false
