for (let i = 0; i < 100; i++) {
  const isOddNumber = i % 2 === 1; // rodys nelyginius skaicius iki 100, isveda skaicius be tarpu

  if (isOddNumber) console.log(i);
}

let i = 80;
while (i > 0) {
  const isDivisibleByFive = i % 5 === 0; // nulis, nes norim, kad nebutu liekanos
  if (isDivisibleByFive) {
    console.log(i);
  }

  i--;
}

const names = [
  "Gabriele",
  "Loreta",
  "Jonas",
  "Petras",
  "Kazys",
  "Aleksas",
  "Arturas",
];
names.forEach((name, i) => {
  if (i % 2 === 0) console.log(name); // kas antras vardas rodomas
});

const userNumber = +prompt("labas");
const randomNumber = Math.round(Math.random() * 1_000);
const magicNumber = Math.ceil(randomNumber / userNumber);
alert(magicNumber);
alert(Math.pow(magicNumber, 4)); //antruoju laipsniu** 2; o math.pow kelia dabar ketvirtuoju laipsniu
