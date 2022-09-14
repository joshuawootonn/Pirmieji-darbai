const myCar = "Audi";
switch (myCar) {
    case "VW":
        console.log("VW group")
        break;
}
switch (myCar) {
    case "Audi":
        console.log("VW group")
        break;
}
switch (myCar) {
    case "BMW":
        console.log("BMW group")
}

const userInput = "Obuolys";
switch (userInput) {
    case "Ananasas":
        console.log("Vaisius")
        break;
    case "Agurkas":
        console.log("Daržovė")
        break;
    case "Obuolys":
        console.log("Vaisius")
}


let weekDay = new Date().getDay;
switch (weekDay) {
    case "0":
        weekDay = "Sekmadienis"
        break;
    case "1":
        weekDay = "Pirmadienis"
        break;
    case "2":
        weekDay = "Antradienis"
        break;
    case "3":
        weekDay = "Trečiadienis"
        break;
    case "4":
        weekDay = "Ketvirtadienis"
        break;
    case "5":
        weekDay = "Penktadienis"
        break;
    case "6":
        weekDay = "Šeštadienis"
}
console.log(weekDay);