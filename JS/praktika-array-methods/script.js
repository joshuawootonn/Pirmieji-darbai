import { addProducts } from "./addProducts";

const car = {
  price: 20_000,
  color: "red",
};
const products = [car];

console.log(products);

function Car(price, color) {
  this.price = price;
  this.color = color;
}

const premiumCar = new Car(100_000, "red");
const flower = {
  price: 20,
  color: "pink",
};

products.push(premiumCar);

console.log(products);

removeFirstProduct(); //iskvieciam ja, returninam

addProducts(15);

console.log(products);

products.forEach(
  (product, productNumber) =>
    console.log({ price: product.price.toFixed(2), productNumber }) //po kableliu 2 skaiciai
);

const getProductsWithNewProducInMiddle = (product) => {
  const halfLengthofArray = Math.round(products.length / 2);
  const modifiedProducts = products
    .slice(0, halfLengthofArray)
    .concat([product, ...products.slice(halfLengthofArray)]);
  //const modifiedProducts = [
  //  products.slice(0, halfLengthofArray),
  //   product,
  // products.slice(halfLengthofArray),
  // ];
  console.log(getProductsWithNewProducInMiddle);
};
//jei sudet du masyvus naudosim concat - jis naudojamas tik masyve

const rearagedProducts = getProductsWithNewProducInMiddle(flower);
