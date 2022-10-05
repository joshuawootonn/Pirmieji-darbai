const addProducts = (productsAmount = 20) => {
  function RandomProduct() {
    //function constructor
    const randomNumber = Math.random();
    const roundedNumber = Math.round(randomNumber * 9_000 + 1_000); // nuo 1000 iki 10000; this yra objektas
    this.price = roundedNumber;

    if (Math.round(randomNumber)) {
      this.color = "black";
    } else {
      this.isAvailable = true;
    }
  }
  for (let index = 0; index < productsAmount; index++) {
    const product = new RandomProduct();
    products.push(product);
  }
};
const removeFirstProduct = () => {
  products.shift();
};
