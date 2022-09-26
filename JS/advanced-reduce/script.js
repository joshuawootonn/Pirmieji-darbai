const items = [
  { productName: "Tamsios spalvos akiniai" },
  { productName: "Šviesios spalvos akiniai" },
  { productName: "Žalios spalvos akiniai" },
  { productName: "Geltonos spalvos akiniai" },
];

const getConcatinatedItems = () => {
  const initialValue = "";
  const concatinatedString = items.reduce(
    (previuosValue, currentValue) =>
      `${previuosValue} ${currentValue.productName.split(" ")[0]}`, // split pagalba tarp žodžių daromi tarpai rezultate
    initialValue
  );
  return concatinatedString;
};

console.log(getConcatinatedItems());
