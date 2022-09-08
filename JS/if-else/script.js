// const legalAge = 20;
// const clientAge = 30;
// if (clientAge >= legalAge) {
//     alert("legalAge")
// }
// else {
//     alert("nono")
// }

const myName = 'Gabriele';
if (myName.length > 6) {
    console.log("Ilgas vardas")
}

const myAge = 102;

if (myAge > 100 && myAge < 0) {
    alert("Invalid Age")
}
else if (myAge >= 0 && myAge < 18) {
    alert("Child")
}
else if (myAge >= 19 && myAge < 99) {
    alert("Adult")
}

const myCar = "Toyota";
if (myCar === `VW` || myCar === `Audi` || myCar === `Bentley` || myCar === `Bugatti` || myCar === `Lamborghini` || myCar === `Porsche`) { console.log(`VW Group`) }
else if (myCar === `BMW` || myCar === `Mini` || myCar === `Rolls-royce`) {
    console.log(`BMW Group`)
}
else {
    console.log(`nei vienam`)
}

const car = "BMW";
if (car === 'VW' || car === 'Audi' || car === 'Bentley' || car === 'Bugatti' || car === 'Lamborghini' || car === 'Porsche') {
    console.log('VW Group');
} else if (car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce') {
    console.log('BMW Group');
} else {
    console.log('Nei vienam');
}