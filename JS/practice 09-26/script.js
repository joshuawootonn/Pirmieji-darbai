const userName = prompt("Type your name");
const userAge = +prompt("Type your age"); // nes tai skaicius, reik +, kad parodytu skaiciu, o ne stringa
const userRegion = navigator.language.toLocaleLowerCase(); //geltonas - reikia funkcija iskviesti, tai skliaustu reik
const hasAppropriateAge = userAge >= 16;
const isLithuanianUser = userRegion === "ru-ru";
console.log({ userRegion });

console.log({ userAge, userName });

if (hasAppropriateAge && isLithuanianUser) {
  const firstThreeLetters = userName.slice(0, 3);
  const randomNumber = parseInt(1_000 + Math.random() * 8_999); // neiskaitant 10_000 (iki 10_000)
  const giftCode = `${firstThreeLetters}${randomNumber}`;

  alert(`Jums priklauso nuolaidu kodas: ${giftCode}`);
}

//to do: user object
