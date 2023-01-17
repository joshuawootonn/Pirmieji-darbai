import joi from "joi";

const productSchema = joi.object({
  name: joi.string(),
  price: joi.number(),
  isAvailable: joi.boolean(),
  imageURL: joi.string(),
});

export class Product {
  id;
  name;
  price;
  isAvailable;
  imageURL;

  constructor(name, price, isAvailable, imageURL, id) {
    const newProductData = { name, price, isAvailable, imageURL };

    const productValidationResult = productSchema.validate(newProductData);

    if (productValidationResult.error) {
      throw Error(productValidationResult.error);
    }

    this.id = id;
    this.name = name;
    this.price = price;
    this.isAvailable = isAvailable;
    this.imageURL = imageURL;
  }
}
