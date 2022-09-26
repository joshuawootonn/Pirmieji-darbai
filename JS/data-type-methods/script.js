const showFormatedNumbers = () => {
  const value = Math.random() * 15;
  console.log(value);
  console.log(value.toFixed(2)); // du skaiciai po kablelio
  console.log(value.toFixed(0)); //skaiciu mato kaip stringa
  console.log(parseInt(value)); // skaiciu mato kaip skaiciu
  console.log(Math.round(value));
};

showFormatedNumbers();

//pratimas su strings

const showFormatedStrings = () => {
  const value = "Siandien treciadienis        ";
  console.log(value);
  console.log(value.split(" ")[1]); // stringo masyvas
  console.log(`${value}5`);
  console.log(value.slice(0, 3)); //end kintamojo neiskaito
  console.log(value.toLocaleLowerCase());
  console.log(value.includes("tre"));
  console.log(value.replace("trecia", "ketvirta")); // pakeite vietoj trecia raso ketvirta ir iseina ketvirtadienis
};

showFormatedStrings();

//kas antras bus iskirptas

const showFormatedData = () => {
  const oddNumbers = [1, 2, 3, 4, 5].filter((number) => number % 2 === 1);
  console.log(oddNumbers);
  console.log(
    [1, 2, 3, 4, 5].filter((number) => {
      if (number % 2 === 1) {
        return number;
      }
    })
  );
  const multipliedNumbers = [1, 2, 3, 4, 5].map((number) => number * 2);
  console.log(multipliedNumbers);

  const isPositiveNumbers = [1, 2, 3, -4, 5].every((number) => number > 0); // boolean
  console.log(isPositiveNumbers);

  const hasNegativeNumbers = [-1, 2, -3, 4, -5].some((number) => number < 0);
  console.log(hasNegativeNumbers);

  const posibleNegativeNumber = [-1, 2, -3, 4, -5].find((number) => number < 0); // randa pati pirma neigiama
  console.log(posibleNegativeNumber);

  [-1, 2, -3, 4, -5].forEach((number) => console.log(number)); //islogina kiekviena masyvo objekta (parodo consolej)
};
showFormatedData();
