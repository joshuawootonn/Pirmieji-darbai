function getMultipliedByTwo(number) {
    return number * 2
}

const multipliedNumber = getMultipliedByTwo(5)

console.info(multipliedNumber); //kaip aprašymas, kad bet kas prisijungęs matytų, kas čia


function getDividedByTwo(number) {
    return number / 2;
}
const dividedNumber = getDividedByTwo(16)

console.info({ dividedNumber }); //čia laužtiniai skliaustai parodo, prie skaičiaus reikšmę

function getTodaySales(totalSales, totalSalesYesterday = 50) {
    const todaySales = totalSales - totalSalesYesterday;

    return todaySales;
}

console.info(getTodaySales(150));
//console.info(getTodaySales(150, 100)); grąžina 50, galima nurodyt tiek taip, tiek skliaustuose, kaip pvz totalSalesYesterday=50