const racingCar = {
manufacturer: "BMW",
enginePowerHP: 2000,
dateOfManufacture: 2018,
released: true 
};

console.log(racingCar)

const consumerCar = {
manufacturer: "VW",
enginePowerHP: 1800,
dateOfManufacture: 2013,
released: false}

console.log (consumerCar)

function showMostPowerfullEngine (carOne, carTwo){
const mostPowerfullCar = carOne.enginePowerHP > carTwo.enginePowerHP ? carOne : carTwo; 
console.log (mostPowerfullCar)

    alert (`${mostPowerfullCar.manufacturer} car is better`);

    //console.log (engineOne,engineTwo);
    //return engineOne > engineTwo;
}
 showMostPowerfullEngine (racingCar, consumerCar);



