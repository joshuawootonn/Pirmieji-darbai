import joi from "joi";

const orderSchema = joi.object({
  name: joi.string().required(),
  orderedAt: joi.string().required(),
  completedAt: joi.string(),
  products: joi.array().required(),
  totalPrice: joi.number().required(),
});

export class Order {
  id;
  name;
  orderedAt;
  completedAt;
  products; //ProductId[] - modelis
  totalPrice;
  //kai kuriais atvejais reikes initId, initName ir pan
  constructor({ name, orderedAt, completedAt, products, totalPrice, id }) {
    const newOrderData = {
      name,
      orderedAt,
      completedAt,
      products,
      totalPrice,
    };

    const orderValidationResult = orderSchema.validate(newOrderData);

    if (orderValidationResult.error) {
      throw Error(orderValidationResult.error);
    }

    this.id = id;
    this.name = name;
    this.orderedAt = orderedAt;
    this.completedAt = completedAt;
    this.products = products;
    this.totalPrice = totalPrice;
  }
}
